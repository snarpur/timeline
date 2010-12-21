var co = function(){};
if(console != undefined){
  co = console.info;
}


var _o = {};

// Make the constuctor ex. _o.create(myobject)
_o.create = function (o) {
    function F() {}
    F.prototype = o;
    var n = new F();
    
    return n;
};
_o.extend = function (o, e) {
    function F() {}
    F.prototype = o;
    var n = new F();
    
    for(var i in e){
        n[i] = e[i];
    }
    return n;
};

// Implement bridge pattenr
$.plugin = function(name, object) 
{
  $.fn[name] = function(options) 
  {
    var args = Array.prototype.slice.call(arguments, 1);
    return this.each(function() 
    {
      var instance = $.data(this, name);
      if (instance) 
      {
        instance[options].apply(instance, args);
      } 
      else 
      {
  	    instance = $.data(this, name, _o.create(object).init(options,this));
      }
    });
  };
};

//Snap GLOBAL OBJECT
var sn = {};
sn.declare = function(name,body){
  var parts = name.split('.');
  var len = parts.length  - 1;
  var current = sn;

  for (var i in parts){
    if (!current[parts[i]]) 
      current[parts[i]] = {};
    if(i == len)
      current[parts[i]] = body;
    current = current[parts[i]];
  }
};








