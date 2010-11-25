$("body").delegate(".item_line:has(.period)","mouseover",function(){
    $(this).addClass("hover");
});
$("body").delegate(".item_line:has(.period)","mouseout",function(){
    $(this).removeClass("hover");
});