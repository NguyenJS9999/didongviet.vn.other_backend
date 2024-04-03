console.log('router api.js');

var express = require("express");
var router = express.Router();
const userController = require("../controllers/admin/api/v1/user.controller");
const authController = require("../controllers/admin/api/v1/auth.controller");
const authMiddleware = require("../middlewares/admin/auth.middleware");

//Users
// router.get("/v1/users", authMiddleware, userController.index);
router.get("/v1/users", userController.index); // Create all
router.get("/v1/users/:id", userController.find); // Get one
router.post("/v1/users", userController.store); // Create one
router.put("/v1/users/:id", userController.update);  // Update one
router.patch("/v1/users/:id", userController.update);
router.delete("/v1/users/:id", userController.delete);


//Authentication
router.post("/v1/auth/login", authController.login);
// router.get("/v1/auth/profile", authMiddleware, authController.profile);
// router.post("/v1/auth/logout", authMiddleware, authController.logout);
// router.post("/v1/auth/refresh", authController.refresh);

module.exports = router;
