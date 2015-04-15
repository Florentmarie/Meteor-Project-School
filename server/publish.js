


Meteor.publish("userData", function () {
      return Meteor.users.find();
});


Meteor.publish("contacts", function () {
      return Contacts.find();
});