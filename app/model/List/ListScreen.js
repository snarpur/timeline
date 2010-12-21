sn.declare('List.ListScreen',{
    options:{
        viewClass: 'list-view'
    },
    init: function(options, elem){
        $.extend(this,options);
        $.extend(this, sn.Screen);
        this.elem = elem;
        var tmpl = $.tmpl('listScreen', this.data);
        tmpl.appendTo("#canvas");
        this.setScreenClass();
        this.open();
    },
});
$.plugin('listScreen', sn.List.ListScreen);