
// common s'execute coté client/server
Meteor.methods({
  addContacts: function (nom, prenom, tel, adress, mail) {
    // vérifie si l'user est connecté
    if (! Meteor.userId()) {
      throw new Meteor.Error("not-authorized");
    }

    Contacts.insert({
      nom: nom,
      prenom: prenom,
      tel: tel,
      adress: adress,
      mail: mail,
      createdAt: new Date(),
      owner: Meteor.userId(),
      username: Meteor.user().username
    });
  },  
  modifContacts: function (c_id, nom, prenom, tel, adress, mail) {
    // vérifie si l'user est connecté
    if (! Meteor.userId()) {
      throw new Meteor.Error("not-authorized");
    }
    /*
Tasks.update(taskId, { $set: { checked: setChecked} });*/
    Contacts.update(c_id, 
        { $set : 
          {
          nom: nom,
          prenom: prenom,
          tel: tel,
          adress: adress,
          mail: mail
          }
      });
  },
  deleteContact: function (contactId) {
    Contacts.remove(contactId);
    $(".modal-backdrop").remove();
  },
  seeInfo: function (thisId) {
    return  Contacts.findOne({_id: thisId});
  },
  update: function () {
    return  update = true;
  },  
  endup: function () {
    return  update = false;
  }

})