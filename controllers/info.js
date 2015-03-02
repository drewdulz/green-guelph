//Set this data to be reacitve then pull it into the front end and display it.
//We can have some data that does describes how recycling works and what it is recycled into.

var info = [
	{
		name: "Organics",
		notes: "Organic waste is picked up via curbside collection",
		anchor: "organic",
		image: "/organic.png",
		bgcolor: "#84D545"
	}, 
	{
		name: "Recycling",
		notes: "Recycling is picked up via curbside collection",
		anchor: "recycle",
		image: "/recycle.png",
		bgcolor: "#5777E9"
	},
	{
		name: "Landfill",
		notes: "Landfill waste is picked up via curbside collection",
		anchor: "landfill",
		image: "/waste.png",
		bgcolor: "#819099"
	},
	{
		name: "Sharp Objects",
		notes: "Sharp objects should be placed with landfill waste to be picked up via curbside collection",
		anchor: "sharp",
		image: "/sharp.png",
		bgcolor: "#FF3E6C"
	},
	{
		name: "Hazardous Waste",
		notes: "HHW Depot does NOT accept waste that is unidentified, radioactive, contains PCBs, ammunitions or explosives or classified as industrial, commercial or institutional.",
		anchor: "hazardous",
		image: "/hazard.png",
		bgcolor: "#FF581F"
	},
	{
		name: "Bulky Items",
		notes: "Purchase a ticket. Call Solid Waste Resources to schedule a pickup at 519-767-0598. Have the bulky item at the curb by 6:30 a.m. on the arranged day.",
		anchor: "bulky",
		image: "/bulky.png",
		bgcolor: "#F9DC2A"
	},
	{
		name: "Goods Exchange Weekends",
		notes: "Seasonal - take place twice yearly once in the spring (May 15-18, 2015) and once in the fall (September 4-7, 2015)",
		anchor: "exchange",
		image: "/exchange.png",
		bgcolor: "#00ABC5"
	},
	{
		name: "Paint & Reuse Center",
		notes: "Seasonal opening of the Paint + ReUse Centre, April 1-October 10, 2015",
		anchor: "paint",
		image: "/paint.png",
		bgcolor: "#A200CF"
	},
]

console.log(info);

if (Meteor.isClient) {
	Template.infoCategories.helpers({
    info: function () {
      return Session.get("info");

    },
  });

  Template.info.helpers({
    info: function () {
      return Session.get("info");
    },
  });

  Template.infoCategories.events({
    // 'click #reload': function () {
    // 	var id = $(this)attr('id'));
  		// alert(id);
    //   window.location.href=window.location.href;
    // },
  });

  Template.infoCategories.rendered = function(){
  	Session.set("info", info);
 
	};

	Template.info.rendered = function() {
		Session.set("info", info);
		var cw = $('.category').width();
		$('.category').css({'height':cw+'px'});
	}

}



