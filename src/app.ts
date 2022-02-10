import express, { Application, Request, Response } from 'express'
import router from "./api/routes";

const app: Application = express()

// Body parsing Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', async(req: Request, res: Response): Promise<Response> => {
    return res.status(200).send({ message: 'Welcome to the Booking API'})
})

app.use('/api/v1', router);

export default app

