var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");



/* Views Only */
const indexRouter = require("./routes/indexRouter");
const errorRouter = require("./routes/errorRouter");

/* API Routes */

var app = express();


app.set('views', path.join(__dirname, 'views'));
// set the view engine to ejs
app.set('view engine', 'ejs');

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));


app.use("/", indexRouter);

app.use("/error", errorRouter);

//Keeping it last

module.exports = app;
