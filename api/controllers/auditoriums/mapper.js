"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dbToModel = void 0;
const dbToModel = (auditorium) => {
    return {
        id: auditorium.id,
        name: auditorium.name
    };
};
exports.dbToModel = dbToModel;
