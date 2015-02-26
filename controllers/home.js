var collectionNames = {O: "Organics", R: "Recycling", L: "Landfill", S: "Sharp Objects", H: "Hazardous", B: "Bulky Items", S1: "Goods Exchange Weekends", S2: "Paint & Reuse Center"}

if (Meteor.isClient) {
	Template.itemSearch.helpers({
    collectionNames: function () {
      return Session.get("collectionNames");
    },
    binName: function(bin) {
      return collectionNames[bin];
    }
  });


}