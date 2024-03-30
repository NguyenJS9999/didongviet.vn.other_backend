// console.log('auth router');
//
// var express = require("express");
// var router = express.Router();
// const authController = require("../controllers/admin/api/v1/auth.controller");
// const passport = require("passport");
//
// router.post("/login", authController.login);

// router.post(
//   "/login",
//   passport.authenticate("local", {
//     failureRedirect: "/auth/login",
//     failureFlash: true,
//     successRedirect: "/",
//   }),
//   (req, res) => {
//     const user = req.user;
//     res.json({ user });
//   },
// );

// router.get("/logout", (req, res) => {
//   req.logout((err) => {});
//   return res.redirect("/auth/login");
// });
//
// module.exports = router;
