var selector = 'nav li';
var selector1 = 'footer li';
$(selector,selector1).on('click', function(){
    $(selector).removeClass('active');
    $(this).addClass('active');
});