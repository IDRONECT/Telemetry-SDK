# Telemetry SDK

This is a generated TypeScript package to easily implement the SDK in your projects.

## Getting started

The easiest way to start is to have a look [at the example integration](https://github.com/IDRONECT/Telemetry-SDK-integration)

### Create a new API instance

```javascript
const configParams = { authMethods: { SECRET: secret } }
const configuration = createConfiguration(configParams)

const api = new ObjectTelemetryApi(configuration)
```

### Retreive all live telemetries

```javascript
const res = await api.telemetryListGet({})
const telemetries = res.data?.telemetries
```
