(function ($) {
  //define variables
  let list = $("#list");
  let button = $("#button");
  let formInput = "";
  let li = $("<li></li>");

  //add event listener to get input
  $("#input").change(function () {
    formInput = $("#input").val();
  });

  //add list items function
  button.click(function () {
    if (!formInput) {
      alert("You must write something!");
    } else {
        let li = $("<li></li>");
      let listItem = li.text(formInput).addClass("list-item");
      list.append(listItem);
    }
  });

  function crossOut() {
    li.toggleClass("strike");
  }

  li.on("dblclick", crossOut());
  
  //add crossOutButton to all li 
  let crossOutButton = $("<crossOutButton></crossOutButton");
  crossOutButton.append(document.createTextNode("X"));
  li.append(crossOutButton);

  $('#list').sortable();

  return {
    crossOut
  }
})(jQuery);
