import * as express from 'express';
import {Request, Response} from "express";
import { json } from "body-parser";
const app = express();

app.use(json());

app.use((err: Error, req: Request, res: Response) => res.status(500).json({message: err.message}))

export default app

