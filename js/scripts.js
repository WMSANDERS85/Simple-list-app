function newItem() {

    // Adding a new item to the list of items:
    let list = $('#list');
    let li = $('<li></li>');
    let userInput = $('#input');
    let inputValue = userInput.val();
    li.append(inputValue);

    if(!inputValue){
        alert('Your must write something');
    }else{
        list.append(li);

        userInput.val('')
             
    }

    // Crossing out an item from the list
    function crossOut(){
        li.addClass('strike');
    }
    // Event Listener for the crossOut function.
    li.on('click',crossOut);
        
}