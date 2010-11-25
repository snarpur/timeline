sn.declare("Timeline.ItemLine",
{
      options:{
        padding:1  
          
      },
      init: function(params) {
          $.extend(this,params);
          this.type = this._getType()
          this._build();
          
      },

      _build: function(){
          this.elem = $.tmpl(this.view[this.type], this.data);
          this.elem.appendTo(this.container);
          this.elem.data("obj",this);
          this._setPosition();
          this._setHeight();
          this._drawItems();
          if(this.type == "period")
              this._setItemLabelColor();
      },
      _drawItems:function(){
          var params = {canvas:this.canvas},
              timelineObj;
          params.container = this.elem;
          params.itemDetailsContainer = this.canvas.itemDetailsContainer;

          this._setOpacityFactor(this.data.occurances)
          if(this.data.occurances){
              for(var i = 0; i < this.data.occurances.length; i++){
                  params.data = this.data.occurances[i];
                  params.itemName = this.data.name;
                  if(this.data.occurances[i].end){
                      params.color = this.color;
                      params.height = this.height;
                      timelineObj = _o.create(sn.Timeline.PeriodItem).init(params);
                  }
                  else{
                     timelineObj = _o.create(sn.Timeline.PointItem).init(params);
                  }
                   params.timelineObj = timelineObj;
                  _o.create(sn.Timeline.ItemDetail).init(params)
              }
          }
      },
      _getType:function(){
          var end =  _.detect(this.data.occurances,function(n){return n.end });
          return end ? "period": "point";
        },
      _setPosition:function(){
          this.elem.css("margin-left",this.canvas.gutterRight+"px");
      },
      _setHeight:function(){
          this.height = this.canvas.spacingY / $(this.container).tmplItem().data.items.length;
          this.elem.css("height",this.height+"px")
      },
      _setOpacityFactor:function(items){
          if(items[0].end){
              var range = _.map(items,function(d){return d.amount});
              var max = _.max(items,function(d){return d.amount});
              range.sort(function(a, b) {  
                  return b - a;  
              });
              this.elem.data("opacityFactor",range);
         }
      },
      _setItemLabelColor:function(){
          var bgValue = sn.Utils.Color.setBackgroundOpacity(this.color,0.3),
              height = this.elem.find(".item:last").height()
              label = this.elem.find("p");
        
          label.css("background",bgValue);
          label.css("height",height+"px");
          label.css("width",this.canvas.gutterRight+"px")
       
  
      }
});

