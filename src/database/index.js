const { Sequelize } = require("sequelize");
const {
  DB,
  USER,
  PASSWORD,
  HOST,
  DIALECT,
} = require("../configs/databaseConfig");

const database = new Sequelize(DB, USER, PASSWORD, {
  host: HOST,
  dialect: DIALECT,
});

module.exports = database;
