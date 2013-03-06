App.Gym = DS.Model.extend({
  name:  DS.attr("string"),
  location: DS.attr("string"),
  gymnasts: DS.hasMany('App.Gymnast')
});