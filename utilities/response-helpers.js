const errorCodes = require('./errors');
import {SERVER_ERROR,OK} from './constants';


export function sendError(res, err, error_index, status_code) {
    console.trace(err);
    if (typeof error_index == undefined) {
        status_code = SERVER_ERROR;
    }
    //console.log(errorCodes)
    res.status(status_code).json({
        code: errorCodes[error_index] ? errorCodes[error_index][0] : 404,
        message: errorCodes[error_index] ? errorCodes[error_index][1] : err,
        success: false,
    });
    return;
}
export function sendSuccess(res, data) {
   
    res.status(OK).json({
        success: true,
        data: data,
    });
}
