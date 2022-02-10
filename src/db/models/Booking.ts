import { DataTypes, Model, Optional} from "sequelize";
import sequelizeConnection from "../config";
import Agent from "./Agent";
import User from "./User";

interface BookingAttributes {
    id: number;
    user: string;
    agent: string;
    start_at: Date;
    finish_at: Date;
    createdAt?: Date;
    updatedAt?: Date;
    deletedAt?: Date;
}
export interface BookingInput extends Optional<BookingAttributes, 'id'> {}

export interface BookingOutput extends Required<BookingAttributes> {}

class Booking extends Model<BookingAttributes, BookingInput> implements BookingAttributes {
    public id!: number
    public user!: string
    public agent!: string
    public start_at!: Date
    public finish_at!: Date

    public readonly createdAt!: Date;
    public readonly updatedAt!: Date;
    public readonly deletedAt!: Date;
}

Booking.init({
    id: {
        type: DataTypes.INTEGER.UNSIGNED,
        autoIncrement: true,
        primaryKey: true,
    },
    user: {
        type: DataTypes.INTEGER.UNSIGNED,
        references: {
            model: User,
            key: 'id'
        }
    },
    agent: {
        type: DataTypes.INTEGER,
        references: {
            model: Agent,
            key: 'id'
        }
    },
    start_at: {
        type: DataTypes.BOOLEAN,
        allowNull: false
    },
    finish_at: {
        type: DataTypes.BOOLEAN,
        allowNull: false
    },
}, {
    sequelize: sequelizeConnection,
})

//Booking.belongsTo(Agent);
//Booking.belongsTo(User);

export default Booking
