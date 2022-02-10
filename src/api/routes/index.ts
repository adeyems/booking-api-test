import { Router } from 'express'
import businessRouter from "./business";
import clientRouter from "./client";
import userRouter from "./user";
import agentRouter from "./agent";

const router = Router()

router.get('/', (req, res) => res.send('we are here'))

router.use('/client', clientRouter)
router.use('/business', businessRouter)
router.use('/users', userRouter)
router.use('/agents', agentRouter)

export default router;
