import { httpGet } from '../util/HttpRequest';

// var configManagerObj = require('../util/ConfigManager.js');

const getComponent = function() {
	return httpGet('http://localhost:8082' + '/page2');
};

exports.getComponent = getComponent;
