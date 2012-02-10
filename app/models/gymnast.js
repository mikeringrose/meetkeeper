define(
	['backbone', 'localStorage'],
	function(Backbone, Store) {

		var model = Backbone.Model.extend({
			
			initialize: function() {
				this.localStorage = new Store('gymnasts');
			}

		});

		return model;

	});