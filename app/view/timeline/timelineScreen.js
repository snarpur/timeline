$.template("timeline","\
   <div id='tml-body'></div>\
");

$.template("header","\
   <div id='tml-header'></div>\
");

$.template("bgPlaceholder","\
   <div class='bg-placeholder-header'></div>\
   <div class='bg-placeholder-shadow'></div>\
");

$.template("dateHeader","\
   <div class='cell'>${$data}</div>\
");

$.template("verticalDividers","\
    {{each abbreviatedMonthNames}} \
        <div class='vertical-divider m-${$index}'></div> \
    {{/each}}\
");

$.template("itemDetails", "\
 <div class='q${$data} quarter'></div>\
");

$.template("itemDetail","\
    <div id='item-details' class='item-details'>\
        <a class='icon view-details closed' href='#'>Sjá skýringar</a>\
        <div></div>\
    </div> \
");

$.template("dimensionsCss","\
     ${$data.class}{\
         {{each css}}\
         ${$value.property}:${$value.value}px;\
         {{/each}}\
         } \
");

$.template("itemDetailsOpacity","\
    .focus-${$data.name} .line.${$data.name},\
    .focus-${$data.name} .item-details .${$data.name} {\
        opacity:1;     -webkit-box-shadow: 0px 0px 3px #999; z-index:10000;\
        }\
");

$.template("itemDetailsOpacity","\
    .focus-${$data.name} .line.${$data.name},\
    .focus-${$data.name} .item-details .${$data.name} {\
        opacity:1;     -webkit-box-shadow: 0px 0px 3px #999; z-index:10000;\
        }\
");

$.template("itemMenu","\
    <div id='item-menu' class='closed'>\
    <span class='icon icn-item-menu'>Velja</span>\
    <form action=''>\
    <ul> \
    {{each items}} \
        <li>\
        <label for='${$value.name}'></label>\
        <input type='checkbox' id='${$value.name}' name='${$value.name}' checked='checked'>${sn.helper.formatString($value.name)}</input>\
        </li> \
    {{/each}} \
    </ul> \
    </form>\
    </div>\
");
