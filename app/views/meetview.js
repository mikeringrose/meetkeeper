define(
    ['underscore', 'backbone', 'text!templates/meetview.html'],
    function(_, Backbone, html) {
        var view = Backbone.View.extend({
            
            el: $('#meetview'),

            initialize: function() {
                this.template = _.template(html);
            },

            render: function() {
                var data = _.extend(this.model.attributes, {
                        id: this.model.id,
                        gymnasts: [ 
                            { 
                                name: 'Noah Ringrose',
                                floor: 15.5,
                                pommel: 15.9
                            },  
                            { name: 'Brady Cook'}, 
                            { name: 'Richard Plesic'}, 
                            { name: 'Chris Phillips'} 
                        ]
                    });

                this.el.html(this.template(data));

                return this;
            }

        });

        return view;
    });