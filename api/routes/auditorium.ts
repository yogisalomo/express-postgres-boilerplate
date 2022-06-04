import { Router, Request, Response } from "express";
import * as auditoriumController from '../controllers/auditoriums';
import * as seatController from '../controllers/seats';
import * as reservationController from '../controllers/reservations';
import { ReservationInput } from "../../db/models/reservation";

const AuditoriumRouter = Router()

AuditoriumRouter.get('/', async (req: Request, res: Response) => {
    const queryResults = await auditoriumController.index();
    const response : Object = {
        auditoriums: queryResults,
    }
    return res.status(200).send(response)
})

AuditoriumRouter.get('/:id/seats', async (req: Request, res: Response) => {
    const auditoriumId : number = parseInt(req.params.id);
    const queryResults = await seatController.getByAuditoriumId(auditoriumId);
    const availableSeats: Array<string> = [];
    const allSeats: Array<string> = [];

    queryResults.forEach(result => {
        if(result['isAvailable']) {
            availableSeats.push(result['number']);
        }

        allSeats.push(result['number']);
    })

    const response : Object = {
        allSeats: allSeats,
        availableSeats: availableSeats
    }
    return res.status(200).send(response)
});

AuditoriumRouter.post('/:id/checkout', async (req: Request, res: Response) => {
    const auditoriumId : number = parseInt(req.params.id);
    const seats : JSON = req.body.seats;
    const code : string = (Math.random() + 1).toString(36).substring(7) // Generate random string for reservation ID
    const status: number = 1 // available state

    //Available Seats validation
    const queryResults = await seatController.getUnavailableSeats(auditoriumId, seats);

    if(queryResults.length> 0) {
        const unavailableSeats: Array<string> = [];

        queryResults.forEach(result => {
            unavailableSeats.push(result['number']);
        })

        const response : Object = {
            status: "failed",
            unavailableSeats: unavailableSeats,
        }
        return res.status(404).send(response)
    }


    const payload : ReservationInput = {
        code: code,
        seats: seats,
        status: status,
        auditorium_id: auditoriumId
    }
    
    const result = await reservationController.create(payload)

    const seatUpdateResult = await seatController.updateAvailabilityByNumber(false, seats);
    
    const response : Object = {
        status: "ok",
        checkoutId: code,
    }
    return res.status(200).send(response)
});

AuditoriumRouter.post('/:id/releaseCheckout', async (req: Request, res: Response) => {
    const auditoriumId = req.params.id;
    const code : string = req.body.checkoutId;

    const result = await reservationController.releaseCheckout(code);

    let statusCode :number = 404;
    let statusMessage : string = 'not found';

    if(result>0) {
        statusCode= 200;
        statusMessage = 'ok';

        const reservation = await reservationController.getByCode(code);

        const seatUpdateResult = await seatController.updateAvailabilityByNumber(true, reservation['seats']);
    }
    const response : Object = {
        status: statusMessage,
    }
    return res.status(statusCode).send(response)
});

export default AuditoriumRouter