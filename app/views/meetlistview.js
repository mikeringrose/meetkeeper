define(
    ['underscore', 'backbone', 'text!templates/meetlistview.html'],
    function(_, Backbone, html) {
        var view = Backbone.View.extend({
            
            initialize: function() {
                this.template = _.template(html);
            },

            render: function() {
                this.el = this.template({ id: this.model.id, name: this.model.get('name') });
                return this;
            }

        });

        return view;
    });