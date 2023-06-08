let toDoList = (function ($) {
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

  function addCrossOutButton(listItem) {
    let crossOutButton = '';
    crossOutButton = $("<crossOutButton></crossOutButton");
    crossOutButton.append(document.createTextNode("X"));
    listItem.append(crossOutButton);
  } 

  //delete li
  
  function deleteItem() {
    $('crossOutButton').addClass('delete');
  }

  function crossOut() {
    li.toggleClass("strike");
  }

  li.on("dblclick", crossOut());

  $('#list').sortable();

  return {
    crossOut
  }
})(jQuery);
