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

var collectionNames = {O: "Organics", R: "Recycling", L: "Landfill", S: "Sharp Objects", H: "Hazardous", B: "Bulky Items", S1: "Goods Exchange Weekends", S2: "Paint & Reuse Center"}

if (Meteor.isClient) {
  // This code only runs on the client


  Template.itemSearch.helpers({
    collectionNames: function () {
      return Session.get("collectionNames");
    },
    binName: function(bin) {
      return collectionNames[bin];
    }
  });

  Template.login.events({
    'submit #login-form' : function(e, t){
      e.preventDefault();
      // retrieve the input field values
      var email = t.find('#login-email').value;
      var password = t.find('#login-password').value;

      var trimInput = function(val) {
        return val.replace(/^\s*|\s*$/g, "");
      }
      email = trimInput(email);
      password = trimInput(password);

      Meteor.loginWithPassword(email, password, function(err){
        if (err) {
          alert("login failed, please try again");
          
        }
        else {
          // The user has been logged in.
          
        }
      });
        return false; 
    }
  });

  Template.accountOptions.events({
    'click #logout' : function() {
      Meteor.logout();
    }
  });




  // CSV Upload function
  Template.upload.events({
    "change #files": function (e) {
      var files = e.target.files || e.dataTransfer.files;
      for (var i = 0, file; file = files[i]; i++) {
        if (file.type.indexOf("text") == 0) {
          var reader = new FileReader();
          reader.onloadend = function (e) {
            var text = e.target.result;
            console.log(text)
            var all = $.csv.toObjects(text);
            console.log(all)
            _.each(all, function (entry) {
              WasteItems.insert(entry);
              // console.log(entry);
            });
          }
          reader.readAsText(file);
        }
      }
    }
  });

  // Item input
  Template.input.events({
    "click #submit": function() {
      var item = {
        item_name: $('#item_name').val(),
        collection_code: $('#collection_code').val(),
        item_code: $('#item_code').val(),
        item_collection_notes: $('#collection_notes').val(),
        material_code: $('#material_code').val()
      }
      console.log(item);
      WasteItems.insert(item);

    }
  });

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











