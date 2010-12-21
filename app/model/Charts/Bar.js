sn.declare("Chart.Bar", _o.extend(sn.Chart.Chart ,{
    
    init:function(elem){
        this.obj = $(elem).data("obj");
        this.data = this.obj.data;
        var max = this._getMax();
        var opt = {};
        opt.legend = {
            show:this._showLegend(), 
            location:'ne', 
            xoffset:10
        };
        opt.title = this.obj.getLineItemName() +" - "+ this.data.start;
        opt.seriesDefaults = {
            renderer: $.jqplot.BarRenderer, 
            rendererOptions:{barPadding: 8, barMargin: 20}
        };
        opt.series = this._legend();
        //opt.axesDefaults= { max: max + 5 };
        opt.axes = {
            xaxis:{
                renderer: $.jqplot.CategoryAxisRenderer,
                ticks: this._yLabels()
            }, 
            yaxis:{
                min: 0,
                ticks: this._yTicks()
            }
        };
        
        
        
        $.jqplot("bar-chart", _.values(this.data.chart.data), opt);       
       }

}));