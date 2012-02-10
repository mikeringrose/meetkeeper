define(
	['require', 'underscore', 'jquery', 'jquerymobile', 'backbone', 'views/meetsummary', 'views/gymnastsview'],
	function(require, _, $, jqm, Backbone, MeetSummary, GymnastsView) {
		
		var Workspace = Backbone.Router.extend({
			"routes": {
				"" : "root",
				"meet/:id": "meet",
				"meetssummary": "meetssummary",
				"gymnasts": "gymnasts"
			},

			meet: function(id) {
				if (id === 'new') {
					require(
						['views/newmeet'],
						function(NewMeet) {
							new NewMeet();
							$.mobile.changePage('#newmeet', { changeHash: false });
						});
				}
				else {
					require(
						['views/meetview'],
						function(MeetView) {
							_renderPage(MeetView, window.app.meets.get(id), '#meetview');
						});
				}

			},

			meetssummary: function() {
				_renderPage(MeetSummary, window.app.meets, '#meets-summary');
			}, 

			gymnasts: function() {
				_renderPage(GymnastsView, window.app.gymnasts, '#gymnasts-view');
			},

			root: function() {
				
			}
		});

		function _renderPage(View, model, page) {
			var view = new View( { model: model } );
			view.render();
			
			$.mobile.changePage(page, { changeHash: false });
		}

		return Workspace;
	});