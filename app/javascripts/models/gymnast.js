App.Gymnast = DS.Model.extend({
  firstName:  DS.attr("string"),
  lastName:   DS.attr("string"),
  level:      DS.attr("number"),
  birthdate:  DS.attr("string"),
  gym:        DS.belongsTo("App.Gym"),

  fullName: function() {
    return this.get('firstName') + ' ' + this.get('lastName');
  }.property("firstName", "lastName")
});