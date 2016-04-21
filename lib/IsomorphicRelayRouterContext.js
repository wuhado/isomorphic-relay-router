'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _isomorphicRelay = require('isomorphic-relay');

var _isomorphicRelay2 = _interopRequireDefault(_isomorphicRelay);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouterRelay = require('react-router-relay');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var IsomorphicRelayRouterContext = function (_RelayRouterContext) {
    (0, _inherits3.default)(IsomorphicRelayRouterContext, _RelayRouterContext);

    function IsomorphicRelayRouterContext(props, context) {
        (0, _classCallCheck3.default)(this, IsomorphicRelayRouterContext);

        var _this = (0, _possibleConstructorReturn3.default)(this, _RelayRouterContext.call(this, props, context));

        if (props.routeAggregator) {
            _this._routeAggregator = props.routeAggregator;
        }
        return _this;
    }

    IsomorphicRelayRouterContext.prototype.render = function render() {
        return _react2.default.createElement(_isomorphicRelay2.default.RootContainer, (0, _extends3.default)({}, this.props, {
            Component: this._routeAggregator,
            renderFailure: this.renderFailure,
            renderFetched: this.renderFetched,
            renderLoading: this.renderLoading,
            route: this._routeAggregator.route
        }));
    };

    return IsomorphicRelayRouterContext;
}(_reactRouterRelay.RelayRouterContext);

exports.default = IsomorphicRelayRouterContext;


IsomorphicRelayRouterContext.propTypes = _reactRouterRelay.RelayRouterContext.propTypes;
IsomorphicRelayRouterContext.childContextTypes = _reactRouterRelay.RelayRouterContext.childContextTypes;
IsomorphicRelayRouterContext.defaultProps = _reactRouterRelay.RelayRouterContext.defaultProps;