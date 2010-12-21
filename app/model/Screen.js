sn.declare("Screen",{
    setScreenClass: function(){
        $(this.elem).addClass(this.options.viewClass);
    },
    close: function(){
        $(this.elem)
        .empty()
        .removeAttr('style')
        .removeClass(this.options.viewClass)
        .end();
     },
     open: function(){
         $(this.elem).css('display','block');
         $(this.elem).animate({opacity:1},'1000');
     }
});