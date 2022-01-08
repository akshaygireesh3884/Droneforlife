const express = require("express");
const loyaltyrouter = express.Router();

const {loyaltyindex,loyaltyhome,loyaltycreateaccount,loyaltysignupsuccess} = require("../controllers/loyaltyController");

/* GET Loyalty home page */
loyaltyrouter.get("/index", loyaltyindex);
/* GET Loyalty home page from direct QRSCAN*/
loyaltyrouter.get("/home", loyaltyhome);
/* GET Loyalty Create Account page. */
loyaltyrouter.get("/createaccount", loyaltycreateaccount);
/* GET Loyalty Success page. */
loyaltyrouter.get("/signupsuccess", loyaltysignupsuccess);


module.exports = loyaltyrouter;
