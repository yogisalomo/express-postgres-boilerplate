"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const config_1 = __importDefault(require("../config"));
const auditorium_1 = __importDefault(require("./auditorium"));
class Seat extends sequelize_1.Model {
}
Seat.init({
    id: {
        type: sequelize_1.DataTypes.INTEGER.UNSIGNED,
        autoIncrement: true,
        primaryKey: true,
    },
    number: {
        type: sequelize_1.DataTypes.STRING
    },
    is_available: {
        type: sequelize_1.DataTypes.BOOLEAN,
        defaultValue: false
    },
}, {
    timestamps: true,
    sequelize: config_1.default,
});
Seat.belongsTo(auditorium_1.default, {
    foreignKey: 'auditorium_id'
});
exports.default = Seat;
