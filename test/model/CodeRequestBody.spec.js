/**
 * lotify_sample_api
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 0.0.1
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
    factory(root.expect, root.LotifySampleApi);
  }
}(this, function(expect, LotifySampleApi) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new LotifySampleApi.CodeRequestBody();
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

  describe('CodeRequestBody', function() {
    it('should create an instance of CodeRequestBody', function() {
      // uncomment below and update the code to test CodeRequestBody
      //var instane = new LotifySampleApi.CodeRequestBody();
      //expect(instance).to.be.a(LotifySampleApi.CodeRequestBody);
    });

    it('should have the property clientId (base name: "client_id")', function() {
      // uncomment below and update the code to test the property clientId
      //var instane = new LotifySampleApi.CodeRequestBody();
      //expect(instance).to.be();
    });

    it('should have the property clientSecret (base name: "client_secret")', function() {
      // uncomment below and update the code to test the property clientSecret
      //var instane = new LotifySampleApi.CodeRequestBody();
      //expect(instance).to.be();
    });

    it('should have the property redirectUri (base name: "redirect_uri")', function() {
      // uncomment below and update the code to test the property redirectUri
      //var instane = new LotifySampleApi.CodeRequestBody();
      //expect(instance).to.be();
    });

    it('should have the property code (base name: "code")', function() {
      // uncomment below and update the code to test the property code
      //var instane = new LotifySampleApi.CodeRequestBody();
      //expect(instance).to.be();
    });

  });

}));
