App.Meet = DS.Model.extend({
  name:   DS.attr("string"),
  type:   DS.attr("string"),
  date:   DS.attr("string"),
  location: DS.attr("string"),
  gymnasts: DS.hasMany('App.Gymnast')
});

App.Meet.types = ["Boys", "Girls", "Mens", "Womens"];
