sn.declare("Timeline.Line",
{
  init: function(params) {
      $.extend(this,params);
      this._build();
  },
  _build: function() {
      this.elem = $.tmpl(this.view, this.data)
      .appendTo(this.container);
      this._setHeight();
      this._drawLineItems();
    },
    _drawLineItems: function(){
        var params = {canvas:this.canvas};
        params.container = this.elem;
        
        for(var i = 0; i < this.data.items.length; i++){
            params.data = this.data.items[i];
            params.color = sn.Utils.Color.get_color(this.data.items.length,i,this.data.items[i].name);
            params.height = this.canvas.spacingY / this.data.items.length;
            _o.create(sn.Timeline.ItemLine).init(params);
        }
    },
    _setStyles: function(){
        
    },
    _setHeight:function(){
        var p = this.elem.find("p:first");
        this.elem.css("height",this.canvas.spacingY+"px");
        p.css("height",this.canvas.spacingY-1 +"px");
        p.css("width",this.canvas.gutterRight+"px");
        p.css("line-height",this.canvas.spacingY+"px");
    }
})

