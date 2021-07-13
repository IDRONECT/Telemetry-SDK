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


import ApiClient from './ApiClient';
import DataBody from './model/DataBody';
import DataResponse from './model/DataResponse';
import DataResponseData from './model/DataResponseData';
import GenericError from './model/GenericError';
import ListResponse from './model/ListResponse';
import ListResponseData from './model/ListResponseData';
import ListResponseDataEntry from './model/ListResponseDataEntry';
import Point from './model/Point';
import StartBody from './model/StartBody';
import StartReponse from './model/StartReponse';
import StartResponseData from './model/StartResponseData';
import StopBody from './model/StopBody';
import StopReponse from './model/StopReponse';
import StopReponseData from './model/StopReponseData';
import TelemetryResponse from './model/TelemetryResponse';
import TelemetryResponseData from './model/TelemetryResponseData';
import TelemetryApi from './api/TelemetryApi';


/**
* The_telemetry_API_allows_you_to_send_realtime_telemetry_of_your_aircrafts_into_your_IDRONECT_account__It_will_help_you_to_log_your_flights_and_allow_you_to_automate_your_maintenance_folow_up_.<br>
* The <code>index</code> module provides access to constructors for all the classes which comprise the public API.
* <p>
* An AMD (recommended!) or CommonJS application will generally do something equivalent to the following:
* <pre>
* var TelemetryApi = require('index'); // See note below*.
* var xxxSvc = new TelemetryApi.XxxApi(); // Allocate the API class we're going to use.
* var yyyModel = new TelemetryApi.Yyy(); // Construct a model instance.
* yyyModel.someProperty = 'someValue';
* ...
* var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
* ...
* </pre>
* <em>*NOTE: For a top-level AMD script, use require(['index'], function(){...})
* and put the application logic within the callback function.</em>
* </p>
* <p>
* A non-AMD browser application (discouraged) might do something like this:
* <pre>
* var xxxSvc = new TelemetryApi.XxxApi(); // Allocate the API class we're going to use.
* var yyy = new TelemetryApi.Yyy(); // Construct a model instance.
* yyyModel.someProperty = 'someValue';
* ...
* var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
* ...
* </pre>
* </p>
* @module index
* @version TEL-1.2.5
*/
export {
    /**
     * The ApiClient constructor.
     * @property {module:ApiClient}
     */
    ApiClient,

    /**
     * The DataBody model constructor.
     * @property {module:model/DataBody}
     */
    DataBody,

    /**
     * The DataResponse model constructor.
     * @property {module:model/DataResponse}
     */
    DataResponse,

    /**
     * The DataResponseData model constructor.
     * @property {module:model/DataResponseData}
     */
    DataResponseData,

    /**
     * The GenericError model constructor.
     * @property {module:model/GenericError}
     */
    GenericError,

    /**
     * The ListResponse model constructor.
     * @property {module:model/ListResponse}
     */
    ListResponse,

    /**
     * The ListResponseData model constructor.
     * @property {module:model/ListResponseData}
     */
    ListResponseData,

    /**
     * The ListResponseDataEntry model constructor.
     * @property {module:model/ListResponseDataEntry}
     */
    ListResponseDataEntry,

    /**
     * The Point model constructor.
     * @property {module:model/Point}
     */
    Point,

    /**
     * The StartBody model constructor.
     * @property {module:model/StartBody}
     */
    StartBody,

    /**
     * The StartReponse model constructor.
     * @property {module:model/StartReponse}
     */
    StartReponse,

    /**
     * The StartResponseData model constructor.
     * @property {module:model/StartResponseData}
     */
    StartResponseData,

    /**
     * The StopBody model constructor.
     * @property {module:model/StopBody}
     */
    StopBody,

    /**
     * The StopReponse model constructor.
     * @property {module:model/StopReponse}
     */
    StopReponse,

    /**
     * The StopReponseData model constructor.
     * @property {module:model/StopReponseData}
     */
    StopReponseData,

    /**
     * The TelemetryResponse model constructor.
     * @property {module:model/TelemetryResponse}
     */
    TelemetryResponse,

    /**
     * The TelemetryResponseData model constructor.
     * @property {module:model/TelemetryResponseData}
     */
    TelemetryResponseData,

    /**
    * The TelemetryApi service constructor.
    * @property {module:api/TelemetryApi}
    */
    TelemetryApi
};
