sn.declare("Utils.Iconizer",
{
    init:function(options,elem){

        var metadata = $(elem).attr('class').split(' ')[1],
            icon_path, paper, icon;
           console.log(metadata)
          icon_path = decoration.icons['home'];
            
                  console.log(elem, icon_path);
                  paper = Raphael(elem,32,32);
                  icon = paper.path(icon_path).scale(0.4,0.4);
                  icon.attr(decoration.iconStyles['topnav']);  
        }
});
$.plugin('iconizer', sn.Utils.Iconizer);
