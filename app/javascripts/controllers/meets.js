App.MeetsIndexController = Ember.ArrayController.extend();
App.MeetsNewController = Ember.ObjectController.extend({
  createMeet: function() {
    App.store.commit();
  }
});