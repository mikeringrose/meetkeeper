define(
	['underscore', 'jquery', 'app', 'backbone', 'models/Meet'],
	function(_, $, app, Backbone, Meet) {

		var view = Backbone.View.extend({

			el: $('#newmeet'),

			events: {
                'click a[href=#cancel]': 'cancel',
                'click a[href=#save]': 'save',  
            },			

			initialize: function() {
				this.model = new Meet();
			},

			save: function() {
				var inputs = this.$(':input'),
					name = inputs[0].value,
					location = inputs[1].value,
					date = inputs[2].value,
					meet = this.model = new Meet({ name: name, location: location, date: date});

				meet.save();

				app.meets.add(meet);
			},

			cancel: function() {
				$.mobile.changePage('/');
			}
			
		});

		return view;

	});