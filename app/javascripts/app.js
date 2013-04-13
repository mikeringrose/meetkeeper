window.App = Ember.Application.create();

window.App.ready = function() {
  window.fbAsyncInit = function() {
    FB.init({
      appId      : "533493470025162",
      channelUrl : '//localhost:8000/channel.html', // Channel File
      status     : true, // check login status
      cookie     : true, // enable cookies to allow the server to access the session
      xfbml      : true  // parse XFBML
    });


    FB.getLoginStatus(function(response) {
      if (response.status === "connected") {
      }
    });    
  };

  // Load the SDK Asynchronously
  (function(d){
     var js, id = 'facebook-jssdk', ref = d.getElementsByTagName('script')[0];
     if (d.getElementById(id)) {return;}
     js = d.createElement('script'); js.id = id; js.async = true;
     js.src = "//connect.facebook.net/en_US/all.js";
     ref.parentNode.insertBefore(js, ref);
   }(document));
};

window.App.store = DS.Store.create({
  revision: 11,
  adapter: DS.LSAdapter.create()
});