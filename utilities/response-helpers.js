const errorCodes = require('./errors');
import {SERVER_ERROR,OK} from './constants';
var  arrayOfErrors ;
let err;
export function sendError(res, err, error_index, status_code) {
    console.trace(err);
    if (typeof error_index == undefined) {
        status_code = SERVER_ERROR;
    }
    
        if (typeof status_code === 'number' && errorCodes.hasOwnProperty(status_code)) {
          const arrayOfErrors=errorCodes[status_code];
            if (typeof error_index === 'number' && arrayOfErrors.length > error_index) {
                //go to corresponding error index
                err = arrayOfErrors[error_index];
            }

        };

         res.status(status_code).json({
        code: status_code,
        message: err,
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
