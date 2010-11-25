sn.declare("Widget.ChartViewer",{
    
    init: function(container,elem){
        this.itemName = elem.data('obj').itemName;
        this.charts = sn.scalesConfig[this.itemName].charts;
        this.tmpl = $.tmpl(this.view, this.charts);
        this.tmpl.appendTo(container);
        
        _.each(this.charts,function(i){
            _o.create(sn.Chart[_.capitalize(i)]).init(elem);
        });

        this.tmpl.slice(1).hide();   
        this._createIcon();

    },
    _createIcon:function(){
        if(this.charts.length < 2)
            return;
        var icons = this.tmpl.find(".icon"),
            that = this;
        
        $.each(icons,function(i){
            var switchIcon = i == icons.size() - 1 ? 0 : i+1;
            var opt = {
                group:'charts',
                name:that.charts[switchIcon],
                style:'medium_green',
                elem:this
            };
            $(this).iconizer(opt);
        });
    }
});