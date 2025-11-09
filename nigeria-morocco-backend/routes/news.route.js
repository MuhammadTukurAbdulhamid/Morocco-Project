const { Router } = require("express");
const NewsController = require("../controllers/NewsController");
const { auth } = require("../middlewares/auth");

const router = Router();

router.get("/news", NewsController.list);
router.post("/news", auth, NewsController.create);
router.put("/news/:id", auth, NewsController.update);
router.delete("/news/:id", auth, NewsController.remove);

module.exports = router;

