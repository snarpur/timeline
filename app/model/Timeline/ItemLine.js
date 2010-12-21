sn.declare("Timeline.ItemLine",
{
      options:{
        spacing:2  
          
      },
      init: function(params) {
          $.extend(this,params);
          this.type = this._getType();
          this._build();

          
      },    
      _build: function(){
          this.elem = $.tmpl(this.view[this.type], this.data);
          this.elem.appendTo(this.container);
          this.elem.data("obj",this);
          this._setHeight();
          this._setWidth();
          this._setSpacing();
          this._drawItems();
          // if(this.type == "period")
          //     this._setItemLabelHeight();
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
      _setHeight:function(){
          var length = $(this.container).tmplItem().data.items.length,
              spacings = (length + 1) * this.options.spacing;

          this.height = (this.canvas.spacingY - spacings) / length;  
          this.elem.css("height",this.height+"px");
      },
      _setWidth:function(){
          var width = this.canvas.spacingX * this.canvas.time;
          this.elem.css('width',(width)-2+"px");
      },
      _setSpacing:function(){
          this.elem.css("margin-top",this.options.spacing+"px"); 
          this.elem.css("margin-left",2+"px"); 
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
      _setItemLabelHeight:function(){
          var bgValue = sn.Utils.Color.setBackgroundOpacity(this.color,0.3),
              height = this.elem.find(".item:last").height()
              label = this.elem.find("p");
        
          label.css("height",height+"px");
      }
});

