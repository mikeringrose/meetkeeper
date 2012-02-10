require.config({
	paths: {
		'backbone': 'libs/backbone/backbone',
		'localStorage': 'libs/backbone/backbone.localStorage',
		'underscore': 'libs/underscore/underscore-1.2.4',
		'text': 'libs/require/text',
		'order': 'libs/require/order',
		'text': 'libs/require/text',
		'jquery': 'libs/jquery/jquery-1.6.4.min',
		'jquerymobile': 'libs/jquery/jquery.mobile-1.0.min'
	},
	baseUrl: 'app'
});

require(
	['require', 'jquery', 'underscore', 'order!backbone', 'order!localStorage'], 
	function(require, $, _, Backbone) {
		// framework loaded
		require(['jquerymobile', 'app'], function(jqm, app) {
			// Global overrides to disable hashchange listening
			// (as opposed to using urlHistory.listeningEnabled)
			// This makes it easier to focus on using Backbone's own
			// routing:
			$.mobile.linkBindingEnabled = false;
			$.mobile.hashListeningEnabled = false;
			$.mobile.pushStateEnabled = false;
		});
});