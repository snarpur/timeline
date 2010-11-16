sn.declare("Widget.ChartViewer",{
    
    init: function(container,elem){
        this.charts = ["bar","line"]
        this.tmpl = $.tmpl(this.view, this.charts)
        this.tmpl.appendTo(container);
        this.tmpl.last(".chartType").hide();
        //this._prepareIcon();
        _o.create(sn.Chart.Line).init(elem);
        _o.create(sn.Chart.Bar).init(elem);
    },
    _prepareIcon:function(){
        
        var icons = this.tmpl.find(".icon"),
            that = this,
            params = [];
         $.each(icons,function(e,i){
             console.log(e,i)
                // var p = {
                //                  group:'charts',
                //                  name:that.charts[i],
                //                  style:'medium_green',
                //                  elem:e
                //              };
        });
        
    }
 
});