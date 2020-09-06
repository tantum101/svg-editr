function asyncGeneratorStep(e,t,n,o,r,a,s){try{var l=e[a](s),c=l.value}catch(e){return void n(e)}l.done?t(c):Promise.resolve(c).then(o,r)}var e={name:"polygon",init:function init(e){var t=this;return function _asyncToGenerator(e){return function(){var t=this,n=arguments;return new Promise((function(o,r){var a=e.apply(t,n);function _next(e){asyncGeneratorStep(a,o,r,_next,_throw,"next",e)}function _throw(e){asyncGeneratorStep(a,o,r,_next,_throw,"throw",e)}_next(void 0)}))}}(regeneratorRuntime.mark((function _callee(){var n,o,r,a,s,l,c,i,u,d,p,g,f,h;return regeneratorRuntime.wrap((function _callee$(_){for(;;)switch(_.prev=_.next){case 0:return g=function _sec(e){return 1/Math.cos(e)},p=function _cot(e){return 1/Math.tan(e)},d=function _setAttr(e,t){o.changeSelectedAttribute(e,t),o.call("changed",l)},u=function _showPanel(e){var t=r("#fc_rules");t.length||(t=r('<style id="fc_rules"></style>').appendTo("head")),t.text(e?" #tool_topath { display: none !important; }":""),r("#polygon_panel").toggle(e)},o=(n=t).canvas,r=e.$,!1,_.next=9,import("./locale/".concat(n.curPrefs.lang,".js"));case 9:return a=_.sent,s=a.default,f=[{id:"tool_polygon",icon:"polygon.png",type:"mode",position:11,events:{click:function click(){o.setMode("polygon"),u(!0)}}}],h=[{type:"input",panel:"polygon_panel",id:"polySides",size:3,defval:5,events:{change:function change(){d("sides",this.value)}}}],_.abrupt("return",{name:s.name,svgicons:"polygon-icons.svg",buttons:s.buttons.map((function(e,t){return Object.assign(f[t],e)})),context_tools:s.contextTools.map((function(e,t){return Object.assign(h[t],e)})),callback:function callback(){r("#polygon_panel").hide(),setTimeout((function(){r("#tool_source_save").clone().hide().attr("id","polygon_save").unbind().appendTo("#tool_source_back").click((function(){})),r("#tool_source_cancel").clone().hide().attr("id","polygon_cancel").unbind().appendTo("#tool_source_back").click((function(){}))}),3e3)},mouseDown:function mouseDown(e){if("polygon"===o.getMode()){var t=o.getColor("fill"),n=o.getColor("stroke"),r=o.getStrokeWidth();return c=!0,i=o.addSVGElementFromJson({element:"polygon",attr:{cx:e.start_x,cy:e.start_y,id:o.getNextId(),shape:"regularPoly",sides:document.getElementById("polySides").value,orient:"x",edge:0,fill:t,strokecolor:n,strokeWidth:r}}),{started:!0}}},mouseMove:function mouseMove(e){if(c&&"polygon"===o.getMode()){var t=r(i).attr(["cx","cy","sides","orient","fill","strokecolor","strokeWidth"]),n=e.mouse_x,a=e.mouse_y,s=t.cx,l=t.cy,u=t.fill,d=t.strokecolor,f=t.strokeWidth,h=t.sides,_=Math.sqrt((n-s)*(n-s)+(a-l)*(a-l))/1.5;i.setAttribute("edge",_);for(var y=_/2*p(Math.PI/h)*g(Math.PI/h),m="",v=0;h>=v;v++){var k=2*Math.PI*v/h;m+=(n=y*Math.cos(k)+s)+","+(a=y*Math.sin(k)+l)+" "}return i.setAttribute("points",m),i.setAttribute("fill",u),i.setAttribute("stroke",d),i.setAttribute("stroke-width",f),{started:!0}}},mouseUp:function mouseUp(e){if("polygon"===o.getMode())return{keep:"0"!==r(i).attr("edge").edge,element:i}},selectedChanged:function selectedChanged(e){for(var t=(l=e.elems).length;t--;){var n=l[t];n&&"regularPoly"===n.getAttribute("shape")&&e.selectedElement&&!e.multiselected?(r("#polySides").val(n.getAttribute("sides")),u(!0)):u(!1)}},elementChanged:function elementChanged(e){}});case 14:case"end":return _.stop()}}),_callee)})))()}};export default e;
//# sourceMappingURL=ext-polygon.js.map