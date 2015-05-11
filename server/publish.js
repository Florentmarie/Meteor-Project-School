

Meteor.publish("contacts", function () {
      return Contacts.find({owner: this.userId});
});