import React from 'react';
import { renderToString } from 'react-dom/server';

import { commonAPI as app, startServer } from '../util/ExpressJSUtils.js';
import { configManagerObj } from '../util/ConfigManager.js';
// import { httpGet } from '../util/HttpRequest';

import App from './components/app/App';

const PORT = configManagerObj.env_config_server_port;

const healthInfoURL = '/browseapp/v1/api/health';
app.get(healthInfoURL, function(req, res) {
	var responseData = {
		status: 'UP',
		healthInfo: { status: 'UP', appName: 'browse-app API Service' }
	};
	res.send(responseData);
});

const pageURL = '/page';
app.get(pageURL, function(req, res) {
	let htmlString = renderToString(<App />);
	res.send(`
		<!DOCTYPE html>
		<html lang="en">
			<head>
				<title>Browse App v2</title>
			</head>
			<body>
				${htmlString}
			</body>
		</html>
	`);
	// console.log(configManagerObj.env_api['server'].url+ configManagerObj.env_helloworld_api.url,'ER')
	/*httpGet(configManagerObj.env_api['server'].url+ configManagerObj.env_helloworld_api.url)
		.then(function(component) {
			let htmlString = renderToString(<App />);
			res.send(`
				<!DOCTYPE html>
				<html lang="en">
					<head>
						<title>Browse App New version change</title>
					</head>
					<body>
						${htmlString}
						${component.data}
					</body>
				</html>
			`);
		});*/
});

startServer(app, PORT, function() {});
