define(
	['backbone', 'localStorage', 'models/meet'],
	function(Backbone, Store, Meet) {

		var collection = Backbone.Collection.extend({

			model: Meet,

			localStorage : new Store('meets')

		});

		return collection;

	});