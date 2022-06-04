import { Auditorium } from '../../interfaces';
import { AuditoriumOutput } from '../../../db/models/auditorium';

export const dbToModel = (auditorium: AuditoriumOutput): Auditorium => {
    return {
        id: auditorium.id,
        name: auditorium.name
    }
}