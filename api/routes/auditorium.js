"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const auditoriumController = __importStar(require("../controllers/auditoriums"));
const seatController = __importStar(require("../controllers/seats"));
const reservationController = __importStar(require("../controllers/reservations"));
const AuditoriumRouter = (0, express_1.Router)();
AuditoriumRouter.get('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const queryResults = yield auditoriumController.index();
    const response = {
        auditoriums: queryResults,
    };
    return res.status(200).send(response);
}));
AuditoriumRouter.get('/:id/seats', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const auditoriumId = parseInt(req.params.id);
    const queryResults = yield seatController.getByAuditoriumId(auditoriumId);
    const availableSeats = [];
    const allSeats = [];
    queryResults.forEach(result => {
        if (result['isAvailable']) {
            availableSeats.push(result['number']);
        }
        allSeats.push(result['number']);
    });
    const response = {
        allSeats: allSeats,
        availableSeats: availableSeats
    };
    return res.status(200).send(response);
}));
AuditoriumRouter.post('/:id/checkout', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const auditoriumId = parseInt(req.params.id);
    const seats = req.body.seats;
    const code = (Math.random() + 1).toString(36).substring(7); // Generate random string for reservation ID
    const status = 1; // available state
    //Available Seats validation
    const queryResults = yield seatController.getUnavailableSeats(auditoriumId, seats);
    if (queryResults.length > 0) {
        const unavailableSeats = [];
        queryResults.forEach(result => {
            unavailableSeats.push(result['number']);
        });
        const response = {
            status: "failed",
            unavailableSeats: unavailableSeats,
        };
        return res.status(404).send(response);
    }
    const payload = {
        code: code,
        seats: seats,
        status: status,
        auditorium_id: auditoriumId
    };
    const result = yield reservationController.create(payload);
    const seatUpdateResult = yield seatController.updateAvailabilityByNumber(false, seats);
    const response = {
        status: "ok",
        checkoutId: code,
    };
    return res.status(200).send(response);
}));
AuditoriumRouter.post('/:id/releaseCheckout', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const auditoriumId = req.params.id;
    const code = req.body.checkoutId;
    const result = yield reservationController.releaseCheckout(code);
    let statusCode = 404;
    let statusMessage = 'not found';
    if (result > 0) {
        statusCode = 200;
        statusMessage = 'ok';
        const reservation = yield reservationController.getByCode(code);
        const seatUpdateResult = yield seatController.updateAvailabilityByNumber(true, reservation['seats']);
    }
    const response = {
        status: statusMessage,
    };
    return res.status(statusCode).send(response);
}));
exports.default = AuditoriumRouter;
