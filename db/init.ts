import { Auditorium, Seat } from './models';

const DbInit = () => {
    Auditorium.sync({alter: true});
    Seat.sync({alter: true});
}

export default DbInit