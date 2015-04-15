

if (Meteor.isClient) {
    Meteor.users.initEasySearch('username');

Meteor.subscribe("userData");
  // counter starts at 0
  Session.setDefault('counter', 0);

  Template.hello.helpers({
    counter: function () {
      return Session.get('counter');
    }
  });
/*
  Template.search.helpers({
    utilisateur: function () {
     return Meteor.users.find();
    }
  });
*/
  Template.hello.events({
    'click button': function () {
      // increment the counter when button is clicked
      Session.set('counter', Session.get('counter') + 1);
    }
  });



      // At the bottom of the client code
  Accounts.ui.config({
    passwordSignupFields: "USERNAME_ONLY"
  });
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });


  Meteor.users.initEasySearch('username');
}
