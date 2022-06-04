"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const db_name = 'amazevr_dev';
const db_user = 'amazevr';
const db_host = 'localhost';
const db_driver = 'postgres';
const db_password = 'A12341234a';
const SequelizeConnection = new sequelize_1.Sequelize(db_name, db_user, db_password, {
    host: db_host,
    dialect: db_driver
});
exports.default = SequelizeConnection;
