import { Op } from "sequelize";
import  Seat from '../models/seat';
import { SeatInput, SeatOutput } from "../models/seat";

export const getByAuditoriumId = async (auditoriumId : number) : Promise<SeatOutput[]> => {
    return Seat.findAll({
        where: {
            auditorium_id: auditoriumId
        }
    })
}

export const getUnavailableSeats = async (auditoriumId : number, numbers: string[]) : Promise<SeatOutput[]> => {
    return Seat.findAll({
        where: {
            auditorium_id: auditoriumId,
            number: numbers,
            is_available: false
        }
    })
}

export const updateAvailabilityByNumber = async (updatedAvailability: boolean, numbers: string[]) : Promise<[affectedCount:number]> => {
    return Seat.update(
        { is_available: updatedAvailability },
        {
            where: {
                number: numbers
            }
        }
    )
}