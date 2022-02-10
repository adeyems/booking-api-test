import {Request, Response} from "express";
import {errorResponse, responseCode, successResponse} from "../../../utils";

class BusinessesController {
    constructor() {}

    scheduler =  async (req: Request, res: Response) => {
        try {
            return successResponse(res, responseCode.SUCCESS, '');
        }
        catch (error) {
            return errorResponse(res, responseCode.INTERNAL_SERVER_ERROR, error)
        }
    }
}

export default BusinessesController
