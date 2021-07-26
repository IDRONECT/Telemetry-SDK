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
    Point,
    PointFromJSON,
    PointFromJSONTyped,
    PointToJSON,
} from './';

/**
 * 
 * @export
 * @interface TelemetryResponseData
 */
export interface TelemetryResponseData {
    /**
     * Database telemetry id
     * @type {string}
     * @memberof TelemetryResponseData
     */
    telemetryId?: string;
    /**
     * Given title for telemetry (Title used in UI)
     * @type {string}
     * @memberof TelemetryResponseData
     */
    title?: string;
    /**
     * Owner of the telemetry entry
     * @type {string}
     * @memberof TelemetryResponseData
     */
    operatorId?: string;
    /**
     * Aircraft id
     * @type {string}
     * @memberof TelemetryResponseData
     */
    aircraftId?: string;
    /**
     * Tracker device id
     * @type {string}
     * @memberof TelemetryResponseData
     */
    trackerId?: string;
    /**
     * 
     * @type {Array<Point>}
     * @memberof TelemetryResponseData
     */
    points?: Array<Point>;
}

export function TelemetryResponseDataFromJSON(json: any): TelemetryResponseData {
    return TelemetryResponseDataFromJSONTyped(json, false);
}

export function TelemetryResponseDataFromJSONTyped(json: any, ignoreDiscriminator: boolean): TelemetryResponseData {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'telemetryId': !exists(json, 'telemetryId') ? undefined : json['telemetryId'],
        'title': !exists(json, 'title') ? undefined : json['title'],
        'operatorId': !exists(json, 'operatorId') ? undefined : json['operatorId'],
        'aircraftId': !exists(json, 'aircraftId') ? undefined : json['aircraftId'],
        'trackerId': !exists(json, 'trackerId') ? undefined : json['trackerId'],
        'points': !exists(json, 'points') ? undefined : ((json['points'] as Array<any>).map(PointFromJSON)),
    };
}

export function TelemetryResponseDataToJSON(value?: TelemetryResponseData | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'telemetryId': value.telemetryId,
        'title': value.title,
        'operatorId': value.operatorId,
        'aircraftId': value.aircraftId,
        'trackerId': value.trackerId,
        'points': value.points === undefined ? undefined : ((value.points as Array<any>).map(PointToJSON)),
    };
}


