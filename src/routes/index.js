// var express = require('express');
// var router = express.Router();

/* GET home page. */
// router.get('/', function (req, res, next) {
// 	const users = {
// 		home: 'Get list all'
// 	};
// 	const response = {};
//
// 	Object.assign(response, {
// 		status: 200,
// 		message: 'Success',
// 		data: users,
// 		count: 10
// 	});
// 	res.status(response.status).json(response);
// });

// router.get('/product', function (req, res, next) {
// 	const users = {
// 				paging: {
// 			currentPage: 1,
// 			pageSize: 10,
// 			total: 206
// 		},
// 		data: [
// 			{
// 				product_id: 30620,
// 				thumbnail:
// 					'files/products/2023/8/29/1/1695953606803_thumb_iphone_15_pro_didongviet.jpg',
// 				slug: 'iphone-15-pro-max-256gb',
// 				url: 'san-pham-chua-phan-loai/apple-iphone-15-pro-max-256gb-cty-cdd4ce',
// 				redirect_url: 'iphone-15-pro-max',
// 				redirect_type: 301,
// 				product: 'iPhone 15 Pro Max 256GB Chính hãng (VN/A)',
// 				status: 'A',
// 				position: 0,
// 				page_title:
// 					'iPhone 15 Pro Max 256GB (VN/A) | Trả góp 0%, Phụ phí 0 đồng',
// 				product_hover: '',
// 				is_installment_zero: 1,
// 				is_installment: 'Y',
// 				is_preorder: 0,
// 				is_comming_soon: 0,
// 				is_installment_online: 1,
// 				is_paid_online: 1,
// 				online_gifts: '',
// 				price: '29990000',
// 				list_price: '38990000',
// 				percentage_discount: '23',
// 				discount_type: 1,
// 				categorySlug: 'dien-thoai',
// 				rootCategorySlug: 'dien-thoai',
// 				productSlug: 'iphone-15-pro-max-256gb',
// 				stickers: [],
// 				ratings: {
// 					review_id: 41,
// 					product_id: 30620,
// 					ratings: '[0,0,0,0,1]',
// 					avg_point: 5,
// 					count: 1,
// 					created_at: null,
// 					updated_at: null
// 				}
// 			},
// 			{
// 				product_id: 30616,
// 				thumbnail:
// 					'files/products/2023/8/29/1/1695953771684_thumb_iphone_15_pro_didongviet.jpg',
// 				slug: 'apple-iphone-15-pro-256gb-cty-6d888f',
// 				url: 'san-pham-chua-phan-loai/apple-iphone-15-pro-256gb-cty-6d888f',
// 				redirect_url: 'iphone-15-pro-256gb',
// 				redirect_type: 300,
// 				product: 'iPhone 15 Pro 256GB Chính hãng (VN/A)',
// 				status: 'A',
// 				position: 1,
// 				page_title:
// 					'iPhone 15 Pro 256GB VN/A | Trả góp 0% trước 0Đ, Phụ phí 0Đ',
// 				product_hover: '',
// 				is_installment_zero: 1,
// 				is_installment: 'Y',
// 				is_preorder: 0,
// 				is_comming_soon: 0,
// 				is_installment_online: 1,
// 				is_paid_online: 1,
// 				online_gifts: '',
// 				price: '28990000',
// 				list_price: '32990000',
// 				percentage_discount: '12',
// 				discount_type: 1,
// 				categorySlug: 'dien-thoai',
// 				rootCategorySlug: 'dien-thoai',
// 				productSlug: 'apple-iphone-15-pro-256gb-cty-6d888f',
// 				stickers: [],
// 				ratings: null
// 			},
// 			{
// 				product_id: 30612,
// 				thumbnail:
// 					'files/products/2023/8/29/1/1695953356175_thumb_iphone_15_didongviet.jpg',
// 				slug: 'iPhone-15-Plus',
// 				url: 'san-pham-chua-phan-loai/apple-iphone-15-plus-128gb-cty-4b8fcb',
// 				redirect_url: 'iphone-15-plus',
// 				redirect_type: 300,
// 				product: 'iPhone 15 Plus 128GB Chính hãng (VN/A)',
// 				status: 'A',
// 				position: 2,
// 				page_title:
// 					'iPhone 15 Plus 128GB VN/A | Trả góp 0% trước 0Đ, Phụ phí 0Đ',
// 				product_hover: '',
// 				is_installment_zero: 1,
// 				is_installment: 'Y',
// 				is_preorder: 0,
// 				is_comming_soon: 0,
// 				is_installment_online: 1,
// 				is_paid_online: 1,
// 				online_gifts: '',
// 				price: '22990000',
// 				list_price: '27990000',
// 				percentage_discount: '18',
// 				discount_type: 1,
// 				categorySlug: 'dien-thoai',
// 				rootCategorySlug: 'dien-thoai',
// 				productSlug: 'iPhone-15-Plus',
// 				stickers: [],
// 				ratings: null
// 			},
// 			{
// 				product_id: 30609,
// 				thumbnail:
// 					'files/products/2023/8/29/1/1695953279709_thumb_iphone_15_didongviet.jpg',
// 				slug: 'apple-iphone-15-128gb-cty-cac328',
// 				url: 'san-pham-chua-phan-loai/apple-iphone-15-128gb-cty-cac328',
// 				redirect_url: 'iphone-15-128gb',
// 				redirect_type: 300,
// 				product: 'iPhone 15 128GB Chính hãng (VN/A)',
// 				status: 'A',
// 				position: 3,
// 				page_title:
// 					'iPhone 15 128GB (VN/A) | Trả góp 0%, trả trước 0Đ, Phụ phí 0Đ',
// 				product_hover: '',
// 				is_installment_zero: 1,
// 				is_installment: 'Y',
// 				is_preorder: 0,
// 				is_comming_soon: 0,
// 				is_installment_online: 1,
// 				is_paid_online: 1,
// 				online_gifts: '',
// 				price: '19490000',
// 				list_price: '24990000',
// 				percentage_discount: '22',
// 				discount_type: 1,
// 				categorySlug: 'dien-thoai',
// 				rootCategorySlug: 'dien-thoai',
// 				productSlug: 'apple-iphone-15-128gb-cty-cac328',
// 				stickers: [],
// 				ratings: null
// 			},
// 			{
// 				product_id: 14680,
// 				thumbnail:
// 					'files/products/2023/6/17/1/1689587867324_samsung_galaxy_s23_ultra_1_didongviet.jpg',
// 				slug: 'samsung-galaxy-s23-ultra-5g-256gb',
// 				url: 'san-pham-chua-phan-loai/samsung-galaxy-s23-ultra-sm-s918b-ds-8gb-256gb-cty-87fcb7',
// 				redirect_url: 'samsung-galaxy-s23-ultra-5g-256gb',
// 				redirect_type: 301,
// 				product: 'Samsung Galaxy S23 Ultra 5G 256GB Chính Hãng',
// 				status: 'A',
// 				position: 4,
// 				page_title:
// 					'Samsung Galaxy S23 Ultra 5G 256GB chính hãng giá tốt góp 0%',
// 				product_hover: '',
// 				is_installment_zero: 1,
// 				is_installment: 'Y',
// 				is_preorder: 0,
// 				is_comming_soon: 0,
// 				is_installment_online: 1,
// 				is_paid_online: 1,
// 				online_gifts: '',
// 				price: '24240000',
// 				list_price: '31990000',
// 				percentage_discount: '24',
// 				discount_type: 1,
// 				categorySlug: 'dien-thoai',
// 				rootCategorySlug: 'dien-thoai',
// 				productSlug: 'samsung-galaxy-s23-ultra-5g-256gb',
// 				stickers: [],
// 				ratings: {
// 					review_id: 32,
// 					product_id: 14680,
// 					ratings: '[0,0,0,1,1]',
// 					avg_point: 4.5,
// 					count: 2,
// 					createdAt: null,
// 					updated_at: '2023-10-19 13:18:30'
// 				}
// 			},
// 			{
// 				product_id: 29624,
// 				thumbnail:
// 					'files/products/2023/6/14/1/1689348461635_galaxy_a34_didongviet.jpg',
// 				slug: 'samsung-galaxy-a34-128gb',
// 				url: 'san-pham-chua-phan-loai/samsung-galaxy-a34-5g-8gb-256gb-acc3de',
// 				redirect_url: 'samsung-galaxy-a34-128gb',
// 				redirect_type: 301,
// 				product: 'Samsung Galaxy A34 5G 128GB Chính Hãng',
// 				status: 'A',
// 				position: 5,
// 				page_title:
// 					'Samsung Galaxy A34 5G 128GB chính hãng - Trả góp 0%',
// 				product_hover: '',
// 				is_installment_zero: 1,
// 				is_installment: 'Y',
// 				is_preorder: 0,
// 				is_comming_soon: 0,
// 				is_installment_online: 1,
// 				is_paid_online: 1,
// 				online_gifts: '',
// 				price: '5990000',
// 				list_price: '8490000',
// 				percentage_discount: '29',
// 				discount_type: 1,
// 				categorySlug: 'dien-thoai',
// 				rootCategorySlug: 'dien-thoai',
// 				productSlug: 'samsung-galaxy-a34-128gb',
// 				stickers: [],
// 				ratings: {
// 					review_id: 62,
// 					product_id: 29624,
// 					ratings: '[0,0,0,0,1]',
// 					avg_point: 5,
// 					count: 1,
// 					createdAt: null,
// 					updated_at: null
// 				}
// 			},
// 			{
// 				product_id: 29620,
// 				thumbnail:
// 					'files/products/2023/6/14/1/1689348907135_galaxy_a54_didongviet_1.jpg',
// 				slug: 'samsung-galaxy-a54-256gb',
// 				url: 'san-pham-chua-phan-loai/samsung-galaxy-a54-5g-8gb-256gb-87c732',
// 				redirect_url: 'samsung-galaxy-a54-256gb',
// 				redirect_type: 301,
// 				product: 'Samsung Galaxy A54 5G 256GB Chính Hãng',
// 				status: 'A',
// 				position: 6,
// 				page_title:
// 					'Samsung Galaxy A54 5G 256GB Chính Hãng | Giá Tốt, Trả Góp 0%',
// 				product_hover: '',
// 				is_installment_zero: 1,
// 				is_installment: 'Y',
// 				is_preorder: 0,
// 				is_comming_soon: 0,
// 				is_installment_online: 1,
// 				is_paid_online: 1,
// 				online_gifts: '',
// 				price: '8390000',
// 				list_price: '11290000',
// 				percentage_discount: '26',
// 				discount_type: 1,
// 				categorySlug: 'dien-thoai',
// 				rootCategorySlug: 'dien-thoai',
// 				productSlug: 'samsung-galaxy-a54-256gb',
// 				stickers: [],
// 				ratings: null
// 			},
// 			{
// 				product_id: 29621,
// 				thumbnail:
// 					'files/products/2023/6/14/1/1689348854471_galaxy_a54_didongviet.jpg',
// 				slug: 'samsung-galaxy-a54-128gb',
// 				url: 'san-pham-chua-phan-loai/samsung-galaxy-a54-5g-8gb-128gb-8f0ef3',
// 				redirect_url: 'samsung-galaxy-a54-128gb',
// 				redirect_type: 301,
// 				product: 'Samsung Galaxy A54 5G 128GB Chính Hãng',
// 				status: 'A',
// 				position: 7,
// 				page_title:
// 					'Samsung Galaxy A54 5G chính hãng | Giá tốt, Trả góp 0%',
// 				product_hover: '',
// 				is_installment_zero: 1,
// 				is_installment: 'Y',
// 				is_preorder: 0,
// 				is_comming_soon: 0,
// 				is_installment_online: 1,
// 				is_paid_online: 1,
// 				online_gifts: '',
// 				price: '7990000',
// 				list_price: '10490000',
// 				percentage_discount: '24',
// 				discount_type: 1,
// 				categorySlug: 'dien-thoai',
// 				rootCategorySlug: 'dien-thoai',
// 				productSlug: 'samsung-galaxy-a54-128gb',
// 				stickers: [],
// 				ratings: null
// 			},
// 			{
// 				product_id: 29585,
// 				thumbnail:
// 					'files/products/2023/8/9/1/1694250012970_xiaomi_redmi_12c_64gb_thumb_logo_bh19t_didongviet.jpg',
// 				slug: 'xiaomi-redmi-12c-64gb',
// 				url: 'san-pham-chua-phan-loai/xiaomi-redmi-12c-4gb-64gb-cty-7c8636',
// 				redirect_url: 'xiaomi-redmi-12c-64gb',
// 				redirect_type: 301,
// 				product: 'Xiaomi Redmi 12C 64GB Chính Hãng',
// 				status: 'A',
// 				position: 10,
// 				page_title: 'Xiaomi Redmi 12C Chính hãng | Giá rẻ, trả góp 0%',
// 				product_hover: '',
// 				is_installment_zero: 1,
// 				is_installment: 'Y',
// 				is_preorder: 0,
// 				is_comming_soon: 0,
// 				is_installment_online: 1,
// 				is_paid_online: 1,
// 				online_gifts: '',
// 				price: '2390000',
// 				list_price: '3590000',
// 				percentage_discount: '33',
// 				discount_type: 1,
// 				categorySlug: 'dien-thoai',
// 				rootCategorySlug: 'dien-thoai',
// 				productSlug: 'xiaomi-redmi-12c-64gb',
// 				stickers: [],
// 				ratings: null
// 			},
// 			{
// 				product_id: 13494,
// 				thumbnail:
// 					'files/products/2023/6/14/1/1689349344792_galaxy_a23_didongviet_1.jpg',
// 				slug: 'samsung-galaxy-a23-5g',
// 				url: 'san-pham-chua-phan-loai/samsung-galaxy-a23-5g-sm-a236-4gb-128gb-cty-4ccf92',
// 				redirect_url: 'samsung-galaxy-a23-5g',
// 				redirect_type: 301,
// 				product: 'Samsung Galaxy A23 5G 128GB Chính Hãng',
// 				status: 'A',
// 				position: 12,
// 				page_title: 'Samsung Galaxy A23 5G 128GB Chính Hãng',
// 				product_hover: '',
// 				is_installment_zero: 1,
// 				is_installment: 'Y',
// 				is_preorder: 0,
// 				is_comming_soon: 0,
// 				is_installment_online: 1,
// 				is_paid_online: 1,
// 				online_gifts: '',
// 				price: '4290000',
// 				list_price: '5990000',
// 				percentage_discount: '28',
// 				discount_type: 1,
// 				categorySlug: 'dien-thoai',
// 				rootCategorySlug: 'dien-thoai',
// 				productSlug: 'samsung-galaxy-a23-5g',
// 				stickers: [],
// 				ratings: {
// 					review_id: 63,
// 					product_id: 13494,
// 					ratings: '[0,0,0,0,1]',
// 					avg_point: 5,
// 					count: 1,
// 					createdAt: null,
// 					updated_at: null
// 				}
// 			}
// 		]
// 	};
// 	const response = {};
//
// 	Object.assign(response, {
// 		status: 200,
// 		message: 'Success',
// 		data: users,
// 		count: 10
// 	});
// 	res.status(response.status).json(response);
// });

// router.get('/auth/login', function (req, res, next) {
//
// 	const data = {
// 		home: 'Trang login'
// 	};
// 	const response = {};
//
// 	Object.assign(response, {
// 		status: 200,
// 		message: 'Success',
// 		data: data,
// 	});
// 	res.status(response.status).json(response);
// });

module.exports = router;
