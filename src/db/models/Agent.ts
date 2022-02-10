import { DataTypes, Model, Optional} from "sequelize";
import sequelizeConnection from "../config";
import Booking from "./Booking";

interface AgentAttributes {
    id: number;
    name: string;
    email: string;
    has_many_bookings?: boolean,
    has_many_users?: boolean,
    createdAt?: Date;
    updatedAt?: Date;
    deletedAt?: Date;
}
export interface AgentInput extends Optional<AgentAttributes, 'id'> {}

export interface AgentOutput extends Required<AgentAttributes> {}

class Agent extends Model<AgentAttributes, AgentInput> implements AgentAttributes {
    public id!: number
    public name!: string
    public email!: string

    public has_many_bookings!: boolean
    public has_many_users!: boolean
    public readonly createdAt!: Date;
    public readonly updatedAt!: Date;
    public readonly deletedAt!: Date;
}

Agent.init({
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
    has_many_users: {
        type: DataTypes.BOOLEAN,
    },
}, {
    sequelize: sequelizeConnection,
    paranoid: true
})

// Agent.hasMany(Booking);

export default Agent
