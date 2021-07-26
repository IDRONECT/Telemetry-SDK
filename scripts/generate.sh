#!/bin/sh

openapi-generator-cli generate -g typescript-fetch -o ../sdk -i https://telemetry.idronect.com/api-docs.json -c ../config.yaml