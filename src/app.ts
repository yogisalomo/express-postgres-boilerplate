import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';
import { Sequelize } from 'sequelize';
import router from '../api/routes';

dotenv.config();

const app: Express = express();
const port: string | undefined = process.env.PORT;

app.use(express.json());

// app.get('/', (req: Request, res: Response) => {
//     const sequelize : Sequelize = new Sequelize('amazevr', 'yogisalomo', '12341234', {
//         host: 'localhost',
//         dialect: 'postgres'
//     });

//     try {
//         sequelize.authenticate();
//         console.log('Connection has been established successfully.');
//     } catch (error) {
//         console.error('Unable to connect to the database:', error);
//     }
    
//     res.send('AmazeVR Ticketing by Yogi');
// });

app.use('/',router);

app.listen(port, () => {
    console.log(`Server is running at localhost:${port}`);
});