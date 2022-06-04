import { Seat } from '../../interfaces';
import { SeatOutput } from '../../../db/models/seat';

export const dbToModel = (seat: SeatOutput): Seat => {
    return {
        id: seat.id,
        number: seat.number,
        isAvailable: seat.is_available
    }
}