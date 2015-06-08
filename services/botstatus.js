'use strict';

var moment = require('moment');
var bots = {}

module.exports = {
	update: function(name) {
		console.log('updating status for ' + name);
		bots[name] = {
			status: 'online',
			lastSeen: moment()
		}
	},
	get: function() {
		return bots;
	}
}