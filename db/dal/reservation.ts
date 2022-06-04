import { Op } from "sequelize";
import  Reservation from '../models/reservation';
import { ReservationInput, ReservationOutput } from "../models/reservation";

export const getByCode = async (code : string) : Promise<ReservationOutput | null> => {
    return Reservation.findOne({
        where: {
            code: code
        }
    })
}

export const create = async (payload: ReservationInput): Promise<ReservationOutput> => {
    const newReservaton = await Reservation.create(payload);

    return newReservaton
}

export const releaseCheckout = async (code : string) : Promise<[affectedCount: number]> => {
    return Reservation.update(
        { status: 0 },
        {
            where: {
                code: code
            }
        }
    )
}