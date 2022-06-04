import * as SeatDal from '../../db/dal/seat'
import { SeatInput, SeatOutput } from '../../db/models/seat'

export const getByAuditoriumId = (auditoriumId: number): Promise<SeatOutput[]> => {
    return SeatDal.getByAuditoriumId(auditoriumId)
}

export const getUnavailableSeats = (auditoriumId : number, numbers: string[]): Promise<SeatOutput[]> => {
    return SeatDal.getUnavailableSeats(auditoriumId, numbers);
}

export const updateAvailabilityByNumber = (updatedAvailability: boolean, numbers: string[]) : Promise<[affectedCounts: number]> => {
    return SeatDal.updateAvailabilityByNumber(updatedAvailability, numbers)
}