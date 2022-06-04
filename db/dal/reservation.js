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
exports.releaseCheckout = exports.create = exports.getByCode = void 0;
const reservation_1 = __importDefault(require("../models/reservation"));
const getByCode = (code) => __awaiter(void 0, void 0, void 0, function* () {
    return reservation_1.default.findOne({
        where: {
            code: code
        }
    });
});
exports.getByCode = getByCode;
const create = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    const newReservaton = yield reservation_1.default.create(payload);
    return newReservaton;
});
exports.create = create;
const releaseCheckout = (code) => __awaiter(void 0, void 0, void 0, function* () {
    return reservation_1.default.update({ status: 0 }, {
        where: {
            code: code
        }
    });
});
exports.releaseCheckout = releaseCheckout;
