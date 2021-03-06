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
    StopReponseData,
    StopReponseDataFromJSON,
    StopReponseDataFromJSONTyped,
    StopReponseDataToJSON,
} from './';

/**
 * 
 * @export
 * @interface StopReponse
 */
export interface StopReponse {
    /**
     * status
     * @type {string}
     * @memberof StopReponse
     */
    status: string;
    /**
     * message
     * @type {string}
     * @memberof StopReponse
     */
    message: string;
    /**
     * 
     * @type {StopReponseData}
     * @memberof StopReponse
     */
    data?: StopReponseData;
}

export function StopReponseFromJSON(json: any): StopReponse {
    return StopReponseFromJSONTyped(json, false);
}

export function StopReponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): StopReponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'status': json['status'],
        'message': json['message'],
        'data': !exists(json, 'data') ? undefined : StopReponseDataFromJSON(json['data']),
    };
}

export function StopReponseToJSON(value?: StopReponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'status': value.status,
        'message': value.message,
        'data': StopReponseDataToJSON(value.data),
    };
}


