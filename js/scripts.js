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
    let deleteButton = '';
    crossOutButton = $("<crossOutButton></crossOutButton>");
    deleteButton = $("<button></button>");
    crossOutButton.append(document.createTextNode("X"));
    deleteButton.addClass("deleteButton");
    deleteButton.append(crossOutButton);
    listItem.append(deleteButton);
  } 

  //delete li

  function deleteItem() {
    $("li").addClass("delete");
  }

  $("crossOutButton").click(function () {
    $("li").addClass("delete");
  });
  $("li > button").addClass("cool");


  function crossOut() {
    li.toggleClass("strike");
  }

  li.on("dblclick", crossOut());

  $('#list').sortable();

})(jQuery);
