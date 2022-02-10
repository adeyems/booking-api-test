import {Router} from "express";
import BookingController from "../controllers/booking/BookingController";
import BookingRepository from "../../db/repositories/BookingRepository";
import {isAdmin} from "../middlewares/requests/is-admin";
import SchedulerController from "../controllers/SchedulerController";

const clientRouter = Router();

const bookingController = new BookingController(new BookingRepository)
const schedulerController = new SchedulerController(new BookingRepository)

clientRouter.get('/scheduler', schedulerController.getBooking);
clientRouter.post('/booking', isAdmin, bookingController.createBooking);
clientRouter.delete('/booking/:id', isAdmin, bookingController.deleteBooking);

export default clientRouter;
