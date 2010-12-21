sn.declare('Timeline.PeriodItem',
{
    options:{
        spacing:3
    },
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
        this._widthCss();
        this._colorCss();
        this._heightCss();
    },
    _getWidth: function(){
        var startPos = this._getDatePosition(this.data.start),
            endPos = this._getDatePosition(this.data.end),
            width = endPos - startPos;

        return width;
    },
    _widthCss:function(){
        return this.elem.css("width",this._getWidth()+"px");
    },
    _colorCss: function(){
        var range = this.elem.closest(".item_line").data("opacityFactor"),
            opacity = 1 / (_.indexOf(range,this.data.amount) + 1),
            bgOpacity = sn.Utils.Color.setSaturationAndOpacity(this.color, opacity);

       this.elem.css("background-color",bgOpacity);
    },
    _heightCss:function(){
        this.elem.css("height", (this.height - this.options.spacing)+"px")
    }
});
