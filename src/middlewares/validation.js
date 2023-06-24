exports.taskValidation = (req, res, next) => {
  const { title, completed } = req.body;

  if (title === undefined || title == "") {
    return res.status(400).json({
      status: "Failed",
      message: "Title field is required",
    });
  }

  if (
    completed != true &&
    completed != false &&
    completed != 1 &&
    completed != 0 &&
    completed != "" &&
    completed != undefined &&
    completed != null
  ) {
    return res.status(400).json({
      status: "Failed",
      message: "Completed must contain true/false or 1/0",
    });
  }

  next();
};
