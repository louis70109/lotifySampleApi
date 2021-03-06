/**
 * lotifySampleApi
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

import ApiClient from '../ApiClient';

/**
 * The RevokeRequestBody model module.
 * @module model/RevokeRequestBody
 * @version 0.0.1
 */
class RevokeRequestBody {
    /**
     * Constructs a new <code>RevokeRequestBody</code>.
     * @alias module:model/RevokeRequestBody
     * @param token {String} 
     */
    constructor(token) { 
        
        RevokeRequestBody.initialize(this, token);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, token) { 
        obj['token'] = token;
    }

    /**
     * Constructs a <code>RevokeRequestBody</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/RevokeRequestBody} obj Optional instance to populate.
     * @return {module:model/RevokeRequestBody} The populated <code>RevokeRequestBody</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new RevokeRequestBody();

            if (data.hasOwnProperty('token')) {
                obj['token'] = ApiClient.convertToType(data['token'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {String} token
 */
RevokeRequestBody.prototype['token'] = undefined;






export default RevokeRequestBody;

