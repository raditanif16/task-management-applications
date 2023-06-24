const { DataTypes } = require("sequelize");
const database = require("../database");

const Task = database.define("task", {
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  description: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  completed: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
  },
});

module.exports = Task;
