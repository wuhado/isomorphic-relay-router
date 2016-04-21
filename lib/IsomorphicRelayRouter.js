'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouterRelay = require('react-router-relay');

var _IsomorphicRelayRouterContext = require('./IsomorphicRelayRouterContext');

var _IsomorphicRelayRouterContext2 = _interopRequireDefault(_IsomorphicRelayRouterContext);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var IsomorphicRelayRouter = function (_RelayRouter) {
    (0, _inherits3.default)(IsomorphicRelayRouter, _RelayRouter);

    function IsomorphicRelayRouter() {
        (0, _classCallCheck3.default)(this, IsomorphicRelayRouter);
        return (0, _possibleConstructorReturn3.default)(this, _RelayRouter.apply(this, arguments));
    }

    IsomorphicRelayRouter.prototype.renderRouterContext = function renderRouterContext(props) {
        return _react2.default.createElement(_IsomorphicRelayRouterContext2.default, props);
    };

    return IsomorphicRelayRouter;
}(_reactRouterRelay.RelayRouter);

exports.default = IsomorphicRelayRouter;