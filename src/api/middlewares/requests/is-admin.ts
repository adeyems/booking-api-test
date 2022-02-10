import {NextFunction, Request, Response} from "express";
import {errorResponse, responseCode} from "../../../utils";
import UserRepository from "../../../db/repositories/UseRepository";
import AgentRepository from "../../../db/repositories/AgentRepository";

export const isAdmin = async (req: Request, res: Response, next: NextFunction) => {
    const agentId = req.header('X-Agent-Id');
    if (!agentId) return errorResponse(res, responseCode.FORBIDDEN, 'Agent Id is required')

    const agent = AgentRepository.findById(agentId)
    if (agent.role !== 'admin')
        return errorResponse(res, responseCode.FORBIDDEN, 'Permission Denied')

}
