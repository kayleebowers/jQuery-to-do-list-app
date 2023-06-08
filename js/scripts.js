(function ($) {
    //define variables
    let list = $('#list');
    let button = $('#button');
    let formInput = '';

    //add event listener to get input 
    $('#input').change(function () {
        formInput = $('#input').val();
    })

    //create cross out button
    

    //add list items function
    button.click(function () {
        if (!formInput) {
            alert("You must write something!");
        } else {
            let listItem = $('<li></li>').text(formInput).addClass('list-item');
            list.append(listItem);
            let crossOutButton = $('<crossOutButton></crossOutButton');
            crossOutButton.append(document.createTextNode('X'));
            listItem.append(crossOutButton);
        }
    })

    //make delete buttons
    // $('li').append(document.createTextNode('X'););

})(jQuery);