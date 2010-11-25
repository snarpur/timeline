$("body").delegate(".toggler","click", function(){
   var current = $(this).closest(".chartType");
   var visible = current.next(".chartType").size() == 0 ? current.prevAll(".chartType:first") : current.next(".chartType");

   current.fadeOut("fast",function(){
        visible.fadeIn();
   });
   
});

