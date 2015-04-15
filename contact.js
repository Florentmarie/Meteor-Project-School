Contacts = new Mongo.Collection("contacts");

if (Meteor.isClient) {
    Meteor.users.initEasySearch('username');

Meteor.subscribe("contacts");
Meteor.subscribe("userData");
  // counter starts at 0
  Session.setDefault('counter', 0);

  Template.ajout.helpers({

  });
/*
  Template.search.helpers({
    utilisateur: function () {
     return Meteor.users.find();
    }
  });
*/
  Template.ajout.events({
   "submit .new-contact": function (event) {
    // This function is called when the new task form is submitted

    var nom = event.target.nom.value;
    var mail = event.target.nom.value;

    Meteor.call("addContacts", nom, mail);
    // Clear form
    event.target.nom.value = "";
    event.target.mail.value = "";
    alert('contact ajouté');
    // Prevent default form submit
    return false;
  }
  });



      // At the bottom of the client code
  Accounts.ui.config({
    passwordSignupFields: "USERNAME_ONLY"
  });
}



Meteor.methods({
  addContacts: function (nom, mail) {
    // Make sure the user is logged in before inserting a task
    if (! Meteor.userId()) {
      throw new Meteor.Error("not-authorized");
    }

    Contacts.insert({
      nom: nom,
      mail: mail,
      createdAt: new Date(),
      owner: Meteor.userId(),
      username: Meteor.user().username
    });
  }
})

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });


  Meteor.users.initEasySearch('username');
}
