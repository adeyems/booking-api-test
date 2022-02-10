import {AgentInterface} from "../../interfaces";
import {AgentOutput} from "../../../db/models/Agent";

export const toAgent = (agent: AgentOutput): AgentInterface => {
    return {
        id: agent.id,
        name: agent.name,
        email: agent.email,
        has_many_bookings: agent.has_many_bookings,
        has_many_users: agent.has_many_users,
        createdAt: agent.createdAt,
        updatedAt: agent.updatedAt,
        deletedAt: agent.deletedAt,
    }
}
