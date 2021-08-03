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
/**
 * 
 * @export
 * @interface ListResponseDataEntry
 */
export interface ListResponseDataEntry {
    /**
     * Database telemetry id
     * @type {string}
     * @memberof ListResponseDataEntry
     */
    telemetryId?: string;
    /**
     * Given title for telemetry (Title used in UI)
     * @type {string}
     * @memberof ListResponseDataEntry
     */
    title?: string;
    /**
     * id of a specific drone
     * @type {string}
     * @memberof ListResponseDataEntry
     */
    aircraftId?: string;
    /**
     * id of a specific tracker device
     * @type {string}
     * @memberof ListResponseDataEntry
     */
    trackerId?: string;
}

export function ListResponseDataEntryFromJSON(json: any): ListResponseDataEntry {
    return ListResponseDataEntryFromJSONTyped(json, false);
}

export function ListResponseDataEntryFromJSONTyped(json: any, ignoreDiscriminator: boolean): ListResponseDataEntry {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'telemetryId': !exists(json, 'telemetryId') ? undefined : json['telemetryId'],
        'title': !exists(json, 'title') ? undefined : json['title'],
        'aircraftId': !exists(json, 'aircraftId') ? undefined : json['aircraftId'],
        'trackerId': !exists(json, 'trackerId') ? undefined : json['trackerId'],
    };
}

export function ListResponseDataEntryToJSON(value?: ListResponseDataEntry | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'telemetryId': value.telemetryId,
        'title': value.title,
        'aircraftId': value.aircraftId,
        'trackerId': value.trackerId,
    };
}


