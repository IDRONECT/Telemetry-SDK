# TelemetryApi.TelemetryApi

All URIs are relative to *https://telemetry.idronect.com/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**telemetryDataPost**](TelemetryApi.md#telemetryDataPost) | **POST** /telemetry/data | 
[**telemetryListGet**](TelemetryApi.md#telemetryListGet) | **GET** /telemetry/list | 
[**telemetryStartPost**](TelemetryApi.md#telemetryStartPost) | **POST** /telemetry/start | 
[**telemetryStopPost**](TelemetryApi.md#telemetryStopPost) | **POST** /telemetry/stop | 
[**telemetryTelemetryIdGet**](TelemetryApi.md#telemetryTelemetryIdGet) | **GET** /telemetry/{telemetryId} | 



## telemetryDataPost

> DataResponse telemetryDataPost(opts)



Add a new data point to an ongoing telemetry recording

### Example

```javascript
import TelemetryApi from 'telemetry_api';
let defaultClient = TelemetryApi.ApiClient.instance;
// Configure API key authorization: SECRET
let SECRET = defaultClient.authentications['SECRET'];
SECRET.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//SECRET.apiKeyPrefix = 'Token';

let apiInstance = new TelemetryApi.TelemetryApi();
let opts = {
  'body': new TelemetryApi.DataBody() // DataBody | null
};
apiInstance.telemetryDataPost(opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**DataBody**](DataBody.md)| null | [optional] 

### Return type

[**DataResponse**](DataResponse.md)

### Authorization

[SECRET](../README.md#SECRET)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## telemetryListGet

> ListResponse telemetryListGet()



List all activte telemetries

### Example

```javascript
import TelemetryApi from 'telemetry_api';
let defaultClient = TelemetryApi.ApiClient.instance;
// Configure API key authorization: SECRET
let SECRET = defaultClient.authentications['SECRET'];
SECRET.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//SECRET.apiKeyPrefix = 'Token';

let apiInstance = new TelemetryApi.TelemetryApi();
apiInstance.telemetryListGet((error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

This endpoint does not need any parameter.

### Return type

[**ListResponse**](ListResponse.md)

### Authorization

[SECRET](../README.md#SECRET)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## telemetryStartPost

> StartReponse telemetryStartPost(opts)



Start a new telemetry recording

### Example

```javascript
import TelemetryApi from 'telemetry_api';
let defaultClient = TelemetryApi.ApiClient.instance;
// Configure API key authorization: SECRET
let SECRET = defaultClient.authentications['SECRET'];
SECRET.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//SECRET.apiKeyPrefix = 'Token';

let apiInstance = new TelemetryApi.TelemetryApi();
let opts = {
  'body': new TelemetryApi.StartBody() // StartBody | aircraftId or trackerId is required, not both
};
apiInstance.telemetryStartPost(opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**StartBody**](StartBody.md)| aircraftId or trackerId is required, not both | [optional] 

### Return type

[**StartReponse**](StartReponse.md)

### Authorization

[SECRET](../README.md#SECRET)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## telemetryStopPost

> StopReponse telemetryStopPost(opts)



Stops an ongoing telemetry

### Example

```javascript
import TelemetryApi from 'telemetry_api';
let defaultClient = TelemetryApi.ApiClient.instance;
// Configure API key authorization: SECRET
let SECRET = defaultClient.authentications['SECRET'];
SECRET.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//SECRET.apiKeyPrefix = 'Token';

let apiInstance = new TelemetryApi.TelemetryApi();
let opts = {
  'body': new TelemetryApi.StopBody() // StopBody | null
};
apiInstance.telemetryStopPost(opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**StopBody**](StopBody.md)| null | [optional] 

### Return type

[**StopReponse**](StopReponse.md)

### Authorization

[SECRET](../README.md#SECRET)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## telemetryTelemetryIdGet

> TelemetryResponse telemetryTelemetryIdGet(telemetryId)



Get data about a specific telemetry

### Example

```javascript
import TelemetryApi from 'telemetry_api';
let defaultClient = TelemetryApi.ApiClient.instance;
// Configure API key authorization: SECRET
let SECRET = defaultClient.authentications['SECRET'];
SECRET.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//SECRET.apiKeyPrefix = 'Token';

let apiInstance = new TelemetryApi.TelemetryApi();
let telemetryId = "telemetryId_example"; // String | Telemetry id to fetch
apiInstance.telemetryTelemetryIdGet(telemetryId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **telemetryId** | **String**| Telemetry id to fetch | 

### Return type

[**TelemetryResponse**](TelemetryResponse.md)

### Authorization

[SECRET](../README.md#SECRET)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

