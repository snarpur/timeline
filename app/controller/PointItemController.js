$("#canvas").delegate(".point.item","click",function(){
       var elem = $(this),
           popUp = $("#dialog-modal");
       popUp.dialog({
                  height: 400,
                  width: 650,
                  modal: true,
                  // dialogClass: 'chartViewer',
                  open: function(){
                      _o.create(sn.Widget.ChartViewer).init(popUp,elem);
                  }
              });
});

