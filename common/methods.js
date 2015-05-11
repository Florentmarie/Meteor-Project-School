
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
  deleteContact: function (contactId) {
    Contacts.remove(contactId);
    $(".modal-backdrop").remove();
  },
  seeInfo: function (thisId) {
    return  Contacts.findOne({_id: thisId});
  }

})