import Booking, {BookingInput, BookingOutput} from "../models/Booking";

class BookingRepository {
    create = async (payload: BookingInput): Promise<BookingOutput> => await Booking.create(payload)
}
export default BookingRepository
