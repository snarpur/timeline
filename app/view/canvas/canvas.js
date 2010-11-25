$.template("header","\
   <div class='cell'>${$data}</div>\
");


$.template("verticalDividers","\
    <div class='vertical_divider'></div> \
");




$.template("itemDetails", "\
 <div class='q${$data} quarter'></div>\
");




$.template("itemDetail","\
    <div class='quarter q${sn.helper.setQuarter($data.start)}'>${sn.helper.setQuarter($data.start)}</div> \
");

$.template("itemDetailsCss","\
     ${$data.class}{${$data.css}} \
");

  // 
  //    <div id='q1'>1</div> \
  //   <div id='q2'>2</div> \
  //   <div id='q3'>3</div> \
  //   <div id='q4'>4</div> \
      // {{tmpl($value) sn.Timeline.Canvas.view.itemDetail}}\