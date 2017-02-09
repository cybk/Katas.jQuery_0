$(function(){
    $('#add').on('click', function(){
        var element = $('<div class="element"></div>');
        element.on('click', function(e){
           $('.selected').not(this).removeClass('selected');
           $(this).toggleClass('selected');
        });
        
        $('.mainContainer').append(element);
    });
    
    $('#remove').on('click', function(){
        $('.selected').remove();
    })

    $('#colorOption').on('change', function(){
        $('.selected').css("background-color", $(this).val().toLocaleLowerCase());
    })
});
