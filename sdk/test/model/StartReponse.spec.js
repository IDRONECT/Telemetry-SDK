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

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', process.cwd()+'/src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require(process.cwd()+'/src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.TelemetryApi);
  }
}(this, function(expect, TelemetryApi) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new TelemetryApi.StartReponse();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('StartReponse', function() {
    it('should create an instance of StartReponse', function() {
      // uncomment below and update the code to test StartReponse
      //var instane = new TelemetryApi.StartReponse();
      //expect(instance).to.be.a(TelemetryApi.StartReponse);
    });

    it('should have the property status (base name: "status")', function() {
      // uncomment below and update the code to test the property status
      //var instance = new TelemetryApi.StartReponse();
      //expect(instance).to.be();
    });

    it('should have the property message (base name: "message")', function() {
      // uncomment below and update the code to test the property message
      //var instance = new TelemetryApi.StartReponse();
      //expect(instance).to.be();
    });

    it('should have the property data (base name: "data")', function() {
      // uncomment below and update the code to test the property data
      //var instance = new TelemetryApi.StartReponse();
      //expect(instance).to.be();
    });

  });

}));
