const router = require("express").Router();

const {
  create,
  update,
  destroy,
  findAll,
  findOne,
} = require("../controllers/taskController");
const { taskValidation } = require("../middlewares/validation");

router.post("/task", taskValidation, create);
router.get("/tasks", findAll);
router.get("/tasks/:id", findOne);
router.patch("/tasks/:id", taskValidation, update);
router.delete("/tasks/:id", destroy);

module.exports = router;
