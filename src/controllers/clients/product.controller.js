module.exports = {
	index: async (req, res) => {
    const response = {};

		Object.assign(response, {
			status: 200,
			message: "Success",
			data: users,
			count,
		});
		res.status(response.status).json(response);

	},

};
