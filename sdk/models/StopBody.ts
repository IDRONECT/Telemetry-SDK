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

export class StopBody {
    /**
    * telemetryId
    */
    'telemetryId': string;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "telemetryId",
            "baseName": "telemetryId",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return StopBody.attributeTypeMap;
    }
    
    public constructor() {
    }
}
