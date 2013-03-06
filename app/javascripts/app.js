window.App = Ember.Application.create();

window.App.store = DS.Store.create({
  revision: 11,
  adapter: DS.LSAdapter.create()
});