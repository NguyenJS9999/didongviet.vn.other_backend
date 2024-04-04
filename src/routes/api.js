console.log('router api.js');

var express = require("express");
var router = express.Router();
const authMiddleware = require("../middlewares/admin/auth.middleware");
const authController = require("../controllers/admin/api/v1/auth.controller");
const userController = require("../controllers/admin/api/v1/user.controller");
const productController = require("../controllers/admin/api/v1/product.controller");

//Users
// router.get("/v1/users", authMiddleware, userController.index);
router.get("/v1/users", userController.index); // Create all
router.get("/v1/users/:id", userController.find); // Get one
router.post("/v1/users", userController.store); // Create one
router.put("/v1/users/:id", userController.update);  // Update one
router.patch("/v1/users/:id", userController.update);  // Update one
router.delete("/v1/users/:id", userController.delete);  // Delete one

router.get("/v1/products", productController.index); // Create all
router.get("/v1/products/:id", productController.find); // Get one
router.post("/v1/products", productController.store); // Create one
router.put("/v1/products/:id", productController.update);  // Update one
router.patch("/v1/products/:id", productController.update);  // Update one
router.delete("/v1/products/:id", productController.delete);  // Delete one

//Authentication
router.post("/v1/auth/login", authController.login);
// router.get("/v1/auth/profile", authMiddleware, authController.profile);
// router.post("/v1/auth/logout", authMiddleware, authController.logout);
// router.post("/v1/auth/refresh", authController.refresh);

module.exports = router;
