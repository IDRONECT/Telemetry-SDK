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
import { ObservableTelemetryApi } from './ObservableAPI';

import { TelemetryApiRequestFactory, TelemetryApiResponseProcessor} from "../apis/TelemetryApi";
export class PromiseTelemetryApi {
    private api: ObservableTelemetryApi

    public constructor(
        configuration: Configuration,
        requestFactory?: TelemetryApiRequestFactory,
        responseProcessor?: TelemetryApiResponseProcessor
    ) {
        this.api = new ObservableTelemetryApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Add a new data point to an ongoing telemetry recording
     * @param body null
     */
    public telemetryDataPost(body?: DataBody, _options?: Configuration): Promise<DataResponse> {
        const result = this.api.telemetryDataPost(body, _options);
        return result.toPromise();
    }

    /**
     * List all activte telemetries
     */
    public telemetryListGet(_options?: Configuration): Promise<ListResponse> {
        const result = this.api.telemetryListGet(_options);
        return result.toPromise();
    }

    /**
     * Start a new telemetry recording
     * @param body aircraftId or trackerId is required, not both
     */
    public telemetryStartPost(body?: StartBody, _options?: Configuration): Promise<StartReponse> {
        const result = this.api.telemetryStartPost(body, _options);
        return result.toPromise();
    }

    /**
     * Stops an ongoing telemetry
     * @param body null
     */
    public telemetryStopPost(body?: StopBody, _options?: Configuration): Promise<StopReponse> {
        const result = this.api.telemetryStopPost(body, _options);
        return result.toPromise();
    }

    /**
     * Get data about a specific telemetry
     * @param telemetryId Telemetry id to fetch
     */
    public telemetryTelemetryIdGet(telemetryId: string, _options?: Configuration): Promise<TelemetryResponse> {
        const result = this.api.telemetryTelemetryIdGet(telemetryId, _options);
        return result.toPromise();
    }


}



