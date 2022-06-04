"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const models_1 = require("./models");
const DbInit = () => {
    models_1.Auditorium.sync({ alter: true });
    models_1.Seat.sync({ alter: true });
};
exports.default = DbInit;
