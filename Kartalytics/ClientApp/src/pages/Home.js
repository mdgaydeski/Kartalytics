"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var react_router_dom_1 = require("react-router-dom");
var ROUTES = require("../constants/routes");
var Home = function () {
    return (React.createElement(React.Fragment, null,
        React.createElement("h1", null, "Home Page"),
        React.createElement(react_router_dom_1.Link, { to: ROUTES.PLAYER + "/1" }, "Player"),
        React.createElement("br", null),
        React.createElement(react_router_dom_1.Link, { to: ROUTES.PLAYER_LIST }, "Player List"),
        React.createElement("br", null),
        React.createElement(react_router_dom_1.Link, { to: ROUTES.TOURNAMENT + "/1" }, "Tournament"),
        React.createElement("br", null),
        React.createElement(react_router_dom_1.Link, { to: ROUTES.TOURNAMENT_LIST }, "Tournament List"),
        React.createElement("br", null),
        React.createElement(react_router_dom_1.Link, { to: ROUTES.TRACK + "/1" }, "Track"),
        React.createElement("br", null),
        React.createElement(react_router_dom_1.Link, { to: ROUTES.TRACK_LIST }, "Track List")));
};
exports.default = Home;
//# sourceMappingURL=Home.js.map