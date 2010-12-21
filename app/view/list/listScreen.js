$.template("listScreen","\
 <div class='listview-group ${name}'>\
     <h2><span></span>${sn.helper.formatString(name)}</h2>\
     <div>\
         <table>\
            <tbody>\
                {{each items }}\
                    {{tmpl($value,{lineName: $data.name}) 'itemList'}}\
                {{/each}}\
            </tbody>\
         </table>\
     </div>\
 </div>\
");
 // {{tmpl $item.name }}\
 
$.template("itemList","\
    {{each $data.occurances}}\
        <tr>\
            <td>${sn.helper.formatString($data.name)}</td>\
            <td>${$value.start}</td>\
            {{tmpl($value) $item.lineName}}\
        </tr>\
    {{/each}}\
");


$.template("communication","\
    <td>Integer et rutrum felis</td>\
");

$.template("medications","\
    <td>${$data.end}</td>\
    <td>${$data.amount}</td>\
    <td>${$data.unit}</td>\
");

$.template("events","\
    <td>bla</td>\
");

$.template("scales","\
    <td>Proin quis urna</td>\
");
