const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("userinfo", "root", "password", {
    host: "localhost",
    dialect: "mysql",
});

module.exports = sequelize;
