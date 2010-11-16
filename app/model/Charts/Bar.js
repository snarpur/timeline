sn.declare("Chart.Bar",{

    init:function(elem){
        this.obj = $(elem).data("obj");
        this.data = this.obj.data;
        var max = this._getMax();

        $.jqplot("barChart", _.values(this.data.chart.data), {
            legend:{show:true, location:'ne', xoffset:0},
            title: this.obj.getLineItemName() +" - "+ this.data.start,
            seriesDefaults:{
                renderer: $.jqplot.BarRenderer, 
                rendererOptions:{ barPadding: 8, barMargin: 20}
            },
            series: this._dataLabels(),
            axesDefaults: { max: max + 5 },
            axes:{
                xaxis:{
                    renderer: $.jqplot.CategoryAxisRenderer,
                    ticks: this._barLabels()
                }, 
                yaxis:{
                  min: 0,
                  ticks: [0,2,4,6,8,10,12,14,16,18]
                 }
            }
        });
                
       },
       _getMax: function(){
           return _.max(_.flatten(_.map(this.data.chart.data,function(m){return m})));
       },
       _dataLabels: function(){
           var labels = _.map(this.data.chart.data_labels,function(v){
                return {label: _.capitalize(v)}
           });
           return labels
       },
       _barLabels: function(){
            var labels = _.map(this.data.chart.bar_labels,function(v){
                 return _.capitalize($.i18n(v));
              });
             return labels;
        }
});