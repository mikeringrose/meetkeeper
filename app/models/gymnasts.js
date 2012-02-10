define(
	['backbone', 'localStorage', 'models/gymnast'],
	function(Backbone, Store, Gymnast) {

		var model = Backbone.Collection.extend({
			
			model: Gymnast,
			
			localStorage : new Store('gymnasts')

		});

		return model;

	});