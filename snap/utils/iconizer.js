sn.declare("Utils.Iconizer",
{
    init:function(options,elem){

        var icon_path, paper, icon;
        console.log(options)
        if(decoration.icons[options.group][options.name]){
            icon_path = decoration.icons[options.group][options.name]
        }
        else{
            console.log(options.group)
            icon_path = decoration.icons[options.group]
        }
        //console.log(icon_path)
        paper = Raphael(options.elem,32,32);
        icon = paper.path(icon_path);
        icon.attr(decoration.iconStyles[options.style]);  
    }
});
$.plugin('iconizer', sn.Utils.Iconizer);
