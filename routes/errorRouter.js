var express = require("express");
var router = express.Router();

router.get("/", function (req, res, next) {
    try{
        res.render("error");
    }catch (err) {
        err.type = 'render'
        next(err);
    }
});

module.exports = router;