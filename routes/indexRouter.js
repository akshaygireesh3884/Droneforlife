const express = require("express");
const router = express.Router();
const {indexView,compair,tac,specialOffer, productDetails, contact, normal, register, products, legalNotice,loginUser,productDetailsa } = require("../controllers/indexController")


router.get("/", indexView);
router.get("/index", indexView);
router.get("/special_offer", specialOffer);
router.get("/tac", tac);
router.get("/compair", compair);
router.get("/product_details", productDetails);
router.get("/product_details1", productDetailsa);
router.get("/contact", contact);
router.get("/legal_notice", legalNotice);
router.get("/normal", normal);
router.get("/register", register);
router.get("/products", products);
router.get("/login", loginUser);




module.exports = router;
