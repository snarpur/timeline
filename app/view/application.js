$.template("infoPane","\
    {{tmpl(patientDataShort) 'portraitCaption'}}\
    {{tmpl(familyData.parents[0]) 'parent'}}\
    {{tmpl(familyData.parents[1]) 'parent'}}\
    {{tmpl 'siblings'}}\
");

$.template("parent","\
 <div class='listview-group parent'>\
     <h2>${relation}</h2>\
     <div>\
     <div>\
         <table>\
            <tbody>\
              <tr><th>Nafn:</th><td>${firstName} ${lastName}</td></tr>\
              <tr><th>Fæðingaár:</th><td>${dob}</td></tr>\
              <tr><th>Heimilisfang:</th><td>${street} ${zip}, ${town}</td></tr>\
              <tr><th>Atvinna:</th><td>${occupation}</td></tr>\
              <tr><th>Vinnustaður:</th><td>${workplace}</td></tr>\
              <tr><th>Heimasími:</th><td>${homePhone}</td></tr>\
              <tr><th>GSM:</th><td>${mobilePhone}</td></tr>\
            </tbody>\
         </table>\
     </div>\
        {{tmpl 'partners'}}\
    </div>\
 </div>\
");


$.template("partners","\
    <div>\
        <h3>Makar</h3>\
        <ul>\
        {{each partners}}\
            <li>${firstName} ${lastName} <i>${start} - ${end}</i></li>\
        {{/each}}\
        </ul>\
    </div>\
");

$.template('siblings',"\
 <div class='listview-group siblings'>\
     <h2>Systkin</h2>\
     <div>\
            {{tmpl(familyData.siblings) 'siblingTable'}}\
         </div>\
    </div>\
");

$.template('siblingTable',"\
      <h3>${relation}</h3>\
      <table>\
      <theader><tr>\
      <th>Nafn</th><th>Aldur</th><th>Forledri</th>\
      </tr></theader>\
        <tbody>\
            {{tmpl(siblings) 'siblingRow'}}\
        </tbody>\
     </table>\
");

$.template('siblingRow',"\
          <tr><td>${name}</td><td>${age}</td><td>${partner}</td></tr>\
");

$.template('portraitCaption',"\
    <div class='portrait-caption'>\
        <ul>\
            <li><em>Nafn:</em><span>${name}</span></li>\
            <li><em>Fæðingadagur:</em><span>${dob}</span></li>\
            <li><em>Skóli:</em><span>${school} ${grade}</span></li>\
            <li><em>Fyrsta koma:</em><span>${firstVisit}</span></li>\
        </ul>\
    </div>\
");




$.template("historyPane","\
    <div class='tabs'>\
        <ul>\
            {{tmpl(historyData) 'historyTabs'}}\
        </ul>\
        {{tmpl(historyData) 'historyPanes'}}\
    </div>\
");

$.template("historyTabs","\
    {{each tabs}}\
        <li><a href='#history-tab-${$index}'>${item}</a></li>\
    {{/each}}\
");
$.template("historyPanes","\
    {{each tabs}}\
        <div id='history-tab-${$index}'>${content}</div>\
    {{/each}}\
");
