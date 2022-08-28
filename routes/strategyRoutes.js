const router = require("express").Router();
const strategyControllers = require("../controllers/strategyControllers");

router.route("/").get(strategyControllers.getStrategies);
router.route("/").post(strategyControllers.createStrategy);
router.route("/:id").get(strategyControllers.getStrategy);

module.exports = router;
