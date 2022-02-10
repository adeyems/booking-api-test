import {UserInterface} from "../../interfaces";
import User, {UserOutput} from "../../../db/models/User";

export const toUser = (user: UserOutput): UserInterface => {
    return {
        id: user.id,
        name: user.name,
        email: user.email,
        createdAt: user.createdAt,
        updatedAt: user.updatedAt,
        deletedAt: user.deletedAt,
    }
}
