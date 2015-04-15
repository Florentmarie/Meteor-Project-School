Router.route('/', function () {
  this.render('Home');
});



Router.route('/users/:_id', function () {
    var user = Items.findOne({_id: this.params._id});
  this.render('user', {data: item});
});

