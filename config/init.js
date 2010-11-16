function snInit(){
    
   
    
    $.i18n.setLocale('is');
    $.plugin('timeline', sn.Timeline.Canvas);
    $('#canvas').timeline({data: timeline_data});
    $.plugin('iconizer', sn.Utils.Iconizer);
}