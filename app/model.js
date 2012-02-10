var Meet,
	Gymnast,
	Gymnasts,
	Meets;

(function() {
	
	Gymnast = Backbone.Model.extend({
		
	});

	Gymnasts = Backbone.Collection.extend({
  		model: Gymnast
	});

	Meet = Backbone.Model.extend({
		
		defaults: function() {
			
			return {
				date: new Date()
			};

		}

	});

	Meets = Backbone.Collection.extend({
		model: Meet,

		url: '/fixture/meets'
	})

})();