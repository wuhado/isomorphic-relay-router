'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

exports.default = prepareData;

var _isomorphicRelay = require('isomorphic-relay');

var _isomorphicRelay2 = _interopRequireDefault(_isomorphicRelay);

var _RouteAggregator = require('react-router-relay/lib/RouteAggregator');

var _RouteAggregator2 = _interopRequireDefault(_RouteAggregator);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function prepareData(renderProps) {
    var routeAggregator = new _RouteAggregator2.default();
    routeAggregator.updateRoute(renderProps);

    return _isomorphicRelay2.default.prepareData({
        Component: routeAggregator,
        route: routeAggregator.route
    }).then(function (_ref) {
        var data = _ref.data;
        var relayContext = _ref.props.relayContext;
        return { data: data, props: (0, _extends3.default)({}, renderProps, {
                relayContext: relayContext,
                routeAggregator: routeAggregator
            }) };
    });
}