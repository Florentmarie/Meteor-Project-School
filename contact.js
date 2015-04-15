Contacts = new Mongo.Collection("contacts");

if (Meteor.isClient) {
    Meteor.users.initEasySearch('username');
    Meteor.subscribe("contacts");
    Meteor.subscribe("userData");



  Template.ajout.events({

   "submit .new-contact": function (event) {
  

    var nom = event.target.nom.value;
    var mail = event.target.nom.value;

    // appelle la method addcontact (regarde plus bas)
    Meteor.call("addContacts", nom, mail);
    // Clear form
    event.target.nom.value = "";
    event.target.mail.value = "";
    alert('contact ajouté');
    
    return false;
  }
  });



      // configuration account ui : pas de mail
  Accounts.ui.config({
    passwordSignupFields: "USERNAME_ONLY"
  });
}



Meteor.methods({
  addContacts: function (nom, mail) {
    // vérifie si l'user est connecté
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
