const logger = require("../utils/winston");
const fs = require('fs');
const console = require("console");
const indexView = async (req, res, next) => {
  try {
    res.render("index", { title: "Drone App" });
  } catch (err) {
    err.type = 'render'
    logger.error(err);
    next(err);

  }
};

const matrice = async (req, res, next) => {
  try {
    res.render("products/dji/matrice300", { title: "Drone App" });
  } catch (err) {
    err.type = 'render'
    logger.error(err);
    next(err);

  }
};

const phantomrtk = async (req, res, next) => {
  try {
    res.render("products/dji/phantom4rtk", { title: "Drone App" });
  } catch (err) {
    err.type = 'render'
    logger.error(err);
    next(err);

  }
};

const productDetailsa = async (req, res, next) => {
  try {
    res.render("product_details1", { title: "Drone App" });
  } catch (err) {
    err.type = 'render'
    logger.error(err);
    next(err);

  }
};


const djiMavic = async (req, res, next) => {
  try {
    res.render("products/dji/mavic3", { title: "Drone App" });
  } catch (err) {
    err.type = 'render'
    logger.error(err);
    next(err);

  }
};
const productDetails = async (req, res, next) => {
  try {
    res.render("product_details", { title: "Drone App" });
  } catch (err) {
    err.type = 'render'
    logger.error(err);
    next(err);

  }
};
const productSummery = async (req, res, next) => {
  try {
    res.render("product_summery", { title: "Drone App" });
  } catch (err) {
    err.type = 'render'
    logger.error(err);
    next(err);

  }
};
const products = async (req, res, next) => {
  try {
    res.render("products", { title: "Drone App" });
  } catch (err) {
    err.type = 'render'
    logger.error(err);
    next(err);

  }
};
const register = async (req, res, next) => {
  try {
    res.render("register", { title: "Drone App" });
  } catch (err) {
    err.type = 'render'
    logger.error(err);
    next(err);

  }
};
const specialOffer = async (req, res, next) => {
  try {
    res.render("special_offer", { title: "Drone App" });
  } catch (err) {
    err.type = 'render'
    logger.error(err);
    next(err);

  }
};
const tac = async (req, res, next) => {
  try {
    res.render("tac", { title: "Drone App" });
  } catch (err) {
    err.type = 'render'
    logger.error(err);
    next(err);

  }
};
const normal = async (req, res, next) => {
  try {
    res.render("normal", { title: "Drone App" });
  } catch (err) {
    err.type = 'render'
    logger.error(err);
    next(err);

  }
};
const loginUser = async (req, res, next) => {
  try {
    res.render("login", { title: "Drone App" });
  } catch (err) {
    err.type = 'render'
    logger.error(err);
    next(err);

  }
};
const legalNotice = async (req, res, next) => {
  try {
    res.render("legal_notice", { title: "Drone App" });
  } catch (err) {
    err.type = 'render'
    logger.error(err);
    next(err);

  }
};
const forgetPass = async (req, res, next) => {
  try {
    res.render("forgetpass", { title: "Drone App" });
  } catch (err) {
    err.type = 'render'
    logger.error(err);
    next(err);

  }
};
const faq = async (req, res, next) => {
  try {
    res.render("faq", { title: "Drone App" });
  } catch (err) {
    err.type = 'render'
    logger.error(err);
    next(err);

  }
};
const error = async (req, res, next) => {
  try {
    res.render("error", { title: "Drone App" });
  } catch (err) {
    err.type = 'render'
    logger.error(err);
    next(err);

  }
};
const contact = async (req, res, next) => {
  try {
    res.render("contact", { title: "Drone App" });
  } catch (err) {
    err.type = 'render'
    logger.error(err);
    next(err);

  }
};
const components = async (req, res, next) => {
  try {
    res.render("components", { title: "Drone App" });
  } catch (err) {
    err.type = 'render'
    logger.error(err);
    next(err);

  }
};
const compair = async (req, res, next) => {
  try {
    res.render("compair", { title: "Drone App" });
  } catch (err) {
    err.type = 'render'
    logger.error(err);
    next(err);

  }
};

const saveUserData = async (req, res, next) => {
  try {

  
    fs.readFile('./mockdata/list.json', 'utf8', function (err, data) {
      if (err) {
        console.log(err)
      } else {
        const file = JSON.parse(data);
        file.users.push({ "name": req.body.name, "email": req.body.email, "phone": req.body.number, "subject": req.body.subject });
        const json = JSON.stringify(file);
        fs.writeFile('./mockdata/list.json', json, 'utf8', function (err) {
          if (err) {
            console.log(err);
          } else {
            //Everything went OK!
          }
        });
      }

    });
    res.status(200).json("success");
  } catch (err) {
    err.type = 'failed to save'
    logger.error(err);
    next(err);
  }
};


module.exports = {
  saveUserData: saveUserData,
  indexView: indexView, matrice: matrice,
  djiMavic: djiMavic,
  productDetails: productDetails,
  productSummery: productSummery,
  products: products,
  phantomrtk: phantomrtk,
  register: register, specialOffer: specialOffer, tac: tac, normal: normal, loginUser: loginUser, legalNotice: legalNotice, forgetPass: forgetPass, faq: faq, error: error, contact: contact, components: components, compair: compair
};
