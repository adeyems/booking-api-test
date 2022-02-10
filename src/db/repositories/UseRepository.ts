import User, {UserInput, UserOutput} from "../models/User";

class UserRepository {
    create = async (payload: UserInput): Promise<UserOutput> => await User.create(payload)

    getAll = async(): Promise<User[]> => {
        return (await User.findAll());
    }
}
export default UserRepository
