import User, {UserInput, UserOutput} from "../models/User";

class UserRepository {
    create = async (payload: UserInput): Promise<UserOutput> => await User.create(payload)
}
export default UserRepository
