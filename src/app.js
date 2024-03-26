require("dotenv").config();
const createError = require("http-errors");
const express = require("express");
const path = require("path");
var logger = require("morgan");
const bodyParser = require("body-parser")
const session = require("express-session");
const passport = require("passport");
const cors = require("cors");

//

var indexRouter = require("./routes/index");
var usersRouter = require("./routes/users");
const authRouter = require("./routes/auth");
const { User } = require("./models/index");
const passportLocal = require("./passports/passport.local");
const guestMiddleware = require("./middlewares/admin/auth.middleware");

//
const app = express();
// CORS
var whitelist = [
  "http://127.0.0.1:63696",
  "http://localhost:8080",
  "http://localhost:8080/admin/dashboard/users",

];
var corsOptions = {
  origin: function (origin, callback) {
    const mode = process.env.NODE_ENV || "development";
    if (mode === "development") {
      return callback(null, true);
    }

    if (whitelist.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
};

// app.use(cors(corsOptions));
app.use(cors({ origin: "*" }));
//

app.use(
  session({
    secret: "f8",
    resave: false,
    saveUninitialized: true,
  }),
);
app.use(passport.initialize());
app.use(passport.session());
// passport.use("local", passportLocal);

passport.serializeUser(function (user, done) {
  done(null, user.id);
});

passport.deserializeUser(async function (id, done) {
  //Đọc user từ database theo id
  const user = await User.findByPk(id);
  done(null, user);
});

app.use(logger("dev"));
// parse application/json
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))
app.use(express.static(path.join(__dirname, "public")));

app.use("/auth", guestMiddleware, authRouter);
// app.use("/", indexRouter);
app.use("/users", usersRouter)

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  console.log("Error: ", err)

  // render the error page
  res.status(err.status || 500);
  res.json({ error: err });
});

module.exports = app;
