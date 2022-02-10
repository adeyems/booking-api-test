import {Request, Response} from "express";
import BookingRepository from "../../db/repositories/BookingRepository";
import {errorResponse, responseCode} from "../../utils";

class SchedulerController {
    constructor(private bookingRepository: BookingRepository) {}

    getBooking = async (req: Request, res: Response) => {
        try {


        }
        catch (error) {
            return errorResponse(res, responseCode.INTERNAL_SERVER_ERROR, error)
        }
    }
}

export default SchedulerController
