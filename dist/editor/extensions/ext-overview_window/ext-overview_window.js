/**
 * @file ext-overview_window.js
 *
 * @license MIT
 *
 * @copyright 2013 James Sacksteder
 *
 */
var i={name:"overview_window",init:function init(i){var e=i.$,o=i.isChrome,r=i.isIE,t={};if(o()){var w=navigator.userAgent.indexOf("Chrome/")+7;if(Number.parseInt(navigator.userAgent.substring(w))<49)return}e("#sidepanels").append('<div id="overview_window_content_pane" style="width:100%; word-wrap:break-word;  display:inline-block; margin-top:20px;"><div id="overview_window_content" style="position:relative; left:12px; top:0px;"><div style="background-color:#A0A0A0; display:inline-block; overflow:visible;"><svg id="overviewMiniView" width="150" height="100" x="0" y="0" viewBox="0 0 4800 3600" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><use x="0" y="0" xlink:href="#svgroot"> </use></svg><div id="overview_window_view_box" style="min-width:50px; min-height:50px; position:absolute; top:30px; left:30px; z-index:5; background-color:rgba(255,0,102,0.3);"></div></div></div></div>');var v=function updateViewBox(){var i=Number.parseFloat(e("#workarea").css("height")),o=Number.parseFloat(e("#workarea").css("width")),r=e("#workarea").scrollLeft(),t=e("#workarea").scrollTop(),w=Number.parseFloat(e("#svgcanvas").css("width")),v=Number.parseFloat(e("#svgcanvas").css("height")),a=e("#overviewMiniView").attr("width"),n=e("#overviewMiniView").attr("height"),s=r/w*a,d=t/v*n,l=o/w*a,p=i/v*n;e("#overview_window_view_box").css("min-width",l+"px"),e("#overview_window_view_box").css("min-height",p+"px"),e("#overview_window_view_box").css("top",d+"px"),e("#overview_window_view_box").css("left",s+"px")};e("#workarea").scroll((function(){t.viewBoxDragging||v()})),e("#workarea").resize(v),v();var a=function updateViewDimensions(){var i=e("#svgroot").attr("width"),o=e("#svgroot").attr("height"),t=640,w=480;r()&&(t=0,w=0);var a=o/i*e("#overviewMiniView").attr("width");e("#overviewMiniView").attr("viewBox",t+" "+w+" "+i+" "+o),e("#overviewMiniView").attr("height",a),v()};a(),t.viewBoxDragging=!1;var n=function updateViewPortFromViewBox(){var i=Number.parseFloat(e("#svgcanvas").css("width")),o=Number.parseFloat(e("#svgcanvas").css("height")),r=e("#overviewMiniView").attr("width"),t=e("#overviewMiniView").attr("height"),w=Number.parseFloat(e("#overview_window_view_box").css("left"))/r*i,v=Number.parseFloat(e("#overview_window_view_box").css("top"))/t*o;e("#workarea").scrollLeft(w),e("#workarea").scrollTop(v)};return e("#overview_window_view_box").draggable({containment:"parent",drag:n,start:function start(){t.viewBoxDragging=!0},stop:function stop(){t.viewBoxDragging=!1}}),e("#overviewMiniView").click((function(i){var o=i.offsetX||i.originalEvent.layerX,r=i.offsetY||i.originalEvent.layerY,t=e("#overviewMiniView").attr("width"),w=e("#overviewMiniView").attr("height"),v=Number.parseFloat(e("#overview_window_view_box").css("min-width")),a=Number.parseFloat(e("#overview_window_view_box").css("min-height")),s=o-.5*v,d=r-.5*a;s<0&&(s=0),d<0&&(d=0),s+v>t&&(s=t-v),d+a>w&&(d=w-a),e("#overview_window_view_box").css("top",d+"px"),e("#overview_window_view_box").css("left",s+"px"),n()})),{name:"overview window",canvasUpdated:a,workareaResized:v}}};export default i;
//# sourceMappingURL=ext-overview_window.js.map