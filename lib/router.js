
Router.configure({
	// attend le subscribe avant de commencer
  waitOn: function() {
    return [
    Contacts.initEasySearch('nom'),
    Meteor.subscribe("contacts")

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

