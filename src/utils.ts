import { createLogger, format, transports } from 'winston';

export const logger = createLogger({
    transports:
        new transports.File({
            filename: 'logs/server.log',
            format:format.combine(
                format.timestamp({format: 'MMM-DD-YYYY HH:mm:ss'}),
                format.align(),
                format.printf(info => `${info.level}: ${[info.timestamp]}: ${info.message}`),
            )}),
});

import { Response } from "express";

export const responseCode = {
    SUCCESS: 200,
    CREATED: 201,
    ACCEPTED: 202,
    NO_CONTENT: 204,
    ACCOUNT_NOT_VERIFIED: 209,
    BAD_REQUEST: 400,
    UNAUTHORIZED: 401,
    FORBIDDEN: 403,
    NOT_FOUND: 404,
    METHOD_NOT_ALLOW: 405,
    UNSUPPORTED_MEDIA_TYPE: 415,
    UNPROCESSABLE_ENTITY: 422,
    INVALID_PIN: 423,
    INCOMPLETE_PROFILE: 444,
    INSUFFICIENT_BALANCE: 445,
    MINIMUM_TRANSFER_AMOUNT: 446,
    MINIMUM_FUNDING_AMOUNT: 447,
    MAXIMUM_TRANSFER_AMOUNT: 448,
    MAXIMUM_FUNDING_AMOUNT: 449,
    INTERNAL_SERVER_ERROR:500,
    NOT_IMPLEMENTED: 501
};

export const successResponse = (res: Response, statusCode: number = responseCode.SUCCESS, message: string = 'success', data: any = null) =>
{
    data ? res.status(statusCode).json({status: 'success', message, data}) : res.status(statusCode).json({status: 'success', message})
};

export const errorResponse = (res: Response, statusCode: number = responseCode.INTERNAL_SERVER_ERROR, message: any = 'an error occurred') =>
{
    res.status(statusCode).json({
        status: 'error',
        message,
    });
};
