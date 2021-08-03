/* tslint:disable */
/* eslint-disable */
/**
 * Telemetry API
 * The telemetry API allows you to send realtime telemetry of your aircrafts into your IDRONECT account. It will help you to log your flights and allow you to automate your maintenance folow-up.
 *
 * The version of the OpenAPI document: TEL-1.3.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import {
    StartResponseData,
    StartResponseDataFromJSON,
    StartResponseDataFromJSONTyped,
    StartResponseDataToJSON,
} from './';

/**
 * 
 * @export
 * @interface StartReponse
 */
export interface StartReponse {
    /**
     * status
     * @type {string}
     * @memberof StartReponse
     */
    status: string;
    /**
     * message
     * @type {string}
     * @memberof StartReponse
     */
    message: string;
    /**
     * 
     * @type {StartResponseData}
     * @memberof StartReponse
     */
    data?: StartResponseData;
}

export function StartReponseFromJSON(json: any): StartReponse {
    return StartReponseFromJSONTyped(json, false);
}

export function StartReponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): StartReponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'status': json['status'],
        'message': json['message'],
        'data': !exists(json, 'data') ? undefined : StartResponseDataFromJSON(json['data']),
    };
}

export function StartReponseToJSON(value?: StartReponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'status': value.status,
        'message': value.message,
        'data': StartResponseDataToJSON(value.data),
    };
}


