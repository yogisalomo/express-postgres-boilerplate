import * as service from '../../services/auditorium_service';
import { Auditorium } from '../../interfaces'
import * as mapper from './mapper'

export const index = async(): Promise<Auditorium[]> => {
    return (await service.index()).map(mapper.dbToModel)
}