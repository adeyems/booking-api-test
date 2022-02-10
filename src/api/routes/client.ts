import {Router} from "express";
import UsersController from "../controllers/user/UsersController";
import UserRepository from "../../db/repositories/UseRepository";

const usersRouter = Router();

const userController = new UsersController(new UserRepository)

usersRouter.post('/', userController.createUser);

export default usersRouter;
