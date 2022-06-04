import * as service from '../../services/reservation_service';
import { Reservation, Seat } from '../../interfaces'
import * as mapper from './mapper'
import { ReservationInput, ReservationOutput } from '../../../db/models/reservation';

export const getByCode = async(code: string): Promise<Reservation | null> => {
    const result : ReservationOutput | null = await service.getByCode(code);

    if(result){
        return mapper.dbToModel(result);
    }
    else {
        return null;
    }
}

export const create = async(payload: ReservationInput): Promise<Reservation | null> => {
    const result = await service.create(payload);
    if(result){
        return mapper.dbToModel(result);
    }
    else {
        return null;
    }
}

export const releaseCheckout = async(code: string): Promise<number> => {
    const result : [affectedCount: number] = await service.releaseCheckout(code);
    console.log(result);
    return result[0];
}