import {Request, Response} from "express";
import UserRepository from "../../../db/repositories/UseRepository";
import {CreateUserDTO} from "../../data-transfer-objects/user.dto";
import * as mapper from './mapper'
import {errorResponse, responseCode, successResponse} from "../../../utils";

class UsersController {
    constructor(private userRepository: UserRepository) {}

    createUser =  async (req: Request, res: Response) => {
        try {
            const payload: CreateUserDTO = req.body;

            const user = mapper.toUser(await this.userRepository.create(payload));

            return successResponse(res, responseCode.CREATED, 'User Created', user);
        }
        catch (error) {
            return errorResponse(res, responseCode.INTERNAL_SERVER_ERROR, error)
        }
    }

    getUsers =  async (req: Request, res: Response) => {
        try {
            return successResponse(res, responseCode.CREATED, 'Users', await this.userRepository.getAll());
        }
        catch (error) {
            return errorResponse(res, responseCode.INTERNAL_SERVER_ERROR, error)
        }
    }
}

export default UsersController
