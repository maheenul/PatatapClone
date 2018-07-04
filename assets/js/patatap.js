//Check whether jQuery loaded (Important for CDN)
if(jQuery){
    console.log('jQuery loaded')
}else{
    alert('jQuery failed to load');
}



/* Completed task */     // [include i notes]
$('ul').on('click','li',function(event){
    $(this).toggleClass('completed');
});



/* Delete task*/ //[include parent, remove, stopPropagation in notes]
$('ul').on('click','li span',function(event){
    event.stopPropagation();// prevent any bulbbing from parents
    $(this).parent().fadeOut(300,function(){
        $(this).remove();
    });
});



/* Add task*/
$('input').keypress(function(event){
    pressedKey=event.key;
    if ((pressedKey==='Enter')&($('input').val()!='')){
        // Grabbing value of input
        var toDoText = $('input').val();
        $('input').val('');
        // Appending the new toDo item to the list
        $('ul').append('<li><span><i class="fa fa-trash-alt"></i></span>'+ toDoText + '</li>');
    }
});


$('h1 i').on('click',function(){
    $('input').fadeToggle(300);
    $('h1 i').toggleClass('fa fa-minus');
    $('h1 i').toggleClass('fa fa-plus')
});

// Try to fix the input bug! : It accepts html tags as input
// It can mess up the to do list styling!

