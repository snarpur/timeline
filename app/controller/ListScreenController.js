$("body").delegate(".listview-group h2","click",function(){
  $(this).next().slideToggle('slow');
});
