(function ($) {
    //define variables
    let list = $('#list');
    let button = $('#button');
    let formInput = '';

    //add event listener to get input 
    $('#input').change(function () {
        formInput = $('#input').val();
    })
    
    //add list items when button is clicked
    button.click(function () {
        let listItem = $('<li></li>').text(formInput).addClass('list-item');
        list.append(listItem);
    })
    

})(jQuery);