//Set this data to be reacitve then pull it into the front end and display it.
//We can have some data that does describes how recycling works and what it is recycled into.

var info = [
	{
		name: "Dairy Products",
		notes: "",
		image: "/imagepath"
	}, 
	{
		name: "Food Scraps",
		notes: "",
		image: "/imagepath"
	},
	{
		name: "Fruits",
		notes: "",
		image: "/imagepath"
	},
	{
		name: "Grain Products",
		notes: "",
		image: "/imagepath"
	}
	//Continue on here
]

console.log(info);

if (Meteor.isClient) {
	Template.infoCategories.helpers({
    info: function () {
      return Session.get("info");
      // Session.set("info", info);

    },
  });

  Template.infoCategories.rendered = function(){
  	Session.set("info", info);
	};

}

