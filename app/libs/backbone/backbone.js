require(
	['require', 'jquery', 'underscore'], 
	function(require, $, _){

		var root = this,
			prev$ = root.$,
			prev_ = root._;

		root.$ = $;
		root._ = _;

		define('backbone', ['libs/backbone/backbone-0.5.3'], function() {
			root.$ = prev$;
			root._ = prev_;

			return Backbone.noConflict();
		});

	});