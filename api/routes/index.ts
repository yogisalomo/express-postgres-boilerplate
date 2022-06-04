import { Router } from "express";
import AuditoriumRouter from "./auditorium";

const router : Router = Router()

router.use('/auditoriums', AuditoriumRouter);

export default router