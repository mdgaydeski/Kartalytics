"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var react_router_dom_1 = require("react-router-dom");
var routes_1 = require("../constants/routes");
var Track = function () {
    return (React.createElement(React.Fragment, null,
        React.createElement("h1", null, "Track"),
        React.createElement(react_router_dom_1.Link, { to: routes_1.HOME }, "Back to Home")));
};
exports.default = Track;
//# sourceMappingURL=Track.js.map