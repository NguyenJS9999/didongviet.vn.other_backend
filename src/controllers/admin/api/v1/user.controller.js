console.log('controller -> admin -> api -> v1 -> user.controller');

const { Op } = require('sequelize');
const { object, string } = require('yup');
const bcrypt = require('bcrypt');
const { Users } = require('../../../../models/index');
// console.log('In ra bảng Users: ', Users);

module.exports = {
	index: async (req, res) => {
		// console.log('Chạy vào get list Users: ');
		const {
			order = 'asc',
			sort = 'id',
			status,
			q,
			limit  = 20,
			page = 1
		} = req.query;
		const response = {};
		try {
			const filter = {};
			if (status === 'true' || status === 'false') {
				filter.status = status === 'true';
			}
			if (q) {
				filter[Op.or] = {
					name: {
						[Op.iLike]: `%${q.trim()}%`
					},
					email: {
						[Op.iLike]: `%${q.trim()}%`
					}
				};
			}
			const options = {
				order: [[sort, order]],
				attributes: {
					exclude: [
						'password',
						'otp_secret',
						'otp_expires_at',
						'otp_verified_at',
						'active_token',
						'active_token_expires_at',
						'reset_token',
						'reset_token_expires_at'
					]
				},


				where: filter
			};
			if (limit && Number.isInteger(+limit)) {
				const offset = (page - 1) * limit;
				options.limit = limit;
				options.offset = offset;
			}
		// console.log('Chạy vào get list Users options: ', options);

			const { count, rows: users } = await Users.findAndCountAll(options);
			Object.assign(response, {
				status: 200,
				message: 'Success',
				data: users,
				count
			});
		} catch (error) {
			Object.assign(response, { status: 500, message: 'Server Error' });
		}

		res.status(response.status).json(response);
	},
	find: async (req, res) => {
		// console.log('Chạy vào find one Users: ');

		const { id } = req.params;
		const response = {};
		try {
			const user = await Users.findOne(
				{
					where: { id },
          attributes: { exclude: [
						'password',
						'otp_secret',
						'otp_expires_at',
						'otp_verified_at',
						'active_token',
						'active_token_expires_at',
						'reset_token',
						'reset_token_expires_at'
					]},
				},
			);
			if (!user) {
				const error = new Error('User Not Found');
				error.status = 404;
				throw error;
			}
			Object.assign(response, {
				status: 200,
				message: 'Success',
				data: user
			});
		} catch (e) {
			if (e.status !== 404) {
				e.message = 'Server Error';
				e.status = 500;
			}
			Object.assign(response, {
				status: e.status,
				message: e.message
			});
		}
		res.status(response.status).json(response);
	},
  // Create
	store: async (req, res) => {
		const response = {};
		//Validate
		const schema = object({
			name: string().required('Tên bắt buộc phải nhập'),
			// address: string().required('Tên bắt buộc phải nhập'),
			email: string()
				.required('Email bắt buộc phải nhập')
				.email('Email không đúng định dạng'),
			// avata: string().required('Avata bắt buộc phải có'),
			// infors: string().required('Tên bắt buộc phải nhập'),
			password: string().required('Mật khẩu bắt buộc phải nhập'),
			role: string().required('Quyền bắt buộc phải nhập'),
			// is_active: string().test(
			// 	'check-boolean',
			// 	'Trạng thái không hợp lệ',
			// 	value => {
			// 		return value === 'true' || value === 'false';
			// 	}
			// ),

		});
		try {
			const body = await schema.validate(req.body, {
				abortEarly: false
			});
			body.password = bcrypt.hashSync(body.password, 10);
      console.log('Create user body: ', body);
			const user = await Users.create(body);
			Object.assign(response, {
				status: 200,
				message: 'Success',
				data: user
			});
			delete user.dataValues.password; //Xóa field password khỏi response
		} catch (e) {
			const errors = Object.fromEntries(
				e.inner.map(item => [item.path, item.message])
			);
			Object.assign(response, {
				status: 400,
				message: 'Bad Request',
				errors
			});
		}
		res.status(response.status).json(response);
	},
	update: async (req, res) => {
		//Validate theo nguyên tắc: Có dữ liệu --> Validate
		/*
    - Nếu name được gửi lên --> Check độ dài
    - Nếu email được gửi lên --> Check định dạng email, check trùng lặp
    - Nếu password được gửi lên --> Check độ dài, độ mạnh yếu
    - Nếu status được gửi lên --> Check tính hợp lệ (true, false)
    */
		const { id } = req.params;
		const method = req.method;
		const response = {};
		//Validate
		const rules = {};
		if (req.body.name) {
			rules.name = string().min(4, 'Tên phải từ 4 ký tự');
		}
		// if (req.body.email) {
		// 	rules.email = string().email('Email không đúng định dạng');
		// }
		if (req.body.password) {
			rules.password = string().min(6, 'Tên phải từ 6 ký tự');
		}
		// if (req.body.is_active) {
		// 	rules.is_active = string().test(
		// 		'check-boolean',
		// 		'Trạng thái không hợp lệ',
		// 		value => {
		// 			return value === true || value === false;
		// 		}
		// 	);
		// }
		const schema = object(rules);
		try {
			let body = await schema.validate(req.body, {
				abortEarly: false
			});
			if (body.password) {
				body.password = bcrypt.hashSync(body.password, 10);
			}
      console.log('update method: ', method);
			// if (method === 'PUT') { // ! PATCH?
			// 	body = Object.assign(
			// 		{
			// 			name: null,
			// 			email: null,
			// 			password: null,
			// 			// is_active: null
			// 		},
			// 		body
			// 	);
			// }
			await Users.update(body, {
				where: { id }
			});
			const user = await Users.findByPk(id, {
				attributes: { exclude: [
          'password',
          'otp_secret',
          'otp_expires_at',
          'otp_verified_at',
          'active_token',
          'active_token_expires_at',
          'reset_token',
          'reset_token_expires_at'
        ]}
			});
			Object.assign(response, {
				status: 200,
				message: 'Success',
				data: user
			});
		} catch (e) {
      console.log('update catch error', e);
			// const errors = Object.fromEntries(
			// 	e.inner.map(item => [item.path, item.message])
			// );
			Object.assign(response, {
				status: 400,
				message: 'Bad Request',
				// errors
			});
		}
		res.status(response.status).json(response);
	},
	delete: async (req, res) => {
		try {
			const userId = req.params.id;
			// Tìm và xóa bản ghi dựa trên id
			const deletedUser = await Users.destroy({ where: { id: userId } });

			if (!deletedUser) {
				return res.status(404).json({ message: 'User not found' });
			}

			return res.json({ message: 'User deleted successfully' });
		} catch (error) {
			console.error(error);
			return res.status(500).json({ message: 'Internal server error' });
		}
	},

	index2: async (req, res) => {
		const response = {};

		try {
			const { count, rows: users } = await Users.findAndCountAll();

			Object.assign(response, {
				status: 200,
				message: 'Success',
				data: users,
				count
			});
		} catch (error) {
			Object.assign(response, { status: 500, message: 'Máy chủ lỗi' });
		}
		res.status(response.status).json(response);
	}
};
