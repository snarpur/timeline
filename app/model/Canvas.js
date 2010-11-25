sn.declare("Timeline.Canvas",
{
  init: function(options, elem) {
    this.options = $.extend({},this.options,options);
    this.elem  = elem;
    this.$elem = $(elem);
    this.data = this.options.data;
    this.$elem.data("obj",this);
    this._build();
  },
  options: 
  {
    time : 12,
    spacingX : 70,
    spacingY : 80,
    gutterRight : 140,
    gutterLeft: 140,
    headerSize : 30,
    header: "#tml_header",
    body:"#tml_timeline"
  },
  _build: function()
  {
    this._drawHeader();
    this._drawVerticalDividers();
    this._drawItemDetails();
    this._drawLines();
    this._widthCss();
    
    //this._itemDetailsCss();
  },
  totalWidth: function(){
      return this.options.time * this.options.spacingX + this.options.gutterRight + this.options.gutterLeft;
  },
  innerWidth:function(){
      return this.options.time * this.options.spacingX;
  },
  _widthCss:function(){
      this.$elem.css("width",this.totalWidth()+"px")
  },
  _drawHeader:function(){
      var header = $(this.options.header);
          months = $.tmpl("header", Date.CultureInfo.abbreviatedMonthNames)
      
    months.appendTo(this.options.header);
    months.css("width",this.options.spacingX)
    header.css("padding-left",this.options.gutterRight);
    header.css("height",this.options.headerSize);

  },
  _itemDetailsCss:function(){
      var width = (this.options.spacingX * this.options.time) / 4,
          css = [],
          tmpl;
      css.push({class: '.quarter', css:"width:"+(width-2)+"px;"});

      tmpl = $.tmpl("itemDetailsCss", css);
      tmpl.appendTo("#css");
  },
  _drawItemDetails:function(){
      var tmpl = $.tmpl("itemDetails",[1,2,3,4]),
          container = $("<div id='item-details'></div>");
      this.options.itemDetailsContainer = container;
      container.css("border-left-width",this.options.gutterRight+"px");
      container.appendTo("#canvas");
      tmpl.appendTo(container);
      this._itemDetailsCss();
      
      //_o.create(sn.Timeline.ItemDetail).init("mi hmi");
      
  },
  _drawVerticalDividers:function(){
    var dividers = $.tmpl("verticalDividers", Date.CultureInfo.abbreviatedMonthNames),
        that = this;
  
    dividers.appendTo(this.options.body);

    dividers.css("height",(this.data.length * this.options.spacingY)+"px");
    dividers.css("left",function(i){
        i++;
        return (i * that.options.spacingX) + that.options.gutterRight;
    });

  },
  _drawLines:function(){
    var params = {canvas:this.options};
    params.container = this.options.body;
   
    for(var i = 0; i < this.data.length; i++){
      params.data = this.data[i];
      _o.create(sn.Timeline.Line).init(params);
    }
    
  }
});
$.plugin('timeline', sn.Timeline.Canvas);