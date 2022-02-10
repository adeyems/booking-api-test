import {Router} from "express";
import UsersController from "../controllers/user/UsersController";
import UserRepository from "../../db/repositories/UseRepository";

const userRouter = Router();

const usersController = new UsersController(new UserRepository)

userRouter.get('/', usersController.getUsers);

export default userRouter;
