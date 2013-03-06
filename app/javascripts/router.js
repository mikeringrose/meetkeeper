App.Router.map(function() {
  this.route("sign_in");
  this.route("sign_up");
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

App.IndexRoute = Ember.Route.extend({
  setupController: function(controller) {
    controller.set('gymnasts', App.Gymnast.find());
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

App.GymsNewRoute = Ember.Route.extend();

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