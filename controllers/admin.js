if (Meteor.isClient) {

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
          alert("CSV Uploaded");
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

  Template.accountOptions.events({
    'click #logout' : function() {
      Meteor.logout();
    }
  });

  Template.removeItem.events({
    'click #remove': function () {
      WasteItems.remove(this._id);
    }
  });


}

