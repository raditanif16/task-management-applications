const Task = require("../models/taskModel");

exports.create = async (req, res) => {
  try {
    const { title, description, completed } = req.body;

    if (completed === "" || completed === undefined || completed === null) {
      const task = await Task.create({
        title,
        description,
        completed: false,
      });
      res.status(201).json({
        status: "Success",
        message: "New task created successfully",
        data: {
          task,
        },
      });
    } else {
      const task = await Task.create({
        title,
        description,
        completed,
      });
      res.status(201).json({
        status: "Success",
        message: "New task created successfully",
        data: {
          task,
        },
      });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({
      status: "Error",
      message: "Task creation failed",
      data: error,
    });
  }
};

exports.findAll = async (req, res) => {
  try {
    const tasks = await Task.findAll();
    res.status(200).json({
      status: "Success",
      message: "Successfully displays all tasks",
      data: {
        tasks,
      },
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      status: "Error",
      message: "Failed to display all tasks",
      data: error,
    });
  }
};

exports.findOne = async (req, res) => {
  try {
    const { id } = req.params;
    const task = await Task.findOne({
      where: {
        id,
      },
    });

    if (!task) {
      res.status(404).json({
        status: "Failed",
        message: "Task not found",
      });
    }

    res.status(200).json({
      status: "Success",
      message: `Successfully displayed task with id is ${id}`,
      data: { task },
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      status: "Error",
      message: `Failed displayed task with id is ${id}`,
      data: error,
    });
  }
};

exports.update = async (req, res) => {
  try {
    const { id } = req.params;

    const updated = await Task.update(req.body, {
      where: {
        id,
      },
    });

    if (!updated[0]) {
      res.status(404).json({
        status: "Failed",
        message: "Task not found",
      });
    }

    res.status(200).json({
      status: "Success",
      message: `Successfully update task with id is ${id}`,
      data: { updated },
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      status: "Error",
      message: `Failed to update task with id is ${id}`,
      data: error,
    });
  }
};

exports.destroy = async (req, res) => {
  try {
    const { id } = req.params;

    const destroyed = await Task.destroy({
      where: { id },
    });

    if (!destroyed) {
      res.status(404).json({
        status: "Failed",
        message: "Task not found",
      });
    }

    res.status(200).json({
      status: "Success",
      message: `Successfully deleted task with id is ${id}`,
      data: destroyed,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      status: "Error",
      message: `Failed to delete task with id is ${id}`,
      data: error,
    });
  }
};
