import { httpGet } from "../util/HttpRequest";

var configManagerObj = require("../util/ConfigManager.js");

const getComponent = function() {
	console.log("service ", configManagerObj.ENV_API_URL);
	return httpGet("http://localhost:8082" + "/page2");
};

exports.getComponent = getComponent;
