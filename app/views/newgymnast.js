define(
	['underscore', 'jquery', 'app', 'backbone', 'text!templates/gymnastview.html'],
	function(_, $, app, Backbone, html) {

		var view = Backbone.View.extend({

			el: $('#gymnast-view'),

			events: {
                'click a[href=#cancel]': 'cancel',
                'click a[href=#save]': 'save',  
            },			

			initialize: function() {
				this.template = _.template(html);
			},

			render: function() {
				var self = this,
					model = self.model,
					template = self.template,
					rendered = template(_.extend(model.attributes, { id: model.id }));
				
				this.el.html(rendered);
				
				return this;	
			},

			save: function() {
			},

			cancel: function() {
			}
			
		});

		return view;

	});