/* tslint:disable */
/* eslint-disable */
/**
 * Telemetry API
 * The telemetry API allows you to send realtime telemetry of your aircrafts into your IDRONECT account. It will help you to log your flights and allow you to automate your maintenance folow-up.
 *
 * The version of the OpenAPI document: TEL-1.2.5
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
/**
 * 
 * @export
 * @interface GenericError
 */
export interface GenericError {
    /**
     * Standard HTTP status codes
     * @type {string}
     * @memberof GenericError
     */
    status: string;
    /**
     * More information about the error
     * @type {string}
     * @memberof GenericError
     */
    message: string;
    /**
     * 
     * @type {object}
     * @memberof GenericError
     */
    data?: object;
}

export function GenericErrorFromJSON(json: any): GenericError {
    return GenericErrorFromJSONTyped(json, false);
}

export function GenericErrorFromJSONTyped(json: any, ignoreDiscriminator: boolean): GenericError {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'status': json['status'],
        'message': json['message'],
        'data': !exists(json, 'data') ? undefined : json['data'],
    };
}

export function GenericErrorToJSON(value?: GenericError | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'status': value.status,
        'message': value.message,
        'data': value.data,
    };
}


