App.GymnastsIndexController = Ember.ArrayController.extend();

App.GymnastsNewController = Ember.ObjectController.extend({
  createGymnast: function() {
    this.content.on("didCreate", this, this.handleDidCreate);
    App.store.commit();
  },
  handleDidCreate: function() {
    this.transitionToRoute("gym", this.get("gym"));
  }
});