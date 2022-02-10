import Agent, {AgentInput, AgentOutput} from "../models/Agent";
import User from "../models/User";

class AgentRepository {
    create = async (payload: AgentInput): Promise<AgentOutput> => await Agent.create(payload)

    getAll = async(): Promise<User[]> => {
        return (await Agent.findAll());
    }

    static findById =  async(id: number): Promise<Agent | null> => {
        return (await Agent.findByPk(id))
    }
}
export default AgentRepository
