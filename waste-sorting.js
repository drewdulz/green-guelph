//Routing
Router.route('/', function () {
  this.render('home');
});

Router.route('/admin', function () {
  this.render('admin');
});

//DB initialization
WasteItems = new Mongo.Collection("wasteitem");

if (Meteor.isClient) {
  // This code only runs on the client
  Template.home.helpers({
    wasteItems: function () {
      return WasteItems.find({});
    }
  });
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
