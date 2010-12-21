$("body").delegate("a.view-details","click",function(){
    $(this).toggleClass(function() {
        if ($(this).is('.open')) {
            $(this).removeClass("open");
            $("#item-details div:first").slideUp();
            return 'closed';
        } 
        else{
            $(this).removeClass("closed");
            $("#item-details div:first").slideDown();
            return 'open';
        } 
    });
});

$("body").delegate("#item-menu span.icn-item-menu","click",function(){
    if($(this).parent('div.closed').is('.closed')){
        $(this).parent('div.closed')
        .addClass('open')
        .removeClass('closed')
        .end()
        .siblings('form')
        .fadeIn()
        .end();
    }
    else{
        $(this).parent('div.open')
        .addClass('closed')
        .removeClass('open')
        .end() 
        .siblings('form')
        .fadeOut()
        .end();
    }
});

$("body").delegate("#item-menu input","click",function(){
    var el = $(this),
        status = el.attr('checked'),
        target = el.attr('id');
   if(status === false){
       $(".line."+target+", .item-details. ."+target).remove();
   }
   else if($(".line."+target).size() === 0){
       sn.activeViewObj._drawLines(target)
   }     
});

$("body").delegate(".view-control span","click",function(){
    var current = $(this).attr('class').split('-')[0];
    sn.activeViewObj.close();
    if(current==='list')
        sn.activeViewOvj = $("#canvas").listScreen({data: timeline_data}).data('obj');
    else
        sn.activeViewOvj = $("#canvas").timelineScreen({data: timeline_data}).data('obj');
});


