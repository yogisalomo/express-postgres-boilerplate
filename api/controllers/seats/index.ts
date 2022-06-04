import * as service from '../../services/seat_service';
import { Seat } from '../../interfaces'
import * as mapper from './mapper'

export const getByAuditoriumId = async(auditoriumId: number): Promise<Seat[]> => {
    return (await service.getByAuditoriumId(auditoriumId)).map(mapper.dbToModel)
}

export const getUnavailableSeats = async(auditoriumId: number, numbers: string[]): Promise<Seat[]> => {
    return (await service.getUnavailableSeats(auditoriumId, numbers)).map(mapper.dbToModel);
}

export const updateAvailabilityByNumber = async(updatedAvailability: boolean, numbers: string[]): Promise<number> => {
    const result : [affectedCount: number] = await service.updateAvailabilityByNumber(updatedAvailability, numbers);
    return result[0];
}