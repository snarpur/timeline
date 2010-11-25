sn.declare("Chart.Chart",{

    _yTicks:function(){
        var ticks = [],
            c = this.data.chart,
            reach = c.max_score + c.increment;
        
        for(var i = 0; i <= reach; i += c.increment){
            ticks.push(i);
        }
        return ticks;
    },
    _showLegend:function(){
        var show = this.data.chart.data_labels ? true: false;
        return show;
    },
    _getMax: function(){
        return _.max(_.flatten(_.map(this.data.chart.data,function(m){return m})));
    },
    _legend: function(){
        var labels; 
        if(this.data.chart.data_labels){
            labels = _.map(sn.scalesConfig[this.data.itemName].data_labels,function(v){
            return {label: _.capitalize(v)}
         });
       }
       return labels;
   },
   _yLabels: function(){
       var labels = _.map(sn.scalesConfig[this.data.itemName].bar_labels,function(v){
           return _.capitalize($.i18n(v));
       });
       return labels;
    }
    
});