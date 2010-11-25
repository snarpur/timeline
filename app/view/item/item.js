sn.declare("Timeline.PeriodItem.view","\
    <div class='period item'><span>${amount}${unit}</span></div>\
");


sn.declare("Timeline.PointItem.view","\
    <span class='item point icon'></span>\
");


sn.declare("Timeline.ItemDetail.view","\
    <div><span class='icon'></span>${$data.start} ${sn.helper.formatString($data.itemName)}</div> \
");