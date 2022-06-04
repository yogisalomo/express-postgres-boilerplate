"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const config_1 = __importDefault(require("../config"));
const auditorium_1 = __importDefault(require("./auditorium"));
class Reservation extends sequelize_1.Model {
}
Reservation.init({
    id: {
        type: sequelize_1.DataTypes.INTEGER.UNSIGNED,
        autoIncrement: true,
        primaryKey: true,
    },
    code: {
        type: sequelize_1.DataTypes.STRING
    },
    status: {
        type: sequelize_1.DataTypes.NUMBER
    },
    seats: {
        type: sequelize_1.DataTypes.JSON
    },
}, {
    timestamps: true,
    sequelize: config_1.default,
});
Reservation.belongsTo(auditorium_1.default, {
    foreignKey: 'auditorium_id'
});
exports.default = Reservation;
