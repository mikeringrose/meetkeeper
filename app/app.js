define(
		['require', 'underscore', 'jquery', 'backbone', 'routers/workspace', 'models/meets', 'models/gymnasts'],
        function( require, _, $, Backbone, Workspace, Meets, Gymnasts) {

    var meets = new Meets,
        gymnasts = new Gymnasts,
    	app = window.app = {
    		meets: meets, 
            gymnasts: gymnasts,	
    		workspace: new Workspace
    	}

    $(document).ready(function() {
    	meets.fetch();
        gymnasts.fetch();
    });

	Backbone.history.start({ silent: true });

	return app;	
});