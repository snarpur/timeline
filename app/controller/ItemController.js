$("body").delegate(".line .item","mouseover",function(){
    $(this).data("detailObj").elem.addClass("hover");
});
$("body").delegate(".line .item","mouseout",function(){
    $(this).data("detailObj").elem.removeClass("hover");
});