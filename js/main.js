//cycle2 not working properly for styling custom pager, so try cycle first version for pleasure

$(function() {

//    $('.slideshow').cycle({
//        timeout:  0,
//        prev:    '.left',
//        next:    '.right',
//        pager:   '#custom-pager'
//    });



    });
(function ($) {
    $(document).ready(function () {
        $('#form1 form').validate();
        $('#form2 form').validate();
        $('#form3 form').validate();
        $('#form4 form').validate();
        $('#form5 form').validate();

    });
})(jQuery);


jQuery(function($){

   $("#phone").mask("+7 (999)999-9999");
   $("#phone2").mask("+7 (999)999-9999");
   $("#phone3").mask("+7 (999)999-9999");
   $("#phone4").mask("+7 (999)999-9999");

});

jQuery(function($){
    var $button = $('#myButton'),
        $text   = $('#myText'),
        visible = true;

    $button.click(function(){
        if ( visible ) {
            $text.slideUp('fast',function(){
                $text.addClass('hide')
                    .slideDown(0);
            });
        } else {
            $text.slideUp(0,function(){
                $text.removeClass('hide')
                    .slideDown('fast');
            });
        }
        visible = ! visible;
    });
});

jQuery(function($){
    var $button = $('#myButton3'),
        $text   = $('#myText3'),
        visible = false;

    $button.click(function(){
        if ( visible ) {
            $text.slideUp('fast',function(){
                $text.addClass('hide')
                    .slideDown(0);
            });
        } else {
            $text.slideUp(0,function(){
                $text.removeClass('hide')
                    .slideDown('fast');
            });
        }
        visible = ! visible;
    });
});
jQuery(function($){
    var $button = $('#myButton2'),
        $text   = $('#myText2'),
        visible = false;

    $button.click(function(){
        if ( visible ) {
            $text.slideUp('fast',function(){
                $text.addClass('hide')
                    .slideDown(0);
            });
        } else {
            $text.slideUp(0,function(){
                $text.removeClass('hide')
                    .slideDown('fast');
            });
        }
        visible = ! visible;
    });
});