  Template.liste.helpers({
    contact : function(){
      return  Contacts.find({owner: Meteor.userId()});
    }
  });

  Template.liste.events({
   
    "click .delete": function () {      
      Meteor.call("deleteContact", this._id);
    },
    "click .thisContact": function () {      
      Meteor.call("seeInfo", this._id);
    }
  });

  Template.user.events({
   
  
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
    event.target.mail.value = "";
    
    return false;
  }
  });

      // configuration account ui : pas de mail
  Accounts.ui.config({
    passwordSignupFields: "USERNAME_ONLY"
  });


