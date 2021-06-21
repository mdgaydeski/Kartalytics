"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var react_router_dom_1 = require("react-router-dom");
var routes_1 = require("../constants/routes");
var PlayerList = function () {
    return (React.createElement(React.Fragment, null,
        React.createElement("h1", null, "Player List"),
        React.createElement(react_router_dom_1.Link, { to: routes_1.HOME }, "Back to Home")));
};
exports.default = PlayerList;
//# sourceMappingURL=PlayerList.js.map