import { Dialect, Sequelize } from "sequelize";

const db_name : string = 'amazevr_dev';
const db_user : string = 'amazevr';
const db_host : string = 'localhost';
const db_driver : Dialect = 'postgres';
const db_password : string = 'A12341234a';

const SequelizeConnection = new Sequelize(db_name, db_user, db_password, {
    host: db_host,
    dialect: db_driver
});

export default SequelizeConnection