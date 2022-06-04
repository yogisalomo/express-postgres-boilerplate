import { Reservation } from '../../interfaces';
import { ReservationOutput } from '../../../db/models/reservation';

export const dbToModel = (reservation: ReservationOutput): Reservation => {
    return {
        id: reservation.id,
        code: reservation.code,
        status: reservation.status,
        seats: reservation.seats
    }
}