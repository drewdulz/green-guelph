//Routing
Router.route('/', function () {
  this.render('home');
});

Router.route('/admin', function () {
  this.render('admin');
});

Router.route('/info', function () {
  this.render('info');
});

//DB initialization
WasteItems = new Mongo.Collection("wasteitems");
var items = WasteItems.find();
WasteItems.initEasySearch('item_name');

if (Meteor.isClient) {

  AccountsTemplates.configureRoute('signIn', {
      redirect: function(){
          var user = Meteor.user();
          if (user)
            Router.go('/admin');
      }
  });
  
}



if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}











