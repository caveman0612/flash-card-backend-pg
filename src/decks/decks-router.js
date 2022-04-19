const router = require("express").Router();
const controller = require("./decks-controller");

// router.get("/", (req, res) => {
//   res.json({ message: "decks" });
// });
router.get("/", controller.list);

module.exports = router;
