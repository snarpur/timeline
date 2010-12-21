$("body").delegate(".scales .point.item","click",function(){
    var elem = $(this),
        itemName = elem.data("obj").getLineItemName(),
        popUp = $("#dialog-modal");
    popUp.dialog({
           width: sn.ui.config.charts[itemName].width+"px",
           modal: true,
           dialogClass: 'chartViewer '+itemName,
           close: function(){popUp.empty();},
           open: function(){
               _o.create(sn.Widget.ChartViewer).init(popUp,elem);
           }
       });
});

