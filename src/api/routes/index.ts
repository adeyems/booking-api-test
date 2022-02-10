import { Router } from 'express'
import businessRouter from "./business";
import clientRouter from "./client";

const router = Router()

console.log('We are here');

router.get('/', (req, res) => res.send('we are here'))

router.use('/client', clientRouter)
router.use('/business', businessRouter)

export default router;
