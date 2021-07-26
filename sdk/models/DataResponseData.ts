/**
 * Telemetry API
 * The telemetry API allows you to send realtime telemetry of your aircrafts into your IDRONECT account. It will help you to log your flights and allow you to automate your maintenance folow-up.
 *
 * OpenAPI spec version: TEL-1.2.5
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { HttpFile } from '../http/http';

export class DataResponseData {
    /**
    * New flight id for replay
    */
    'flightId': string;
    /**
    * Aircraft id linked to flight
    */
    'aircraftId'?: string;
    /**
    * Tracker id linked to flight
    */
    'trackerId'?: string;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "flightId",
            "baseName": "flightId",
            "type": "string",
            "format": ""
        },
        {
            "name": "aircraftId",
            "baseName": "aircraftId",
            "type": "string",
            "format": ""
        },
        {
            "name": "trackerId",
            "baseName": "trackerId",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return DataResponseData.attributeTypeMap;
    }
    
    public constructor() {
    }
}
