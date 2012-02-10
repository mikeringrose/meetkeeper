define(
	['underscore', 'jquery', 'app', 'backbone', 'models/gymnast', 'views/newgymnast', 'text!templates/gymnastlistview.html'],
	function(_, $, app, Backbone, Gymnast, GymnastView, html) {

		var view = Backbone.View.extend({

			el: $('#gymnasts-view'),

			events: {
				'click a#create-gymnast': 'create'
			},

			initialize: function() {
                var self = this;

                self.model.bind('add',   self.addOne, self);
                self.model.bind('reset', self.addAll, self); 
                
                this.template = _.template(html);
                self.delegateEvents();
			},

			render: function() {
				this.addAll();
			},

            addOne: function(meet) {
                var view = new MeetListView({model: meet});
                this.$('#gymnasts-listview').append(view.render().el);
            },

            addAll: function() {
                var self = this;
                self.model.each(self.addOne);
            },

            create: function() {
            	var g = new Gymnast,
            		view = new GymnastView({model: g});

            	view.render();

            	$.mobile.changePage('#gymnast-view', { changeHash: false });
            }
			
		});

		return view;

	});