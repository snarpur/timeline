$("body").delegate(".toggler","click", function(){
   var current = $(this).closest(".chart-type");
   var visible = current.next(".chart-type").size() == 0 ? current.prevAll(".chart-type:first") : current.next(".chart-type");

   current.fadeOut("fast",function(){
        visible.fadeIn();
   });
   
});

