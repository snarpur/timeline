sn.Timeline.PointItem = _o.create(sn.Timeline.Item,
{
    init:function(params){
        params.view = this.view;
        this.uber.init(params)
        this.elem = this.uber.elem;
        this._build();
    },
    _build:function(){
        this._drawIcon();
        
    },
    _drawIcon:function(){
        var params = {
            group:this.getLineName(),
            name:this.getLineItemName(),
            style:"medium_grey",
            elem:this.elem[0]
        };
        decoration.drawIcon(params);
    }
    
});
