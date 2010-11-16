Snap.declare("Utils.Proxy",
{
  get:function(data_item)
  {
    var output;

    if(this[data_item] != undefined)
      output = this[data_item].call(this, timeline_data.items[data_item]);
    else
      output = timeline_data.items[data_item];

    return output;
  },
  prepare: 
  {
    item:function(data_item)
    {
      if(this[data_item] != undefined)
         this[data_item].call(this, timeline_data.items[data_item]);
       else
         timeline_data.items[data_item];
    },
    medications: function(data)
    {
        Snap.Utils.Proxy._set_opacity_factor(data);
    }
  },
  
  _set_opacity_factor:function(data)
  {
    var factor = 0;
    _.each(data,function(e,i){
      max = _.max(e,function(d){return d.amount})
      min = _.min(e,function(d){return d.amount})
      Snap.Timeline.Styles.items.medications[i] = {opacity_factor: max.amount}
    });
  } 
});
