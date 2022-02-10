import {Router} from "express";
import BusinessesController from "../controllers/business/businessesController";

const businessRouter = Router();

const businessController = new BusinessesController()

businessRouter.get('/scheduler', businessController.scheduler);

export default businessRouter;
