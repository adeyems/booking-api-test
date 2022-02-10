import {Router} from "express";
import {successResponse} from "../../utils";

const businessRouter = Router();

businessRouter.get('/scheduler', (req, res) => successResponse(res))


export default businessRouter;
