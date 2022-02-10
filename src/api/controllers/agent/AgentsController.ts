import {Request, Response} from "express";
import AgentRepository from "../../../db/repositories/AgentRepository";
import {CreateAgentDTO} from "../../data-transfer-objects/agent.dto";
import * as mapper from './mapper'
import {errorResponse, responseCode, successResponse} from "../../../utils";

class AgentsController {
    constructor(private agentRepository: AgentRepository) {}

    createAgent =  async (req: Request, res: Response) => {
        try {
            const payload: CreateAgentDTO = req.body;

            const agent = mapper.toAgent(await this.agentRepository.create(payload));

            return successResponse(res, responseCode.CREATED, 'User Created', agent);
        }
        catch (error) {
            return errorResponse(res, responseCode.INTERNAL_SERVER_ERROR, error)
        }
    }

    getAgents =  async (req: Request, res: Response) => {
        try {
            return successResponse(res, responseCode.CREATED, 'Agents', await this.agentRepository.getAll());
        }
        catch (error) {
            return errorResponse(res, responseCode.INTERNAL_SERVER_ERROR, error)
        }
    }
}

export default AgentsController
