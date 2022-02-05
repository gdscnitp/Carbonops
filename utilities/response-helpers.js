const errorCodes = require('./errors');
import {SERVER_ERROR,OK} from './constants';

export function sendError(res, err, status_code=500) {
    console.trace(err);
    // if (typeof error_index == undefined) {
    //     status_code = SERVER_ERROR;
    // }
    res.status(status_code).json({
        code: status_code,
        message: status_code===500? "SERVER ERROR" : err,
        success: false,
        time: Date.now()
    });
    return;
}
export function sendSuccess(res, data) {
   
    res.status(OK).json({
        success: true,
        data: data,
    });
}
