function snInit(){
    
   
    
    $.i18n.setLocale('is');
    $.plugin('timeline', sn.Timeline.Canvas);
    sn.activeTimeline = $("#canvas");
    sn.activeTimeline.timeline({data: timeline_data});
}