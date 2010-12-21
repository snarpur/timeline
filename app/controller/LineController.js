// $("body").delegate(".line p .icon","mouseover",function(){
//     var name = $(this).closest(".line").tmplItem().data.name;
//     $("#canvas").addClass("focus focus-"+name);
// 
// });
// $("body").delegate(".line p .icon","mouseout",function(){
//     var canvas = $("#canvas"),
//         reg = /focus-[a-z]*/,
//         itemClass = canvas.attr("class").match(reg)[0];
//      
//      canvas.removeClass("focus");
//      canvas.removeClass(itemClass);
//     
// });

$("body").delegate(".line .add-item","click",function(){
    var line = $(this).parents('.line'),
        itemName = line.tmplItem().data.name;
    $('#modal').fadeIn();
        $(this).effect('transfer',{ to: "#modal", className: "ui-effects-transfer" }, function(){
    });   
});