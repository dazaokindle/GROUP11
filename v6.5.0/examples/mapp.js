var OSM=new ol.layer.tile({
			visible:true,
			source:new ol.source.OSM()
			})
var map=new ol.Map({
	target:document.getElementById('map'),
	layers:[OSM]
				
	view:new ol.View({
		ceter:[0,0],
		zoom:2
	})
});
