const router = require("express").Router();
const productControllers = require("../controllers/productControllers");

router.route("/").get(productControllers.getProducts);
router.route("/").post(productControllers.createProduct);
router.route("/:id").get(productControllers.getProduct);

module.exports = router;
