import { ResponseContext, RequestContext, HttpFile } from '../http/http';
import * as models from '../models/all';
import { Configuration} from '../configuration'
import { Observable, of, from } from '../rxjsStub';
import {mergeMap, map} from  '../rxjsStub';
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

import { TelemetryApiRequestFactory, TelemetryApiResponseProcessor} from "../apis/TelemetryApi";
export class ObservableTelemetryApi {
    private requestFactory: TelemetryApiRequestFactory;
    private responseProcessor: TelemetryApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: TelemetryApiRequestFactory,
        responseProcessor?: TelemetryApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new TelemetryApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new TelemetryApiResponseProcessor();
    }

    /**
     * Add a new data point to an ongoing telemetry recording
     * @param body null
     */
    public telemetryDataPost(body?: DataBody, _options?: Configuration): Observable<DataResponse> {
        const requestContextPromise = this.requestFactory.telemetryDataPost(body, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.telemetryDataPost(rsp)));
            }));
    }
 
    /**
     * List all activte telemetries
     */
    public telemetryListGet(_options?: Configuration): Observable<ListResponse> {
        const requestContextPromise = this.requestFactory.telemetryListGet(_options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.telemetryListGet(rsp)));
            }));
    }
 
    /**
     * Start a new telemetry recording
     * @param body aircraftId or trackerId is required, not both
     */
    public telemetryStartPost(body?: StartBody, _options?: Configuration): Observable<StartReponse> {
        const requestContextPromise = this.requestFactory.telemetryStartPost(body, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.telemetryStartPost(rsp)));
            }));
    }
 
    /**
     * Stops an ongoing telemetry
     * @param body null
     */
    public telemetryStopPost(body?: StopBody, _options?: Configuration): Observable<StopReponse> {
        const requestContextPromise = this.requestFactory.telemetryStopPost(body, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.telemetryStopPost(rsp)));
            }));
    }
 
    /**
     * Get data about a specific telemetry
     * @param telemetryId Telemetry id to fetch
     */
    public telemetryTelemetryIdGet(telemetryId: string, _options?: Configuration): Observable<TelemetryResponse> {
        const requestContextPromise = this.requestFactory.telemetryTelemetryIdGet(telemetryId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.telemetryTelemetryIdGet(rsp)));
            }));
    }
 
}
