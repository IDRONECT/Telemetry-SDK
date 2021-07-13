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
 *
 */

import ApiClient from '../ApiClient';
import TelemetryResponseData from './TelemetryResponseData';

/**
 * The TelemetryResponse model module.
 * @module model/TelemetryResponse
 * @version TEL-1.2.5
 */
class TelemetryResponse {
    /**
     * Constructs a new <code>TelemetryResponse</code>.
     * @alias module:model/TelemetryResponse
     * @param status {String} status
     * @param message {String} message
     */
    constructor(status, message) { 
        
        TelemetryResponse.initialize(this, status, message);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, status, message) { 
        obj['status'] = status;
        obj['message'] = message;
    }

    /**
     * Constructs a <code>TelemetryResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/TelemetryResponse} obj Optional instance to populate.
     * @return {module:model/TelemetryResponse} The populated <code>TelemetryResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new TelemetryResponse();

            if (data.hasOwnProperty('status')) {
                obj['status'] = ApiClient.convertToType(data['status'], 'String');
            }
            if (data.hasOwnProperty('message')) {
                obj['message'] = ApiClient.convertToType(data['message'], 'String');
            }
            if (data.hasOwnProperty('data')) {
                obj['data'] = TelemetryResponseData.constructFromObject(data['data']);
            }
        }
        return obj;
    }


}

/**
 * status
 * @member {String} status
 */
TelemetryResponse.prototype['status'] = undefined;

/**
 * message
 * @member {String} message
 */
TelemetryResponse.prototype['message'] = undefined;

/**
 * @member {module:model/TelemetryResponseData} data
 */
TelemetryResponse.prototype['data'] = undefined;






export default TelemetryResponse;

