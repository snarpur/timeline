$LAB
.script("lib/jquery/jquery.js")
.wait()
.script("lib/jquery/jquery-tmpl.js")
.script("lib/jqplot/dist/jquery.jqplot.js")
.script("lib/raphael/raphael.js")
.script("snap/data.js")
.wait()
.script("lib/jquery/plugins/jquery.pubsub.js")
.script("lib/jquery-ui/development-bundle/ui/jquery-ui-1.8.5.custom.js")
.script("lib/jqplot/dist/plugins/jqplot.categoryAxisRenderer.js")
.script("lib/jqplot/dist/plugins/jqplot.barRenderer.js")
.script("lib/underscore/underscore.js")
.script("lib/underscore/underscore.strings.js")
.script("lib/date/build/date.js")
.script("lib/date/build/date-is-IS.js")
.script("lib/i18n/i18n.js")
.wait()
.script("config/locale/jquery.is.json")
.script("config/locale/jquery.is.strings.json")
.script("snap/snap.js")
.wait()
.script("snap/utils/decoration.js")
.script("snap/utils/color.js")
.script("snap/utils/iconizer.js")
.script("app/model/Canvas.js")
.script("app/view/canvas/canvas.js")
.script("app/model/Line.js")
.script("app/view/line/line.js")
.script("app/model/ItemLine.js")
.script("app/view/itemLine/itemLine.js")
.script("app/controller/ItemLineController.js")
.script("app/model/Item.js")
.script("app/view/item/item.js")
.script("app/model/PointItem.js")
.script("app/view/item/pointItem.js")
.script("app/controller/PointItemController.js")
.script("app/model/PeriodItem.js")
.script("app/view/item/periodItem.js")
.script("app/model/Charts/Bar.js")
.script("app/model/Charts/Line.js")
.script("app/model/Widget/ChartViewer.js")
.script("app/view/widget/chartViewer.js")
.script("config/init.js")
.wait(function(){
   snInit(); 
});






        
        // .script("app/controller/ItemLineController.js")
        // .script("app/controller/PeriodItemController.js")
        //.script("app/model/Charts/LineChart.js")
        //.script("app/model/Charts/BarChart.js")