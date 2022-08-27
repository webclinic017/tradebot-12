const router = require("express").Router();
const userControllers = require("../controllers/userControllers");

router.route("/").get(userControllers.getAllUsers);
router.route("/").post(userControllers.registerUser);
router.route("/:email").get(userControllers.getUser);

module.exports = router;
