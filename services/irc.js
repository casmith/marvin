'use strict';

var irc = require('irc');

var client;
module.exports = {
	init: function() {
		// TODO: config
		var client = new irc.Client('irc.quakenet.org', 'marvin', {
			autoconnect: false,
			userName: 'marvin',
			realName: 'marvin',
			port: 6667,
			localAddress: null,
			debug: true,
			showErrors: true,
			autoRejoin: true,
			autoConnect: false,
			channels: ['#mfdguild'],
			floodProtection: false,
			floodProtectionDelay: 1000,
			stripColors: false,
			channelPrefixes: "&#",
			messageSplit: 512
		});

		client.connect();
	}

}