//Routing
Router.route('/', function () {
  this.render('home');
  $(".navbar-nav").children().removeClass("active");
  $("#home").addClass("active");
});

Router.route('/admin', function () {
  this.render('admin');
  $(".navbar-nav").children().removeClass("active");
  $("#admin").addClass("active");
});

Router.route('/info', function () {
  this.render('info');
  $(".navbar-nav").children().removeClass("active");
  $("#info").addClass("active");
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





AccountsTemplates.configure({
    forbidClientAccountCreation: false,
    sendVerificationEmail: true,
    enforceEmailVerification: true,
    continuousValidation: true,
    positiveValidation: true,

    // texts: {
    //     errors: {
    //         mustBeLoggedIn: "error.accounts.Must be logged in",
    //         pwdMismatch: "error.pwdsDontMatch",
    //         restrictCreationByEmailDomain:'gmail.com',
    //     }
    // }
});

Accounts.config({restrictCreationByEmailDomain:'gmail.com'});







