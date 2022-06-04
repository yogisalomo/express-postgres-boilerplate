"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dbToModel = void 0;
const dbToModel = (seat) => {
    return {
        id: seat.id,
        number: seat.number,
        isAvailable: seat.is_available
    };
};
exports.dbToModel = dbToModel;
