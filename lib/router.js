
Router.configure({
	// attend le subscribe avant de commencer
  waitOn: function() {
    return [
    Meteor.users.initEasySearch('username'),
    Meteor.subscribe("contacts"),
    Meteor.subscribe("userData")

    ];
  }
});

Router.route('/', function () {
  this.render('Home')
});



Router.route('/user/:_id', function () {
   this.render('user', {
    data: function () {
    return	Contacts.findOne({_id: this.params._id});
    }
  });
});

