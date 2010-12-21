sn.declare("Timeline.PeriodItem.view","\
    <div class='period item'><span>${amount}${unit}</span></div>\
");


sn.declare("Timeline.PointItem.view","\
    <span class='item point icon'></span>\
");


sn.declare("Timeline.ItemDetail.view","\
    <div class='item ${$data.itemName} ${$data.lineName}'> \
      <span class='icon'></span> \
      <i>${sn.helper.formatString($data.itemName)}</i> \
      <div class='date-day-month'>${sn.helper.getDayMonth($data.start)}</div> \
        <div class='detail-bdy'> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam vestibulum vulputate elit a sodales.\
        </div> \
    </div> \
");