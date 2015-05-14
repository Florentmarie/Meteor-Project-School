  Session.setDefault('update', false);
  Template.liste.helpers({
    contact : function(){
      return  Contacts.find({owner: Meteor.userId()});
    }
  });

  Template.contacts.helpers({
    update : function(){
       return Session.get('update');
    }
  });

  Template.liste.events({
   
    "click .delete": function () {      
      Meteor.call("deleteContact", this._id);
    },
    "click .thisContact": function () {      
      Meteor.call("seeInfo", this._id);
      Session.set('update', false);
    }
  });

 Template.contacts.events({
    "click #update": function () {      
     Session.set('update', true);
    },    
    "click #endUpdate": function () {      
     Session.set('update', false);
    },

    "submit .modif": function (event) {
  
    var nom = event.target.nom.value;
    var prenom = event.target.prenom.value;
    var tel = event.target.tel.value;
    var adress = event.target.adress.value;
    var mail = event.target.mail.value;
    var c_id = event.target.id;
    
    Meteor.call("modifContacts", c_id, nom, prenom, tel, adress, mail);
    // fin de l'etat update
    Session.set('update', false);
    return false;
  }
  });
  Template.ajout.events({

  "submit .new-contact": function (event) {
  

    var nom = event.target.nom.value;
    var prenom = event.target.prenom.value;
    var tel = event.target.tel.value;
    var adress = event.target.adress.value;
    var mail = event.target.mail.value;

    // appelle la method addcontact (regarde plus bas)
    Meteor.call("addContacts", nom, prenom, tel, adress, mail);
    // Clear form
    event.target.nom.value = "";
    event.target.prenom.value = "";
    event.target.tel.value = "";
    event.target.adress.value = "";
    event.target.mail.value = "";
  
    return false;
  }
  });


  Template.formodif.events({


  });
      // configuration account ui : pas de mail
  Accounts.ui.config({
    passwordSignupFields: "USERNAME_ONLY"
  });
