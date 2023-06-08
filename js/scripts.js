let toDoList = (function ($) {
  //define variables
  let list = $("#list");
  let button = $("#button");
  let formInput = "";
  let li = $("li");

  //add event listener to get input
  $("#input").change(function () {
    formInput = $("#input").val();
  });

  //add list items function
  button.click(function () {
    let li = '';

    if (!formInput) {
      alert("You must write something!");
    } else {
      let li = $("<li></li>").text(formInput).addClass("list-item");
      list.append(li);
      addCrossOutButton(li);
    }
  });

  //create/append crossOutButton
  let deleteButton = $("<button></button>");

  function addCrossOutButton(listItem) {
    let crossOutButton = '';
    crossOutButton = $("<crossoutbutton></crossoutbutton>");
    crossOutButton.append(document.createTextNode("X"));
    listItem.append(crossOutButton);
  } 

  //delete li

  list.on("click", "crossoutbutton", function (event) {
    $(this).closest("li").addClass("delete");
  });

  //cross out item

  list.on("dblclick", "li", function (event) {
    $(this).toggleClass("strike");
  });

  //make list sortable 

  $('#list').sortable();

})(jQuery);
