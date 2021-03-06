(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-172f2f20"],{2724:function(e,r,t){"use strict";var a=t("b1a3"),s=t.n(a);s.a},"29a7":function(e){e.exports=[{year:"till 2004",info:{batting_score:56,total_no_of_fours:1309,total_no_of_sixes:40,average_sr:50.875}},{year:"after 2004",info:{batting_score:34,total_no_of_fours:749,total_no_of_sixes:29,average_sr:54.238}}]},"76ec":function(e,r,t){"use strict";t.r(r);var a=function(){var e=this,r=e.$createElement,t=e._self._c||r;return t("div",{staticClass:"batting_test_2004"},[e._m(0),t("br"),t("br"),t("br"),t("div",{staticClass:"card"},[t("Chart",{attrs:{titleText:"Avg Runs Scored",subTitleText:"Average run is important to determine players consistency",chartType:"bar",chartData:e.HomeAwayScoreData.data,chartOptions:e.HomeAwayScoreData.options,parentStyle:e.chartContainerStyle}}),t("Inference",{attrs:{inference:"Avg run Scored",titleText:"A batting average represents how many runs, on average, a batsman scores before getting out.",winner:"The difference in average of Sachin before and after 2004 is around 30."}}),t("br")],1),t("br"),t("br"),t("br"),t("div",{staticClass:"card"},[t("Chart",{attrs:{titleText:"Total No. of fours",subTitleText:"According to the research, no. of fours determine the ease with with the player finishes off the game. ",chartType:"bar",chartData:e.FoursStat.data,chartOptions:e.FoursStat.options,parentStyle:e.chartContainerStyle}}),t("Inference",{attrs:{inference:"Total no. of Fours",winner:"The difference in total no. of fours in the two respective era is around 520.",titleText:"The higher no. of fours decide the players ability to score run fast"}}),t("br")],1),t("br"),t("br"),t("br"),t("div",{staticClass:"card"},[t("Chart",{attrs:{titleText:"Total No. of sixes scored",subTitleText:"SInce Sixes are counted if the ball is hit outside the boundaries, therefore it also counts to the muscle power of the player. ",chartType:"bar",chartData:e.SixesStat.data,chartOptions:e.SixesStat.options,parentStyle:e.chartContainerStyle}}),t("Inference",{attrs:{inference:"Total no. of sixes",winner:"The difference between the total no. of sixes in the two respective era is 11.",titleText:"The tactics, muscle power, pitch length, ground shape determines the no. of sixes a player can score on an average"}}),t("br")],1),t("br"),t("br"),t("br"),t("div",{staticClass:"card"},[t("Chart",{attrs:{titleText:"Average Strike rate",subTitleText:"It is an obvious fact that the higher strike rate of the player determines how good of a player he is and his capability to finish the match",chartType:"bar",chartData:e.SixesStat.data,chartOptions:e.SixesStat.options,parentStyle:e.chartContainerStyle}}),t("Inference",{attrs:{winner:"It is fairly visible that there is difference in the average strike rate before and after 2004.",titleText:"The difference strike rate is an importsnt factor amongst all the other factor becuase it gives the player to chase the target smoothly.",inference:"Average Strike rate"}}),t("br")],1),t("br"),t("br"),t("br")])},s=[function(){var e=this,r=e.$createElement,t=e._self._c||r;return t("div",{staticClass:"card-center"},[t("span",{staticClass:"title-imp"},[e._v("Before 2004 and after 2004 Analysis")]),t("hr"),t("br"),t("span",{staticClass:"result-ps"},[t("b",[e._v("The following analysis is based on the research and critical observation that due \n            to serious injuries Sachin tendulkar did not remain as effective as he was before 2004.This Analysis in the role of batsman(as \n            he is an aclaimed batsman)comprises of :-")])]),t("br"),t("span",{staticClass:"result-ps"},[e._v("1. "),t("b",[e._v("His Average score in matches")])]),t("span",{staticClass:"result-ps"},[e._v("2. "),t("b",[e._v("Number of 6's")])]),t("span",{staticClass:"result-ps"},[e._v("3. "),t("b",[e._v("Number of 4's")])]),t("span",{staticClass:"result-ps"},[e._v("4. "),t("b",[e._v("Average Strike Rate")])])])}],o=(t("7f7f"),t("8615"),t("ac6a"),t("0292")),i=t("2b5e"),n=t("29a7"),b={name:"battingtest2004",components:{Chart:o["a"],Inference:i["a"]},data:function(){return{chartContainerStyle:{margin:"10px",width:"45vw",display:"inline-block"},HomeAwayScoreData:{options:{responsive:!0,scales:{xAxes:[{stacked:!0,maxBarThickness:70,gridLines:{offsetGridLines:!0,color:"rgba(255, 0, 0, 1)"}}],yAxes:[{stacked:!0,gridLines:{offsetGridLines:!0,color:"rgba(255, 0, 0, 1)"}}]}},data:{labels:[],datasets:[]}},FoursStat:{options:{responsive:!0,scales:{xAxes:[{stacked:!0,maxBarThickness:70,gridLines:{offsetGridLines:!0,color:"rgba(255, 0, 0, 1)"}}],yAxes:[{stacked:!0,gridLines:{offsetGridLines:!0,color:"rgba(255, 0, 0, 1)"}}]}},data:{labels:[],datasets:[]}},SixesStat:{options:{responsive:!0,scales:{xAxes:[{stacked:!0,maxBarThickness:70,gridLines:{offsetGridLines:!0,color:"rgba(255, 0, 0, 1)"}}],yAxes:[{stacked:!0,gridLines:{offsetGridLines:!0,color:"rgba(255, 0, 0, 1)"}}]}},data:{labels:[],datasets:[]}},AverageSr:{options:{responsive:!0,scales:{xAxes:[{stacked:!0,maxBarThickness:70,gridLines:{offsetGridLines:!0,color:"rgba(255, 0, 0, 1)"}}],yAxes:[{stacked:!0,gridLines:{offsetGridLines:!0,color:"rgba(255, 0, 0, 1)"}}]}},data:{labels:[],datasets:[]}}}},mounted:function(){var e=[];Object.values(n).forEach(function(r){e.push({name:r.year,awayAvg:r.info.batting_score})}),this.HomeAwayScoreData.data={labels:e.map(function(e){return e.name}),datasets:[{label:"Avg run scored",data:e.map(function(e){return e.awayAvg}),backgroundColor:["rgb(218,20,255)","rgb(57,255,20)","rgb(255,255,0)","rgb(0,255,255)","rgb(255,128,0)","rgb(235, 224, 255, 0.5)","rgb(244, 245, 245, 0.5)"],borderWidth:.5,borderColor:["rgb(243,179,255)","rgb(12,79,0)","rgb(255,123,0)","rgb(0,107,255)","rgb(255,170,0)","rgb(153, 102, 255, 1)","rgb(201, 203, 207, 1)"],hoverBorderWidth:1,hoverBorderColor:["rgb(255, 99, 132, 1)","rgb(255, 159, 64, 1)","rgb(255, 205, 86, 1)","rgb(75, 192, 192, 1)","rgb(54, 162, 235, 1)","rgb(153, 102, 255, 1)","rgb(201, 203, 207, 1)"]}]};var r=[];Object.values(n).forEach(function(e){r.push({year:e.year,awayfours:e.info.total_no_of_fours})}),this.FoursStat.data={labels:r.map(function(e){return e.year}),datasets:[{label:"Total no. of fours",data:r.map(function(e){return e.awayfours}),backgroundColor:["rgb(218,20,255)","rgb(57,255,20)","rgb(255,255,0)","rgb(0,255,255)","rgb(255,128,0)","rgb(235, 224, 255, 0.5)","rgb(244, 245, 245, 0.5)"],borderWidth:.5,borderColor:["rgb(243,179,255)","rgb(12,79,0)","rgb(255,123,0)","rgb(0,107,255)","rgb(255,170,0)","rgb(153, 102, 255, 1)","rgb(201, 203, 207, 1)"],hoverBorderWidth:1,hoverBorderColor:["rgb(255, 99, 132, 1)","rgb(255, 159, 64, 1)","rgb(255, 205, 86, 1)","rgb(75, 192, 192, 1)","rgb(54, 162, 235, 1)","rgb(153, 102, 255, 1)","rgb(201, 203, 207, 1)"]}]};var t=[];Object.values(n).forEach(function(e){t.push({year:e.year,awaysixes:e.info.total_no_of_sixes})}),this.SixesStat.data={labels:t.map(function(e){return e.year}),datasets:[{label:"Total no. of sixes",data:t.map(function(e){return e.awaysixes}),backgroundColor:["rgb(218,20,255)","rgb(57,255,20)","rgb(255,255,0)","rgb(0,255,255)","rgb(255,128,0)","rgb(235, 224, 255, 0.5)","rgb(244, 245, 245, 0.5)"],borderWidth:.5,borderColor:["rgb(243,179,255)","rgb(12,79,0)","rgb(255,123,0)","rgb(0,107,255)","rgb(255,170,0)","rgb(153, 102, 255, 1)","rgb(201, 203, 207, 1)"],hoverBorderWidth:1,hoverBorderColor:["rgb(255, 99, 132, 1)","rgb(255, 159, 64, 1)","rgb(255, 205, 86, 1)","rgb(75, 192, 192, 1)","rgb(54, 162, 235, 1)","rgb(153, 102, 255, 1)","rgb(201, 203, 207, 1)"]}]};var a=[];Object.values(n).forEach(function(e){a.push({name:e.year,averagesr:e.info.average_sr})}),this.AverageSr={labels:a.map(function(e){return e.name}),datasets:[{label:"Average Strike Rate",data:a.map(function(e){return e.averagesr}),backgroundColor:["rgb(218,20,255)","rgb(57,255,20)","rgb(255,255,0)","rgb(0,255,255)","rgb(255,128,0)","rgb(235, 224, 255, 0.5)","rgb(244, 245, 245, 0.5)"],borderWidth:.5,borderColor:["rgb(243,179,255)","rgb(12,79,0)","rgb(255,123,0)","rgb(0,107,255)","rgb(255,170,0)","rgb(153, 102, 255, 1)","rgb(201, 203, 207, 1)"],hoverBorderWidth:1,hoverBorderColor:["rgb(255, 99, 132, 1)","rgb(255, 159, 64, 1)","rgb(255, 205, 86, 1)","rgb(75, 192, 192, 1)","rgb(54, 162, 235, 1)","rgb(153, 102, 255, 1)","rgb(201, 203, 207, 1)"]}]}}},c=b,l=(t("2724"),t("2877")),g=Object(l["a"])(c,a,s,!1,null,"43932744",null);r["default"]=g.exports},b1a3:function(e,r,t){}}]);
//# sourceMappingURL=chunk-172f2f20.cdc7a646.js.map