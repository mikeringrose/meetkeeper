define(
    ['underscore', 'backbone', 'views/meetlistview'],
    function(_, Backbone, MeetListView) {

        var view = Backbone.View.extend({

            el: $('#meets-summary'),

            events: {
                // 'click a[href=#newmeet]': 'create'   
            },

            initialize: function() {
                var self = this;

                self.model.bind('add',   self.addOne, self);
                self.model.bind('reset', self.addAll, self); 
            },

            render: function() {
                this.addAll();
            },

            addOne: function(meet) {
                var view = new MeetListView({model: meet});
                this.$('#meet-listview').append(view.render().el);
                // this.$('#meet-listview').listview('refresh');                    
            },

            addAll: function() {
                var self = this;
                self.model.each(self.addOne);
            }            

        });

        return view;

    });