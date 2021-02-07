Thanks for downloading this theme!

Theme Name: NiceAdmin
Theme URL: https://bootstrapmade.com/nice-admin-bootstrap-admin-html-template/
Author: BootstrapMade
Author URL: https://bootstrapmade.com


<script src="https://rawgit.com/walkermatt/ol-layerswitcher/master/dist/ol-layerswitcher.js"></script>
     <link rel="stylesheet" href="https://rawgit.com/walkermatt/ol-layerswitcher/master/src/ol-layerswitcher.css">


<script src="../src/ol3-layerswitcher.js"></script>
<link rel="stylesheet" type="../src/ol3-layerswitcher.css" />


var layerswitcher = new ol.control.layerswitcher({});
           map.addControl(layerswitcher);

 new ol.layer.Group({
        title: 'Base Map',
        layers:[OSM]
      }),


new ol.control.PanZoomBar(),
new ol.control.LayerSwitcher(),
new ol.control.MouseToolbar(),