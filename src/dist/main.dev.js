"use strict";

var _vue = require("vue");

var _App = _interopRequireDefault(require("./App.vue"));

var _store = _interopRequireDefault(require("./store.js"));

var _router = _interopRequireDefault(require("./router"));

var _i18n = _interopRequireDefault(require("./i18n.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _require = require('./mocks/browser'),
    worker = _require.worker;

worker.start();
var app = (0, _vue.createApp)(_App["default"]);
app.use(_i18n["default"]).mount("#app");
(0, _vue.createApp)(_App["default"]).use(_router["default"]).use(_store["default"]).app.mount('#app');