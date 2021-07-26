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
import {
    ListResponseData,
    ListResponseDataFromJSON,
    ListResponseDataFromJSONTyped,
    ListResponseDataToJSON,
} from './';

/**
 * 
 * @export
 * @interface ListResponse
 */
export interface ListResponse {
    /**
     * status
     * @type {string}
     * @memberof ListResponse
     */
    status: string;
    /**
     * message
     * @type {string}
     * @memberof ListResponse
     */
    message: string;
    /**
     * 
     * @type {ListResponseData}
     * @memberof ListResponse
     */
    data?: ListResponseData;
}

export function ListResponseFromJSON(json: any): ListResponse {
    return ListResponseFromJSONTyped(json, false);
}

export function ListResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): ListResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'status': json['status'],
        'message': json['message'],
        'data': !exists(json, 'data') ? undefined : ListResponseDataFromJSON(json['data']),
    };
}

export function ListResponseToJSON(value?: ListResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'status': value.status,
        'message': value.message,
        'data': ListResponseDataToJSON(value.data),
    };
}


