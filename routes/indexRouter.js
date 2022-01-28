const express = require("express");
const router = express.Router();
const {saveUserData,indexView,compair,tac,specialOffer, productDetails, contact, normal, register, products, legalNotice,loginUser,djiMavic,matrice,phantomrtk } = require("../controllers/indexController")
const {postRequest } = require("../controllers/apiController")



router.get("/", indexView);
router.get("/index", indexView);
router.get("/special_offer", specialOffer);
router.get("/tac", tac);
router.get("/compair", compair);
router.get("/product_details", productDetails);
router.get("/mavic3", djiMavic);
router.get("/matrice300", matrice);
router.get("/phantom4rtk", phantomrtk);
router.get("/contact", contact);
router.get("/legal_notice", legalNotice);
router.get("/normal", normal);
router.get("/register", register);
router.get("/products", products);
router.get("/login", loginUser);
router.post("/api/v1/contact", postRequest);
// router.post("/api/v1/contact", saveUserData);





module.exports = router;
