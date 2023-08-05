"use strict";(self.webpackChunktemplate=self.webpackChunktemplate||[]).push([[9274],{9274:(f,h,i)=>{i.r(h),i.d(h,{ChartApexModule:()=>b});var C=i(36895),l=i(88996),a=i(94650),n=i(6205);const u=["chart"],c=[{path:"",component:(()=>{class t{constructor(){}ngOnInit(){this.Linechart={series:[{name:"Desktops",data:[10,41,35,51,49,62,69,91,148]}],chart:{height:350,type:"line",zoom:{enabled:!1}},dataLabels:{enabled:!1},stroke:{curve:"straight"},title:{text:"Product Trends by Month",align:"left"},grid:{row:{colors:["#f3f3f3","transparent"],opacity:.5}},xaxis:{categories:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep"]}},this.Areachart={series:[{name:"series1",data:[31,40,28,51,42,109,100]},{name:"series2",data:[11,32,45,32,34,52,41]}],chart:{height:350,type:"area"},dataLabels:{enabled:!1},stroke:{curve:"smooth"},xaxis:{type:"datetime",categories:["2018-09-19T00:00:00.000Z","2018-09-19T01:30:00.000Z","2018-09-19T02:30:00.000Z","2018-09-19T03:30:00.000Z","2018-09-19T04:30:00.000Z","2018-09-19T05:30:00.000Z","2018-09-19T06:30:00.000Z"]},tooltip:{x:{format:"dd/MM/yy HH:mm"}}},this.ColumnCharts={series:[{name:"Net Profit",data:[44,55,57,56,61,58,63,60,66]},{name:"Revenue",data:[76,85,101,98,87,105,91,114,94]},{name:"Free Cash Flow",data:[35,41,36,26,45,48,52,53,41]}],chart:{type:"bar",height:350},plotOptions:{bar:{horizontal:!1,columnWidth:"55%",endingShape:"rounded"}},dataLabels:{enabled:!1},stroke:{show:!0,width:2,colors:["transparent"]},xaxis:{categories:["Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct"]},yaxis:{title:{text:"$ (thousands)"}},fill:{opacity:1},tooltip:{y:{formatter:function(r){return"$ "+r+" thousands"}}}},this.StackedCharts={series:[{name:"PRODUCT A",data:[44,55,41,67,22,43]},{name:"PRODUCT B",data:[13,23,20,8,13,27]},{name:"PRODUCT C",data:[11,17,15,15,21,14]},{name:"PRODUCT D",data:[21,7,25,13,22,8]}],chart:{type:"bar",height:350,stacked:!0,toolbar:{show:!0},zoom:{enabled:!0}},responsive:[{breakpoint:480,options:{legend:{position:"bottom",offsetX:-10,offsetY:0}}}],plotOptions:{bar:{horizontal:!1}},xaxis:{type:"category",categories:["01/2011","02/2011","03/2011","04/2011","05/2011","06/2011"]},legend:{position:"right",offsetY:40},fill:{opacity:1}},this.BarCharts={series:[{name:"basic",data:[400,430,448,470,540,580,690,1100,1200,1380]}],chart:{type:"bar",height:350},plotOptions:{bar:{horizontal:!0}},dataLabels:{enabled:!1},xaxis:{categories:["South Korea","Canada","United Kingdom","Netherlands","Italy","France","Japan","United States","China","Germany"]}},this.MixedChart={series:[{name:"Website Blog",type:"column",data:[440,505,414,671,227,413,201,352,752,320,257,160]},{name:"Social Media",type:"line",data:[23,42,35,27,43,22,17,31,22,22,12,16]}],chart:{height:350,type:"line"},stroke:{width:[0,4]},title:{text:"Traffic Sources"},dataLabels:{enabled:!0,enabledOnSeries:[1]},labels:["01 Jan 2001","02 Jan 2001","03 Jan 2001","04 Jan 2001","05 Jan 2001","06 Jan 2001","07 Jan 2001","08 Jan 2001","09 Jan 2001","10 Jan 2001","11 Jan 2001","12 Jan 2001"],xaxis:{type:"datetime"},yaxis:[{title:{text:"Website Blog"}},{opposite:!0,title:{text:"Social Media"}}]},this.DonutChart={series:[44,55,13,43,22],chart:{type:"donut"},labels:["Team A","Team B","Team C","Team D","Team E"],responsive:[{breakpoint:480,options:{chart:{width:200},legend:{position:"bottom"}}}]},this.RadialChart={series:[44,55,67,83],chart:{height:350,type:"radialBar"},plotOptions:{radialBar:{dataLabels:{name:{fontSize:"22px"},value:{fontSize:"16px"},total:{show:!0,label:"Total",formatter:function(r){return"249"}}}}},labels:["Apples","Oranges","Bananas","Berries"]}}generateData(r,e,o){for(var d=0,p=[];d<e;){var v=Math.floor(750*Math.random())+1,g=Math.floor(Math.random()*(o.max-o.min+1))+o.min,x=Math.floor(61*Math.random())+15;p.push([v,g,x]),d++}return p}}return t.\u0275fac=function(r){return new(r||t)},t.\u0275cmp=a.Xpm({type:t,selectors:[["app-chart-apex"]],viewQuery:function(r,e){if(1&r&&a.Gf(u,5),2&r){let o;a.iGM(o=a.CRH())&&(e.chart=o.first)}},decls:77,vars:54,consts:[[1,"cardhead"],[1,"page-header"],[1,"row"],[1,"col-sm-12"],[1,"page-title"],[1,"breadcrumb"],[1,"breadcrumb-item"],["routerLink","//dashboard"],[1,"breadcrumb-item","active"],[1,"col-md-6"],[1,"card"],[1,"card-header"],[1,"card-title"],[1,"card-body"],["id","s-line",1,"chart-set"],[3,"series","chart","xaxis","dataLabels","grid","stroke","title"],["id","s-line-area",1,"chart-set"],[3,"series","chart","xaxis","stroke","tooltip","dataLabels"],["id","s-col",1,"chart-set"],[3,"series","chart","dataLabels","plotOptions","yaxis","legend","fill","stroke","tooltip","xaxis"],["id","s-col-stacked",1,"chart-set"],[3,"series","chart","dataLabels","plotOptions","responsive","xaxis","legend","fill"],["id","s-bar",1,"chart-set"],[3,"series","chart","dataLabels","plotOptions","xaxis"],["id","mixed-chart",1,"chart-set"],[3,"series","chart","yaxis","xaxis","labels","stroke","title","dataLabels","fill","tooltip"],["id","donut-chart",1,"chart-set"],[3,"series","chart","labels","responsive"],["id","radial-chart",1,"chart-set"],[3,"series","chart","plotOptions","labels"]],template:function(r,e){1&r&&(a.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"h3",4),a._uU(5,"Charts"),a.qZA(),a.TgZ(6,"ul",5)(7,"li",6)(8,"a",7),a._uU(9,"Dashboard"),a.qZA()(),a.TgZ(10,"li",8),a._uU(11,"Charts"),a.qZA()()()()(),a.TgZ(12,"div",2)(13,"div",9)(14,"div",10)(15,"div",11)(16,"h5",12),a._uU(17,"Apex Simple"),a.qZA()(),a.TgZ(18,"div",13)(19,"div",14),a._UZ(20,"apx-chart",15),a.qZA()()()(),a.TgZ(21,"div",9)(22,"div",10)(23,"div",11)(24,"h5",12),a._uU(25,"Area Chart"),a.qZA()(),a.TgZ(26,"div",13)(27,"div",16),a._UZ(28,"apx-chart",17),a.qZA()()()(),a.TgZ(29,"div",9)(30,"div",10)(31,"div",11)(32,"h5",12),a._uU(33,"Column Chart"),a.qZA()(),a.TgZ(34,"div",13)(35,"div",18),a._UZ(36,"apx-chart",19),a.qZA()()()(),a.TgZ(37,"div",9)(38,"div",10)(39,"div",11)(40,"h5",12),a._uU(41,"Column Stacked Chart"),a.qZA()(),a.TgZ(42,"div",13)(43,"div",20),a._UZ(44,"apx-chart",21),a.qZA()()()(),a.TgZ(45,"div",9)(46,"div",10)(47,"div",11)(48,"h5",12),a._uU(49,"Bar Chart"),a.qZA()(),a.TgZ(50,"div",13)(51,"div",22),a._UZ(52,"apx-chart",23),a.qZA()()()(),a.TgZ(53,"div",9)(54,"div",10)(55,"div",11)(56,"h5",12),a._uU(57,"Mixed Chart"),a.qZA()(),a.TgZ(58,"div",13)(59,"div",24),a._UZ(60,"apx-chart",25),a.qZA()()()(),a.TgZ(61,"div",9)(62,"div",10)(63,"div",11)(64,"h5",12),a._uU(65,"Donut Chart"),a.qZA()(),a.TgZ(66,"div",13)(67,"div",26),a._UZ(68,"apx-chart",27),a.qZA()()()(),a.TgZ(69,"div",9)(70,"div",10)(71,"div",11)(72,"h5",12),a._uU(73,"Radial Chart"),a.qZA()(),a.TgZ(74,"div",13)(75,"div",28),a._UZ(76,"apx-chart",29),a.qZA()()()()()()),2&r&&(a.xp6(20),a.Q6J("series",e.Linechart.series)("chart",e.Linechart.chart)("xaxis",e.Linechart.xaxis)("dataLabels",e.Linechart.dataLabels)("grid",e.Linechart.grid)("stroke",e.Linechart.stroke)("title",e.Linechart.title),a.xp6(8),a.Q6J("series",e.Areachart.series)("chart",e.Areachart.chart)("xaxis",e.Areachart.xaxis)("stroke",e.Areachart.stroke)("tooltip",e.Areachart.tooltip)("dataLabels",e.Areachart.dataLabels),a.xp6(8),a.Q6J("series",e.ColumnCharts.series)("chart",e.ColumnCharts.chart)("dataLabels",e.ColumnCharts.dataLabels)("plotOptions",e.ColumnCharts.plotOptions)("yaxis",e.ColumnCharts.yaxis)("legend",e.ColumnCharts.legend)("fill",e.ColumnCharts.fill)("stroke",e.ColumnCharts.stroke)("tooltip",e.ColumnCharts.tooltip)("xaxis",e.ColumnCharts.xaxis),a.xp6(8),a.Q6J("series",e.StackedCharts.series)("chart",e.StackedCharts.chart)("dataLabels",e.StackedCharts.dataLabels)("plotOptions",e.StackedCharts.plotOptions)("responsive",e.StackedCharts.responsive)("xaxis",e.StackedCharts.xaxis)("legend",e.StackedCharts.legend)("fill",e.StackedCharts.fill),a.xp6(8),a.Q6J("series",e.BarCharts.series)("chart",e.BarCharts.chart)("dataLabels",e.BarCharts.dataLabels)("plotOptions",e.BarCharts.plotOptions)("xaxis",e.BarCharts.xaxis),a.xp6(8),a.Q6J("series",e.MixedChart.series)("chart",e.MixedChart.chart)("yaxis",e.MixedChart.yaxis)("xaxis",e.MixedChart.xaxis)("labels",e.MixedChart.labels)("stroke",e.MixedChart.stroke)("title",e.MixedChart.title)("dataLabels",e.MixedChart.dataLabels)("fill",e.MixedChart.fill)("tooltip",e.MixedChart.tooltip),a.xp6(8),a.Q6J("series",e.DonutChart.series)("chart",e.DonutChart.chart)("labels",e.DonutChart.labels)("responsive",e.DonutChart.responsive),a.xp6(8),a.Q6J("series",e.RadialChart.series)("chart",e.RadialChart.chart)("plotOptions",e.RadialChart.plotOptions)("labels",e.RadialChart.labels))},dependencies:[l.yS,n.x]}),t})()}];let m=(()=>{class t{}return t.\u0275fac=function(r){return new(r||t)},t.\u0275mod=a.oAB({type:t}),t.\u0275inj=a.cJS({imports:[l.Bz.forChild(c),l.Bz]}),t})(),b=(()=>{class t{}return t.\u0275fac=function(r){return new(r||t)},t.\u0275mod=a.oAB({type:t}),t.\u0275inj=a.cJS({imports:[C.ez,m,n.X]}),t})()}}]);