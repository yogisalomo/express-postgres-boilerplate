"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dbToModel = void 0;
const dbToModel = (reservation) => {
    return {
        id: reservation.id,
        code: reservation.code,
        status: reservation.status,
        seats: reservation.seats
    };
};
exports.dbToModel = dbToModel;
