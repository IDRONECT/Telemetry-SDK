import { ResponseContext, RequestContext, HttpFile } from '../http/http';
import * as models from '../models/all';
import { Configuration} from '../configuration'

import { DataBody } from '../models/DataBody';
import { DataResponse } from '../models/DataResponse';
import { DataResponseData } from '../models/DataResponseData';
import { GenericError } from '../models/GenericError';
import { ListResponse } from '../models/ListResponse';
import { ListResponseData } from '../models/ListResponseData';
import { ListResponseDataEntry } from '../models/ListResponseDataEntry';
import { Point } from '../models/Point';
import { StartBody } from '../models/StartBody';
import { StartReponse } from '../models/StartReponse';
import { StartResponseData } from '../models/StartResponseData';
import { StopBody } from '../models/StopBody';
import { StopReponse } from '../models/StopReponse';
import { StopReponseData } from '../models/StopReponseData';
import { TelemetryResponse } from '../models/TelemetryResponse';
import { TelemetryResponseData } from '../models/TelemetryResponseData';

import { ObservableTelemetryApi } from "./ObservableAPI";
import { TelemetryApiRequestFactory, TelemetryApiResponseProcessor} from "../apis/TelemetryApi";

export interface TelemetryApiTelemetryDataPostRequest {
    /**
     * null
     * @type DataBody
     * @memberof TelemetryApitelemetryDataPost
     */
    body?: DataBody
}

export interface TelemetryApiTelemetryListGetRequest {
}

export interface TelemetryApiTelemetryStartPostRequest {
    /**
     * aircraftId or trackerId is required, not both
     * @type StartBody
     * @memberof TelemetryApitelemetryStartPost
     */
    body?: StartBody
}

export interface TelemetryApiTelemetryStopPostRequest {
    /**
     * null
     * @type StopBody
     * @memberof TelemetryApitelemetryStopPost
     */
    body?: StopBody
}

export interface TelemetryApiTelemetryTelemetryIdGetRequest {
    /**
     * Telemetry id to fetch
     * @type string
     * @memberof TelemetryApitelemetryTelemetryIdGet
     */
    telemetryId: string
}

export class ObjectTelemetryApi {
    private api: ObservableTelemetryApi

    public constructor(configuration: Configuration, requestFactory?: TelemetryApiRequestFactory, responseProcessor?: TelemetryApiResponseProcessor) {
        this.api = new ObservableTelemetryApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Add a new data point to an ongoing telemetry recording
     * @param param the request object
     */
    public telemetryDataPost(param: TelemetryApiTelemetryDataPostRequest, options?: Configuration): Promise<DataResponse> {
        return this.api.telemetryDataPost(param.body,  options).toPromise();
    }

    /**
     * List all activte telemetries
     * @param param the request object
     */
    public telemetryListGet(param: TelemetryApiTelemetryListGetRequest, options?: Configuration): Promise<ListResponse> {
        return this.api.telemetryListGet( options).toPromise();
    }

    /**
     * Start a new telemetry recording
     * @param param the request object
     */
    public telemetryStartPost(param: TelemetryApiTelemetryStartPostRequest, options?: Configuration): Promise<StartReponse> {
        return this.api.telemetryStartPost(param.body,  options).toPromise();
    }

    /**
     * Stops an ongoing telemetry
     * @param param the request object
     */
    public telemetryStopPost(param: TelemetryApiTelemetryStopPostRequest, options?: Configuration): Promise<StopReponse> {
        return this.api.telemetryStopPost(param.body,  options).toPromise();
    }

    /**
     * Get data about a specific telemetry
     * @param param the request object
     */
    public telemetryTelemetryIdGet(param: TelemetryApiTelemetryTelemetryIdGetRequest, options?: Configuration): Promise<TelemetryResponse> {
        return this.api.telemetryTelemetryIdGet(param.telemetryId,  options).toPromise();
    }

}
