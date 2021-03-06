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
 * @interface Point
 */
export interface Point {
    /**
     * Latitude in floating decimals (e.g. 51.04433141367766)
     * @type {number}
     * @memberof Point
     */
    lat: number;
    /**
     * Longitude in floating decimals (e.g. 3.7520202689333257)
     * @type {number}
     * @memberof Point
     */
    lng: number;
    /**
     * WGS84 height
     * @type {number}
     * @memberof Point
     */
    alt: number;
    /**
     * Airspeed in m/s
     * @type {number}
     * @memberof Point
     */
    aSpeed?: number;
    /**
     * GroundSpeed in m/s
     * @type {number}
     * @memberof Point
     */
    gSpeed?: number;
    /**
     * Vertical (climb/descent) in m/s. Value should be negative for descent
     * @type {number}
     * @memberof Point
     */
    ySpeed?: number;
    /**
     * Amount of satellites currently connected
     * @type {number}
     * @memberof Point
     */
    sats?: number;
    /**
     * Epoch timestamp in ms. If not provided the timestamp will be the time of arrival of the data on the server
     * @type {number}
     * @memberof Point
     */
    time?: number;
    /**
     * Device yaw in degrees (-180 degrees <= yaw <= 180 degrees)
     * @type {number}
     * @memberof Point
     */
    yaw?: number;
    /**
     * Device pitch in degrees (-90 degrees <= pitch <= 90 degrees)
     * @type {number}
     * @memberof Point
     */
    pitch?: number;
    /**
     * Device roll in degrees (-180 degrees <= roll <= 180 degrees)
     * @type {number}
     * @memberof Point
     */
    roll?: number;
    /**
     * Bearing (0 degrees <= bearing <= 360 degrees)
     * @type {number}
     * @memberof Point
     */
    bearing?: number;
    /**
     * Battery in % left
     * @type {number}
     * @memberof Point
     */
    batt?: number;
    /**
     * Horizontal accuracy of the device in meters
     * @type {number}
     * @memberof Point
     */
    hAcc?: number;
    /**
     * Vertical accuracy of the device in meters
     * @type {number}
     * @memberof Point
     */
    vAcc?: number;
    /**
     * Registered temperature in degrees Celcius of the battery or device in general
     * @type {number}
     * @memberof Point
     */
    temp?: number;
    /**
     * Current battery voltage of the battery/device
     * @type {number}
     * @memberof Point
     */
    volt?: number;
    /**
     * 
     * @type {object}
     * @memberof Point
     */
    metadata?: object;
}

export function PointFromJSON(json: any): Point {
    return PointFromJSONTyped(json, false);
}

export function PointFromJSONTyped(json: any, ignoreDiscriminator: boolean): Point {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'lat': json['lat'],
        'lng': json['lng'],
        'alt': json['alt'],
        'aSpeed': !exists(json, 'aSpeed') ? undefined : json['aSpeed'],
        'gSpeed': !exists(json, 'gSpeed') ? undefined : json['gSpeed'],
        'ySpeed': !exists(json, 'ySpeed') ? undefined : json['ySpeed'],
        'sats': !exists(json, 'sats') ? undefined : json['sats'],
        'time': !exists(json, 'time') ? undefined : json['time'],
        'yaw': !exists(json, 'yaw') ? undefined : json['yaw'],
        'pitch': !exists(json, 'pitch') ? undefined : json['pitch'],
        'roll': !exists(json, 'roll') ? undefined : json['roll'],
        'bearing': !exists(json, 'bearing') ? undefined : json['bearing'],
        'batt': !exists(json, 'batt') ? undefined : json['batt'],
        'hAcc': !exists(json, 'hAcc') ? undefined : json['hAcc'],
        'vAcc': !exists(json, 'vAcc') ? undefined : json['vAcc'],
        'temp': !exists(json, 'temp') ? undefined : json['temp'],
        'volt': !exists(json, 'volt') ? undefined : json['volt'],
        'metadata': !exists(json, 'metadata') ? undefined : json['metadata'],
    };
}

export function PointToJSON(value?: Point | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'lat': value.lat,
        'lng': value.lng,
        'alt': value.alt,
        'aSpeed': value.aSpeed,
        'gSpeed': value.gSpeed,
        'ySpeed': value.ySpeed,
        'sats': value.sats,
        'time': value.time,
        'yaw': value.yaw,
        'pitch': value.pitch,
        'roll': value.roll,
        'bearing': value.bearing,
        'batt': value.batt,
        'hAcc': value.hAcc,
        'vAcc': value.vAcc,
        'temp': value.temp,
        'volt': value.volt,
        'metadata': value.metadata,
    };
}


