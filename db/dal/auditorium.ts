import { Op } from "sequelize";
import  Auditorium from '../models/auditorium';
import { AuditoriumInput, AuditoriumOutput } from "../models/auditorium";

export const getAll = async () => {
    return Auditorium.findAll()
}