"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The TextRequestBody model module.
 * @module model/TextRequestBody
 * @version 0.0.1
 */
var TextRequestBody = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>TextRequestBody</code>.
   * @alias module:model/TextRequestBody
   * @param token {String} 
   * @param message {String} 
   */
  function TextRequestBody(token, message) {
    _classCallCheck(this, TextRequestBody);

    TextRequestBody.initialize(this, token, message);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(TextRequestBody, null, [{
    key: "initialize",
    value: function initialize(obj, token, message) {
      obj['token'] = token;
      obj['message'] = message;
    }
    /**
     * Constructs a <code>TextRequestBody</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/TextRequestBody} obj Optional instance to populate.
     * @return {module:model/TextRequestBody} The populated <code>TextRequestBody</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new TextRequestBody();

        if (data.hasOwnProperty('token')) {
          obj['token'] = _ApiClient["default"].convertToType(data['token'], 'String');
        }

        if (data.hasOwnProperty('message')) {
          obj['message'] = _ApiClient["default"].convertToType(data['message'], 'String');
        }
      }

      return obj;
    }
  }]);

  return TextRequestBody;
}();
/**
 * @member {String} token
 */


TextRequestBody.prototype['token'] = undefined;
/**
 * @member {String} message
 */

TextRequestBody.prototype['message'] = undefined;
var _default = TextRequestBody;
exports["default"] = _default;