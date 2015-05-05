Contacts = new Mongo.Collection("contacts");

Informations = new Mongo.Collection("informations");

if (Meteor.isClient) {

  Template.liste.helpers({
    contact : function(){
      return  Contacts.find({owner: Meteor.userId()});
    }
  });


  Template.ajout.events({

   "submit .new-contact": function (event) {
  

    var nom = event.target.nom.value;
    var mail = event.target.mail.value;

    // appelle la method addcontact (regarde plus bas)
    Meteor.call("addContacts", nom, mail);
    // Clear form
    event.target.nom.value = "";
    event.target.mail.value = "";
    
    return false;
  }
  });

  //Template informations

  Template.info.events({

   "submit .add-info": function (event) {
  

    var prenom = event.target.prenom.value;
    var mail = event.target.mail.value;

    Meteor.call("addInformations", prenom, mail);

    event.target.prenom.value = "";
    event.target.mail.value = "";

    console.log(prenom);
    console.log(mail);
    
    return false;
  }
  });

  Template.info.helpers({
    info : function(){
      return  Informations.find({owner: Meteor.userId()});
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
  },
  addInformations: function (prenom, mail) {
    // vérifie si l'user est connecté
    if (! Meteor.userId()) {
      throw new Meteor.Error("not-authorized");
    }

    Informations.insert({
      prenom: prenom,
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


  
}
