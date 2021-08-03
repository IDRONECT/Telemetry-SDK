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
    ListResponseDataEntry,
    ListResponseDataEntryFromJSON,
    ListResponseDataEntryFromJSONTyped,
    ListResponseDataEntryToJSON,
} from './';

/**
 * 
 * @export
 * @interface ListResponseData
 */
export interface ListResponseData {
    /**
     * 
     * @type {Array<ListResponseDataEntry>}
     * @memberof ListResponseData
     */
    telemetries?: Array<ListResponseDataEntry>;
}

export function ListResponseDataFromJSON(json: any): ListResponseData {
    return ListResponseDataFromJSONTyped(json, false);
}

export function ListResponseDataFromJSONTyped(json: any, ignoreDiscriminator: boolean): ListResponseData {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'telemetries': !exists(json, 'telemetries') ? undefined : ((json['telemetries'] as Array<any>).map(ListResponseDataEntryFromJSON)),
    };
}

export function ListResponseDataToJSON(value?: ListResponseData | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'telemetries': value.telemetries === undefined ? undefined : ((value.telemetries as Array<any>).map(ListResponseDataEntryToJSON)),
    };
}


