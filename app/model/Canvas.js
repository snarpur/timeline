sn.declare("Timeline.Canvas",
{
  init: function(options, elem) {
    this.options = $.extend({},this.options,options);
    this.elem  = elem;
    this.$elem = $(elem);
    this.data = this.options.data;
    
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
    body:"#tml_body"
  },
  _build: function()
  {
    this._drawHeader();
    this._drawVerticalDividers();
    this._drawLines();
    this._widthCss();
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
          months = $.tmpl(this.view, Date.CultureInfo.abbreviatedMonthNames)
      
    months.appendTo(this.options.header);
    months.css("width",this.options.spacingX)
    header.css("padding-left",this.options.gutterRight);
    header.css("height",this.options.headerSize);

  },
  _drawVerticalDividers:function(){
    var dividers = $.tmpl(sn.Timeline.Canvas.VerticalDividers, Date.CultureInfo.abbreviatedMonthNames),
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