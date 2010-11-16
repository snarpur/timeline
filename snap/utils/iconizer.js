sn.declare("Utils.Iconizer",{
    init:function(options,element){
        if(_.size(options) == 0)
            
        var icon_path = decoration.icons[params.group][params.name],
            paper = Raphael(params.elem),
            icon = paper.path(icon_path);
       icon.attr(decoration.iconStyles[params.style]);  
    }
    
});