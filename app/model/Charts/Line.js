sn.declare("Chart.Line", _o.extend(sn.Chart.Chart ,{
    
    init:function(elem){
        this.obj = $(elem).data("obj");
        this.data = this.obj.data;
        var coordinates = this._makeDataCoordinates();
         $.jqplot('line-chart', coordinates, {
                               legend:{show:true},
                               title: this._writeTitle(),
                               series: this._legend(),
                               axes:{
                                   xaxis:{
                                       renderer:$.jqplot.CategoryAxisRenderer,
                                       labelRenderer: $.jqplot.CanvasAxisLabelRenderer,
                                       tickRenderer: $.jqplot.CanvasAxisTickRenderer
                                   }, 
                                   yaxis:{
                                     min:0,
                                     ticks:this._yTicks()
                                    }
                               }
                             });
      },
    _makeDataCoordinates: function() {
        if(this[this.data.itemName]){
            return this[this.data.itemName]._makeDataCoordinates.apply(this);
        }
        else{          
            var data = [],
                occurances = this.obj.getLineItemData();
                  
            _.each(occurances, function(i){
                _.each(i.chart.data.result,function(e,j){
                    data[j] = data[j] ? data[j] : [];
                    data[j].push([i.start,e]);
                });
            });
            
            return data;
        }
    },
    _legend: function() {
        if(this[this.data.itemName]){
            return this[this.data.itemName]._legend.apply(this);
         }
         else{ 
             return _.map(this.data.chart.bar_labels,function(i){
                 return {label: _.capitalize($.i18n(i))}
             });
         }
    },
    _writeTitle:function(){
        if(this[this.data.itemName]){
            return this[this.data.itemName]._writeTitle.apply(this);
        }
        else{ 
            var occurances =  this.obj.getLineItemData(),
                from = _.first(occurances).start,
                to = _.first(occurances).start,
                title = this.obj.getLineItemName();
            
           return title +": "+from+" - "+to;
         }
    }
}));