App.Router.map(function() {
  this.route("about");

  this.resource("meets", function() {
    this.route("new");
    this.resource("meet", { path: "/:meet_id" });
  });
  
  this.resource("gyms", function() {
    this.route("new");
    this.resource("gym", {path: "/:gym_id"}, function() {
      this.resource("gymnasts", function() {
        this.route("new");
      });
    });
  });

  this.resource("gymnasts", function() {
    this.resource("gymnast", {path: "/:gymnast_id"});
  });  
});

App.ApplicationRoute = Ember.Route.extend({
  setupController: function(controller) {
    if (window.App.userConnected === true) {
      controller.setUser();
    }
  }
});

App.IndexRoute = Ember.Route.extend({
  events: {
    select: function(meet) {
      this.transitionTo("meet", meet);
    }
  },

  setupController: function(controller) {
    controller.set('meets', App.Meet.find());
  }
})

App.MeetsNewRoute = Ember.Route.extend({
  model: function() {
    return App.Meet.createRecord();
  }
})

App.MeetsIndexRoute = Ember.Route.extend({
  model: function(params) {
    return App.Meet.find();
  }
});

App.GymsIndexRoute = Ember.Route.extend({
  model: function(params) {
    return App.Gym.find();
  }
});

App.GymRoute = Ember.Route.extend({
  model: function(params) {
    return App.Gym.find(params.gym_id);
  }
});

App.GymnastsNewRoute = Ember.Route.extend({
  model: function(params) {
    return App.Gymnast.createRecord({gym: this.modelFor("gym")});
  }
});

App.GymnastsIndexRoute = Ember.Route.extend({
  model: function(params) {
    return App.Gymnast.find();
  }
});