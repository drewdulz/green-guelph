var collectionNames = {O: "Organics", R: "Recycling", L: "Landfill", S: "Sharp Objects", H: "Hazardous", B: "Bulky Items", S1: "Goods Exchange Weekends", S2: "Paint & Reuse Center"}
var icons = {O: "icon", R: "icon", L: "icon", S: "icon", H: "icon", B: "icon", S1: "icon", S2: "icon"}

if (Meteor.isClient) {
	Template.itemSearch.helpers({
    collectionNames: function () {
      return Session.get("collectionNames");
    },
    binName: function(bin) {
      return collectionNames[bin];
    },
    
  });

  Template.itemDetails.helpers({
    currentItemName: function() {
    	return Session.get("currentItemName");
    },
    currentItemBin: function() {
    	return Session.get("currentItemBin");
    },
    currentItemNotes: function() {
    	return Session.get("currentItemNotes");
    },
    iconHTML: function() {
    	return Session.get("iconHTML");
    }
    
  });

  Template.itemSearch.events({
  	'click #item': function () {
      showMore(this);
    }
  });


}

var showMore = function(item) {
	Session.set("currentItemName", item.item_name);
	Session.set("currentItemBin", binName(item.collection_code));
	Session.set("currentItemNotes", item.item_collection_notes);
	Session.set("iconHTML", getIconHTML(item.collection_code));

	$('#current-item-details').show();
}

var binName = function(bin) {
	return collectionNames[bin];
}

var getIconHTML = function(bin) {
	return icons[bin];
}