Router.route('/', function () {
  this.render('Home');
});



Router.route('/user/:_id', function () {
   this.render('user', {
    data: function () {
    return	Meteor.users.findOne({_id: this.params._id});
    }
  });
});

