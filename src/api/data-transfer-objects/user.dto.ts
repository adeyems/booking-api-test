import { Optional } from "sequelize/types"

export type CreateUserDTO = {
    name: string;
    email: string;
}

export type UpdateUserDTO = Optional<CreateUserDTO, 'name'>
