$("body").delegate("#modal .close","click",function(){
    $("#modal").fadeOut();
})

$("body").delegate("#leftnav span","click",function(){
    var current = $(this).attr('class').split(' ')[1],
        activePane = $('#content').find('.pane.'+current)
    $("#content").attr('class', current);
    $("#leftnav li").attr('class','');
    $(this).parent('li').addClass('selected');
    activePane.css('display','block');
    activePane.siblings().css('display','none');   
    // if(activePane.children().size() == 0){
    //       var tmpl =  $.tmpl(current+'Pane');
    //       tmpl.appendTo(activePane);
    //   }
});