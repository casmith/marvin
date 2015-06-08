'use strict';

var irc = require('irc');
var botstatus = require('./botstatus');

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

		client.addListener('message#mfdguild', function(from, message) {
			var regex = /Type: @(.*) For My List Of.*/
			var matches = message.match(regex);
			if (matches) {
				console.log('match!' + matches[1]);
				botstatus.update(matches[1]);
			} else {
				console.log('not match');
			}
		});
	}

}