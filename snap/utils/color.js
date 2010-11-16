sn.declare("Utils.Color",
{
  get_color: function(total,pos,str)
  {
    var codes = []
    codes.push(this._string_code_sum(str));
    codes.push(codes[0] % 7)
    codes.push(str.charCodeAt(0) % 7);
    var hue = (360 / total) * pos;
    var hsv_arr = [hue,"",""];
    var ceil = [360,100,100];
    var floor = [0,99,89]
    var next_fixed_color = "";
    for(var i = 1 ; i <= 2; i++ )
    {
      hsv_arr[i] = this._generate_number(codes[i],ceil[i],floor[i]);
    }
    var rgb = this._hsv_to_rgb(hsv_arr[0],hsv_arr[1],hsv_arr[2])
    
   return "rgb("+rgb.join(",")+")";
  },
  _string_code_sum: function(str)
  {
    var total = 0;
    _.each(str.split(""),function(s,i){
      var code = str.charCodeAt(i);
      total += code;
    });
      return total 
  },
  _generate_number: function(num,ceil,floor)
  {
        num = (num + 1 )* Math.PI;
        num =  Math.sqrt(num);
        var decimals = num.toString().split(".")[1];
        var decimals_count = decimals.match(/^0*/)[0].length
        var hue = Math.round((Math.pow(10, decimals_count) * Number("0."+decimals)) * ceil);

        if(hue < floor)
          hue = (floor - hue) + floor;

        return hue;
  },
  _set_high_color: function(num)
  {
    var value = 180;
    var factor = num % 5;
    rgb = factor * 15 + 180;
    return rgb;
  },
  _set_low_color: function(num)
   {
     var factor = num % 5;
     rgb = factor * 5;
     return rgb;
   },
   setBackgroundOpacity:function(color,opacity)
   {
     var reg = /\d*/g,
         values = _.compact(color.match(reg));
     values.push(opacity);

     return "rgba("+values.toString()+")";
   },
   setSaturation:function(){
       var reg = /\d*/g,
              rgb = _.compact(color.match(reg)),
              hsv = this.rgbToHsv(rgb[0],rgb[1],rgb[2]);

          hsv[1] = Math.round(strength * 10) /10;
          rgb = this.hsvToRgb(hsv[0],hsv[1],hsv[2]);
          return "rgb("+rgb.toString()+")";
         
   },
   setSaturationAndOpacity: function(color,strength){
       var reg = /\d*/g,
           rgb = _.compact(color.match(reg)),
           hsv = this.rgbToHsv(rgb[0],rgb[1],rgb[2]);
       
       hsv[1] = Math.round(strength * 10) /10;
       rgb = this.hsvToRgb(hsv[0],hsv[1],hsv[2]);
       rgba = _.map(rgb,function(i){return Math.round(i)})
       rgba.push(strength);
       return "rgba("+rgba.toString()+")";
   },
   /**
    * HSV to RGB color conversion
    *
    * H runs from 0 to 360 degrees
    * S and V run from 0 to 100
    * 
    * Ported from the excellent java algorithm by Eugene Vishnevsky at:
    * http://www.cs.rit.edu/~ncs/color/t_convert.html
    */
   _hsv_to_rgb: function(h, s, v) {
   	var r, g, b;
   	var i;
   	var f, p, q, t;

   	// Make sure our arguments stay in-range
   	h = Math.max(0, Math.min(360, h));
   	s = Math.max(0, Math.min(100, s));
   	v = Math.max(0, Math.min(100, v));

   	// We accept saturation and value arguments from 0 to 100 because that's
   	// how Photoshop represents those values. Internally, however, the
   	// saturation and value are calculated from a range of 0 to 1. We make
   	// That conversion here.
   	s /= 100;
   	v /= 100;

   	if(s == 0) {
   		// Achromatic (grey)
   		r = g = b = v;
   		return [Math.round(r * 255), Math.round(g * 255), Math.round(b * 255)];
   	}

   	h /= 60; // sector 0 to 5
   	i = Math.floor(h);
   	f = h - i; // factorial part of h
   	p = v * (1 - s);
   	q = v * (1 - s * f);
   	t = v * (1 - s * (1 - f));

   	switch(i) {
   		case 0:
   			r = v;
   			g = t;
   			b = p;
   			break;

   		case 1:
   			r = q;
   			g = v;
   			b = p;
   			break;

   		case 2:
   			r = p;
   			g = v;
   			b = t;
   			break;

   		case 3:
   			r = p;
   			g = q;
   			b = v;
   			break;

   		case 4:
   			r = t;
   			g = p;
   			b = v;
   			break;

   		default: // case 5:
   			r = v;
   			g = p;
   			b = q;
   	}

   	return [Math.round(r * 255), Math.round(g * 255), Math.round(b * 255)];
   },
   rgb_to_hsv:function(r, g, b)
   {
      r = r/255, g = g/255, b = b/255;
         var max = Math.max(r, g, b), min = Math.min(r, g, b);
         var h, s, v = max;

         var d = max - min;
         s = max == 0 ? 0 : d / max;

         if(max == min){
             h = 0; // achromatic
         }
         else
         {
             switch(max)
             {
                 case r: h = (g - b) / d + (g < b ? 6 : 0); break;
                 case g: h = (b - r) / d + 2; break;
                 case b: h = (r - g) / d + 4; break;
             }
             h /= 6;
         }

         return [h, s, v];
     },
     rgbToHsv:function(r, g, b){
         r = r/255, g = g/255, b = b/255;
         var max = Math.max(r, g, b), min = Math.min(r, g, b);
         var h, s, v = max;

         var d = max - min;
         s = max == 0 ? 0 : d / max;

         if(max == min){
             h = 0; // achromatic
         }else{
             switch(max){
                 case r: h = (g - b) / d + (g < b ? 6 : 0); break;
                 case g: h = (b - r) / d + 2; break;
                 case b: h = (r - g) / d + 4; break;
             }
             h /= 6;
         }

         return [h, s, v];
     },
     hsvToRgb: function(h, s, v){
         var r, g, b;

         var i = Math.floor(h * 6);
         var f = h * 6 - i;
         var p = v * (1 - s);
         var q = v * (1 - f * s);
         var t = v * (1 - (1 - f) * s);

         switch(i % 6){
             case 0: r = v, g = t, b = p; break;
             case 1: r = q, g = v, b = p; break;
             case 2: r = p, g = v, b = t; break;
             case 3: r = p, g = q, b = v; break;
             case 4: r = t, g = p, b = v; break;
             case 5: r = v, g = p, b = q; break;
         }

         return [r * 255, g * 255, b * 255];
     }
});