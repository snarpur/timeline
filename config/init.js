function snInit(){
    
   
    
    $.i18n.setLocale('is');

    sn.activeViewObj = $("#canvas").timelineScreen({data: timeline_data}).data('obj');
    $.tmpl('infoPane').appendTo('.pane.info');
    $.tmpl('historyPane').appendTo('.pane.history');
    $('.iconize').iconizer();
    $( "#tml-body" ).sortable();
    $("input:checkbox, select").uniform();
    $('#add-new-item-date').datepicker();
    $('#add-new-item-txt').wysiwyg();
    $('#modal').resizable({ handles: 'w' });
    $('.tabs').tabs();

    
}