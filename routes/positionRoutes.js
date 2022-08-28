const router = require("express").Router();
const positionControllers = require("../controllers/positionControllers");

router.route("/").get(positionControllers.getPositions);
router.route("/").post(positionControllers.createPosition);
router.route("/:id").get(positionControllers.getPosition);

module.exports = router;
