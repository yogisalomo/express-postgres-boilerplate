"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateAvailabilityByNumber = exports.getUnavailableSeats = exports.getByAuditoriumId = void 0;
const seat_1 = __importDefault(require("../models/seat"));
const getByAuditoriumId = (auditoriumId) => __awaiter(void 0, void 0, void 0, function* () {
    return seat_1.default.findAll({
        where: {
            auditorium_id: auditoriumId
        }
    });
});
exports.getByAuditoriumId = getByAuditoriumId;
const getUnavailableSeats = (auditoriumId, numbers) => __awaiter(void 0, void 0, void 0, function* () {
    return seat_1.default.findAll({
        where: {
            auditorium_id: auditoriumId,
            number: numbers,
            is_available: false
        }
    });
});
exports.getUnavailableSeats = getUnavailableSeats;
const updateAvailabilityByNumber = (updatedAvailability, numbers) => __awaiter(void 0, void 0, void 0, function* () {
    return seat_1.default.update({ is_available: updatedAvailability }, {
        where: {
            number: numbers
        }
    });
});
exports.updateAvailabilityByNumber = updateAvailabilityByNumber;
