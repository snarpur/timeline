sn.declare("Chart.Line.hsq_r",{
    
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
      
      _legend: function(){
         return _.map(this.data.chart.bar_labels,function(i){
             return {label: _.capitalize($.i18n(i))}
         });
      },
      
      _writeTitle:function(){
          var occurances =  this.obj.getLineItemData(),
              from = _.first(occurances).start,
              to = _.first(occurances).start,
              title = this.obj.getLineItemName();
            
         return title +": "+from+" - "+to; 
      }
    
});