App.GymsNewController = Ember.Controller.extend({
  createGym: function() {
    var name = this.get("name"),
        location = this.get("location");
    
    App.Gym.createRecord({
      name: name,
      location: location
    }).on("didCreate", this, this.gymCreated);

    App.store.commit();
  },

  gymCreated: function(gym) {
    this.transitionToRoute("gym", gym);
  }
});