// INCOMPLETE LINE 22-25
sn.declare("Chart.Line.d_dtods",{
    
      _makeDataCoordinates: function() {
          var data = [],
              sum = [],
              check = [],
              occurances = this.obj.getLineItemData();

          _.each(occurances, function(i,c){
              check = [1,2,3,4]
              _.each(i.chart.data.result,function(e,j){

                    sum[e-1] = sum[e-1] ?  sum[e-1]: [];
                    sum[e-1][c] = sum[e-1][c] ? sum[e-1][c]: 0;
                    sum[e-1][c] += 1;
                    if(check[e-1] != ""){
                        check[e-1] = "";
                    }
                     
              });
              _.each(check, function(v,p){
                  if(v != "")
                    sum[v-1][c] = 0;
              })
              console.log(sum.toString())
             // data.push(sum);
 
          });
          return sum;
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