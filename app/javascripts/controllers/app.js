App.ApplicationController = Ember.Controller.extend({
  signIn: function() {
    var self = this;

    FB.login(function(response) {
      if (response.authResponse) {
        self.setUser();
      } 
      else {
        console.log("user cancelled sign in.");
      }
    }); 
  },

  setUser: function() {
    var self = this;

    this.fetchUser(function(response) {
      self.set("user", response);
    });
  },

  fetchUser: function(callback) {
    FB.api('/me', callback);
  }
});
