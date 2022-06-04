import * as AuditoriumDal from '../../db/dal/auditorium'
import { AuditoriumInput, AuditoriumOutput } from '../../db/models/auditorium'

export const index = (): Promise<AuditoriumOutput[]> => {
    return AuditoriumDal.getAll()
}