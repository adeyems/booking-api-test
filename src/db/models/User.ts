import { DataTypes, Model, Optional} from "sequelize";
import sequelizeConnection from "../config";
import Booking from "./Booking";

interface UserAttributes {
    id: number;
    name: string;
    email: string;
    has_many_bookings?: boolean,
    createdAt?: Date;
    updatedAt?: Date;
    deletedAt?: Date;
}
export interface UserInput extends Optional<UserAttributes, 'id'> {}

export interface UserOutput extends Required<UserAttributes> {}

class User extends Model<UserAttributes, UserInput> implements UserAttributes {
    public id!: number
    public name!: string
    public email!: string

    public has_many_bookings!: boolean
    public readonly createdAt!: Date;
    public readonly updatedAt!: Date;
    public readonly deletedAt!: Date;
}

User.init({
    id: {
        type: DataTypes.INTEGER.UNSIGNED,
        autoIncrement: true,
        primaryKey: true,
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    has_many_bookings: {
        type: DataTypes.BOOLEAN,
    },
}, {
    sequelize: sequelizeConnection,
    paranoid: true
})

//User.hasMany(Booking);

export default User
