import {UserInterface} from "../../interfaces";
import  {UserOutput} from "../../../db/models/User";

export const toUser = (user: UserOutput): UserInterface => {
    return {
        id: user.id,
        name: user.name,
        email: user.email,
        has_many_bookings: user.has_many_bookings,
        createdAt: user.createdAt,
        updatedAt: user.updatedAt,
        deletedAt: user.deletedAt,
    }
}
