const router = require("express").Router();
const brokerControllers = require("../controllers/brokerControllers");

router.route("/").get(brokerControllers.getBrokers);
router.route("/").post(brokerControllers.createBroker);
router.route("/:id").get(brokerControllers.getBroker);

module.exports = router;
