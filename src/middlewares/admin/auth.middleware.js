console.log('admin auth.middleware');
// module.exports = (req, res, next) => {
//   const pathname = req.baseUrl + req.path;
//   // /auth/logout
//   if (req.user && pathname !== "/auth/logout") {
//     return res.redirect("/");
//   }
//   return next();
// };

// const { User, Blacklist_tokens } = require("../../models/index");
// const jwt = require("jsonwebtoken");
// module.exports = async (req, res, next) => {
//   const response = {};
//   const token = req.get("Authorization")?.split(" ")[1];
//   if (!token) {
//     Object.assign(response, {
//       status: 401,
//       message: "Unauthorized",
//     });
//   } else {
//     try {
//       const existToken = await Blacklist_tokens.findOne({ where: { token } });
//
//       if (existToken) {
//         throw new Error("Token in blacklist");
//       }
//       const { JWT_SECRET } = process.env;
//       const { userId, exp } = jwt.verify(token, JWT_SECRET);
//       const user = await User.findByPk(userId, {
//         attributes: { exclude: ["password", "refresh_token"] },
//       });
//       if (!user) {
//         throw new Error("User not exist");
//       }
//       req.user = {
//         ...user,
//         accessToken: token,
//         expired: new Date(exp * 1000),
//       };
//       return next();
//     } catch {
//       Object.assign(response, {
//         status: 401,
//         message: "Unauthorized 401",
//       });
//     }
//   }
//   res.status(response.status).json(response);
// };
