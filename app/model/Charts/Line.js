sn.declare("Chart.Line",{
    
    init:function(elem){
        this.obj = $(elem).data("obj");
        this.data = this.obj.data;
        var coordinates = this._makeDataCoordinates()
            labels = this._writeLabels();

         $.jqplot('lineChart', coordinates, {
             legend:{show:true},
             series: labels,
             axes:{
                 xaxis:{
                     renderer:$.jqplot.CategoryAxisRenderer,
                     labelRenderer: $.jqplot.CanvasAxisLabelRenderer,
                     tickRenderer: $.jqplot.CanvasAxisTickRenderer
                 }, 
                 yaxis:{
                   min:0,
                   ticks:[0,2,4,6,8,10,12,14,16,18]
                  }
             }
           });
      },
      _makeDataCoordinates: function() {
          var data = [],
              occurances = this.obj.getLineItemData();
        
          _.each(occurances, function(i){
              _.each(i.chart.data.result,function(e,j){
                  data[j] = data[j] ? data[j] : [];
                  data[j].push([i.start,e]);
              });
          });
            
          return data;
      },
      _writeLabels: function() {
         return _.map(this.data.chart.bar_labels,function(i){
             return {label: _.capitalize($.i18n(i))}
         });
      }
});