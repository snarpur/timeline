sn.declare("Timeline.ItemDetail",
{
    init:function(params){
        $.extend(this, params)
        var quarter = this._quarter(params.data.start),
            quarterContainer = params.itemDetailsContainer.children(".quarter:nth-child("+quarter+")"),
            divs = quarterContainer.children("div"),
            order = Date.parse(params.data.start).getDayOfYear(),
            that = this,
            tmpl, current, next, prev;

        params.data.lineName = this.timelineObj.getLineName();

        if(divs.size() == 0){
            tmpl = $.tmpl(this.view, params.data);
            tmpl.appendTo(quarterContainer);
        }
 
        divs.each(function(){
            current = $(this).data("order");                
            next = $(this).next().size() !== 0 ? $(this).next().data("order") : 367;

            if(current < order && order < next){
                tmpl = $.tmpl(that.view, params.data);
                tmpl.insertAfter(this);
                return false;
            }
            else if(current >= order){
                tmpl = $.tmpl(that.view, params.data);
                tmpl.insertBefore(this);
                return false;
            }
        });

        this.elem = tmpl;
        $(this.timelineObj.elem).data("detailObj",this)
        tmpl.data("order",Date.parse(params.data.start).getDayOfYear())
    },
    _quarter:function(date){
        var d = date.split("."),
            month = Number(d[1]),
            quarter = Math.ceil((month / 12) * 4);
        
        return quarter;     
    }


});