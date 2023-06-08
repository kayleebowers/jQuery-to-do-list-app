(function ($) {
  //define variables
  let list = $("#list");
  let button = $("#button");
  let formInput = "";

  //add event listener to get input
  $("#input").change(function () {
    formInput = $("#input").val();
  });

  //add list items function
  button.click(function () {
    if (!formInput) {
      alert("You must write something!");
    } else {
      let listItem = $("<li></li>").text(formInput).addClass("list-item");
      list.append(listItem);

      //add crossOutButton to all li 
      let crossOutButton = $("<crossOutButton></crossOutButton");
      crossOutButton.append(document.createTextNode("X"));
      listItem.append(crossOutButton);
    }
  });

  let item = $(".list-item");

  function crossOut() {
    item.toggleClass('strike');
  }

  item.on("dblclick", function () { 
    crossOut();
  })

  $('#list').sortable();

})(jQuery);
