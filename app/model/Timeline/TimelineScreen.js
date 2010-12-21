sn.declare("Timeline.TimelineScreen",
{
      init: function(options, elem) {
            this.options = $.extend({},this.options,options);
            $.extend(this, sn.Screen);
            this.elem  = elem;
            this.$elem = $(elem);
            this.data = this.options.data;
            this.setScreenClass();
            this.$elem.data("obj",this);
            this._build();
            this.open();
      },
      options: {
            time: 12,
            spacingX: 70,
            spacingY: 80,
            gutterRight: 140,
            gutterLeft: 140,
            headerSize: 30,
            fadeIn: true,
            headerBodySpacing: 5,
            viewClass:'timeline-view',
            header: "#tml-header",
            body:"#tml-body"
      },
      _build: function(){
            this._drawHeader();
            this._drawVerticalDividers();
            this._drawItemDetails();
            this._drawLines();
            this._widthCss();
            this._itemDetailsDimensions();
            this._itemDetailsOpacity();
            this._drawItemMenu();
      },
      totalWidth: function(){
            return this.options.time * this.options.spacingX + this.options.gutterRight;
      },
      innerWidth:function(){
            return this.options.time * this.options.spacingX;
      },
      canvasHeight:function(){
          return this.options.headerSize + (_.size(this.data) * this.options.spacingY);
      },
      _widthCss:function(){
          var css = [{class: '#canvas, .canvas-size', css:[
                    {property:'width', value: this.totalWidth()}
            ]}];
            this._renderHeaderCss(css);
      },
      _drawHeader:function(){
          var header = $.tmpl("header",[1]),
              months = $.tmpl("dateHeader", Date.CultureInfo.abbreviatedMonthNames),
              bgPlaceholder = $.tmpl("bgPlaceholder", [1]),
              css = [];
        
        bgPlaceholder.prependTo(this.$elem); 
        header.prependTo(this.$elem); 
        months.appendTo(header);
    
        css.push({class: this.options.header ,css:[
                    {property:'padding-left', value: this.options.gutterRight},
                    {property:'margin-bottom', value: this.options.headerBodySpacing}
            ]});
        css.push({class: this.options.header+" .cell" ,css:[
                    {property:'height', value: this.options.headerSize},
                    {property:'width', value:this.options.spacingX}
            ]});
        css.push({class: ".bg-placeholder-header" ,css:[
                    {property:'height', value: this.options.headerSize+this.options.headerBodySpacing},
                    {property:'width', value:this.options.gutterRight}
            ]});
       css.push({class: ".bg-placeholder-shadow" ,css:[
                        {property:'height', value: this.canvasHeight()},
                        {property:'width', value: this.options.gutterRight}
                ]});        
        tmpl = $.tmpl("dimensionsCss", css);
        tmpl.appendTo("#css");

      },
      _itemDetailsDimensions:function(){
          var width = (this.options.spacingX * this.options.time) / 4,
              height = this._itemDetailColumnHeight(),
              css = [],
              tmpl;
          css.push({class: '.quarter', css:[
                            {property:'width', value: width}

                    ]});
          css.push({class: '.item-details',css:[
                            {property:'padding-left', value: this.options.gutterRight}
                    ]});
          css.push({class: 'a.view-details',css:[
                            {property:'left', value:0},
                            {property:'top', value: this.canvasHeight()}
                    ]});

          tmpl = $.tmpl("dimensionsCss", css);
          tmpl.appendTo("#css");
      },
      _itemDetailsOpacity:function(){
          var tmpl = $.tmpl("itemDetailsOpacity", this.data);
          tmpl.appendTo("#css");
      },
      _drawItemDetails:function(){
          var tmpl = $.tmpl("itemDetails",[1,2,3,4]),
              itemDetails = $.tmpl("itemDetail",[1]),
              quarterContainer;

          itemDetails.appendTo("#canvas");
          quarterContainer = itemDetails.find("div");
          this.options.itemDetailsContainer = quarterContainer;
          tmpl.appendTo(quarterContainer);

      },
      _itemDetailColumnHeight:function(){
          var divs = $(".quarter"), 
              max = 0,
              height, elem;

          divs.each(function(){
              height = $(this).innerHeight();
              if(height > max){
                  max = height;
              }
          });
          return max;    
      },
      _drawVerticalDividers:function(){
        var dividers = $.tmpl("verticalDividers", Date.CultureInfo),
            gutter = this.options.gutterRight,
            spacing =this.options.spacingX,       
            dividersCss = _.map(Date.CultureInfo.abbreviatedMonthNames,function(e,i){
                                     return {class:'.vertical-divider.m-'+i, css:[
                                                {property:'left', value:(i * spacing) +gutter}
                                            ]} 
                                }); 
            dividersCss.push({class:'.vertical-divider', css:[
                {property:'width', value:this.options.spacingX},
                {property:'top', value:this.options.headerSize},
                {property:'bottom', value:0}
            ]});
              
            $.tmpl("dimensionsCss",dividersCss).appendTo("#css");
            dividers.prependTo("#canvas");
      },
      _drawLines:function(item){
        var params = {canvas:this.options};
        params.container = $(this.options.body).size() == 0  ? $.tmpl('timeline',[1]) : $(this.options.body);
        params.container.insertAfter(this.options.header);
    
        if(item){
            params.data = _.select(this.data,function(k,v){ return k.name === item})[0];
            _o.create(sn.Timeline.Line).init(params);
        }
        else{
            for(var i = 0; i < this.data.length; i++){
              params.data = this.data[i];
              _o.create(sn.Timeline.Line).init(params);
            }
        }
    
      },
      _drawItemMenu:function(){
          var tmpl = $.tmpl('itemMenu', {items :this.data});

          tmpl.appendTo("#canvas");

      },
      _renderHeaderCss: function(css){
          var tmpl = $.tmpl("dimensionsCss", css);
          tmpl.appendTo("#css");
      }


});
$.plugin('timelineScreen', sn.Timeline.TimelineScreen);