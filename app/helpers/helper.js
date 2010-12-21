sn.declare("helper",{
    setQuarter:function(date){
        var d = date.split("."),
            month = Number(d[1]),
            quarter = Math.ceil((month / 12) * 4);
        
        return quarter;     
    },
    formatString: function(str){
        var reg = /^[A-Z]/,
            translated = $.i18n(str),
            capitalized; 
        if(translated.match(reg))
            capitalized = translated
        else
            capitalized = _s.capitalize(translated)
        
        return capitalized;
    },
    getDayMonth:function(date){
        return Date.parse(date).toString("d-MMM");
    },
    getDay:function(date){
        return Date.parse(date).toString("d");
    },
    getMonth:function(date){
        return Date.parse(date).toString("MMMM");
    },
    


    

});