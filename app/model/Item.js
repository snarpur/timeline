sn.declare("Timeline.Item",
{
    getLineItemName:function(){
        return $(this.container).tmplItem().data.name;
    },
    getLineName:function(){
        return this.elem.closest(".line").tmplItem().data.name;
    },
    getLineItemData: function(){
        return this.elem.closest(".item_line").tmplItem().data.occurances;
    },
    _getDatePosition:function(date){
        var day = Date.parse(date).getDayOfYear(),
            width = this.canvas.spacingX * this.canvas.time,
            pos = Math.ceil((width / 365) * day);
       
       return pos;
   },
   _yCss:function(){
       this.elem.css("left",this._getDatePosition(this.data.start)+"px");
   }
});

