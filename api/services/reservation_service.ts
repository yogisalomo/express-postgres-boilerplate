import * as ReservationDal from '../../db/dal/reservation'
import { ReservationInput, ReservationOutput } from '../../db/models/reservation'
import Reservation from '../../db/models/reservation';

export const getByCode = (code: string): Promise<ReservationOutput | null> => {
    return ReservationDal.getByCode(code)
}

export const create = (payload: ReservationInput): Promise<ReservationOutput> => {
    return ReservationDal.create(payload);
}

export const releaseCheckout = (code: string): Promise<[affectedCount: number]> => {
    return ReservationDal.releaseCheckout(code);
}