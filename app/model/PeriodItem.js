sn.declare('Timeline.PeriodItem',
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
        this._widthCss();
        this._colorCss();
        this._heightCss();
        this._spacingCss();
        //this._borderCss();
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

       this.elem.css("background",bgOpacity);
    },
    _borderCss:function(){
        var previous = this.elem.prev(".period").data("obj");
        if(previous)
            this.elem.css("border-left","1px "+previous.color+"solid")  
    },
    _heightCss:function(){
        this.elem.css("height", (this.height -2 )+"px")
    },
    _spacingCss:function(){
        this.elem.css("margin-bottom","2px")
    }

});
