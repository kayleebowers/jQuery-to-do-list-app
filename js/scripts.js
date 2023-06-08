(function ($) {
    //define variables
    let list = $('#list');
    let button = $('#button');
    let formInput = '';

    //add event listener to get input 
    $('#input').change(function () {
        formInput = $('#input').val();
    })

    //add list items function
    function newItem() {
        let listItem = $('<li></li>').text(formInput).addClass('list-item');
        let crossOutButton = document.createTextNode('X');
        listItem.append(crossOutButton);
        list.append(listItem);
    }

    //make delete buttons
    // $('li').append(document.createTextNode('X'););

})(jQuery);