import {BookingInterface} from "../../interfaces";
import Booking, {BookingOutput} from "../../../db/models/Booking";

export const toBooking = (booking: BookingOutput): BookingInterface => {
    return {
        id: booking.id,
        user: booking.user,
        agent: booking.agent,
        start_at: booking.start_at,
        finish_at: booking.finish_at,
        createdAt: booking.createdAt,
        updatedAt: booking.updatedAt,
        deletedAt: booking.deletedAt,
    }
}
