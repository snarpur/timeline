var co = function(){};
if(console != undefined){
  co = console.info;
}


var _o = {};

// Make the constuctor ex. Object.create(myobject)
_o.create = function (o,args,element) 
{
    function F() {}
    F.prototype = o;
    var n = new F();
    if(args){
        n.uber = o;
        for(var i in args){
            n[i] = args[i];
        }
    }
    if(o.init && element){
        n.init(args,element);
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
var sn = {controller:"",model:"",view:""};
sn.declare = function(name,body){
  var parts = name.split('.');
  var len = parts.length  - 1;
  var current = sn;
  for (var i in parts)
  {
    if (!current[parts[i]]) 
      current[parts[i]] = {};
    if(i == len)
      current[parts[i]] = body;
    current = current[parts[i]];
  }
  
 }






