(window.webpackJsonp=window.webpackJsonp||[]).push([[55],{287:function(e,n,t){"use strict";t.r(n);var r=t(69),o=t(114),i=t(3),a=t(2),c=new o.a({url:"https://ahocevar.com/geoserver/wms",params:{LAYERS:"ne:ne"},serverType:"geoserver",crossOrigin:"anonymous"}),s=new r.a({source:c}),u=new a.a({center:[0,0],zoom:1}),g=new i.a({layers:[s],target:"map",view:u});g.on("singleclick",(function(e){document.getElementById("info").innerHTML="";var n=u.getResolution(),t=c.getFeatureInfoUrl(e.coordinate,n,"EPSG:3857",{INFO_FORMAT:"text/html"});t&&fetch(t).then((function(e){return e.text()})).then((function(e){document.getElementById("info").innerHTML=e}))})),g.on("pointermove",(function(e){if(!e.dragging){var n=g.getEventPixel(e.originalEvent),t=g.forEachLayerAtPixel(n,(function(){return!0}));g.getTargetElement().style.cursor=t?"pointer":""}}))}},[[287,0]]]);
//# sourceMappingURL=getfeatureinfo-image.js.map