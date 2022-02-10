import {Router} from "express";
import AgentsController from "../controllers/agent/AgentsController";
import AgentRepository from "../../db/repositories/AgentRepository";

const agentRouter = Router();

const agentsController = new AgentsController(new AgentRepository)

agentRouter.get('/', agentsController.getAgents);

export default agentRouter;
