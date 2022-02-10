import {Request, Response} from "express";
import BookingRepository from "../../../db/repositories/BookingRepository";
import {CreateBookingDTO} from "../../data-transfer-objects/booking.dto";
import * as mapper from './mapper'
import {errorResponse, responseCode, successResponse} from "../../../utils";

class BookingController {
    constructor(private bookingRepository: BookingRepository) {}

    createBooking =  async (req: Request, res: Response) => {
        try {
            const payload: CreateBookingDTO = req.body;

            const booking = mapper.toBooking(await this.bookingRepository.create(payload));

            return successResponse(res, responseCode.CREATED, 'User Created', booking);
        }
        catch (error) {
            return errorResponse(res, responseCode.INTERNAL_SERVER_ERROR, error)
        }
    }

    deleteBooking = async (req: Request, res: Response) => {
        try {


        }
        catch (error) {
            return errorResponse(res, responseCode.INTERNAL_SERVER_ERROR, error)
        }
    }
}

export default BookingController
