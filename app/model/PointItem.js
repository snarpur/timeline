sn.declare('Timeline.PointItem',
{
    init:function(params){
       $.extend(this,params);
       $.extend(this, sn.Timeline.Item);
       this._build();
       return this;
    },
    _build:function(){
        this.data.itemName = this.itemName;
        this.elem = $.tmpl(this.view, this.data);
        this.elem.appendTo(this.container);
        this.elem.data("obj",this);
        this._yCss();
        //this._drawIcon(); 
    },
    _drawIcon:function(){
        var params = {
            group:this.getLineName(),
            name:this.itemName,
            style:"medium_grey",
            elem:this.elem[0]
        };

        decoration.drawIcon(params);
    }
    
});
