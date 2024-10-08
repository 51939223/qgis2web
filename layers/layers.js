ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:5181").setExtent([-39795825.755525, -21039383.759929, 39795825.755525, 21039383.759929]);
var wms_layers = [];


        var lyr_GoogleTraffic_0 = new ol.layer.Tile({
            'title': 'Google Traffic',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt?lyrs=h@159000000,traffic|seconds_into_week:-1&style=3&x={x}&y={y}&z={z}'
            })
        });

        var lyr_GoogleTerrain_1 = new ol.layer.Tile({
            'title': 'Google Terrain',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=p&x={x}&y={y}&z={z}'
            })
        });

        var lyr_GoogleSatellite_2 = new ol.layer.Tile({
            'title': 'Google Satellite',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });

        var lyr_GoogleRoad_3 = new ol.layer.Tile({
            'title': 'Google Road',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=m&x={x}&y={y}&z={z}'
            })
        });

        var lyr_GoogleLabels_4 = new ol.layer.Tile({
            'title': 'Google Labels',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=h&x={x}&y={y}&z={z}'
            })
        });

        var lyr_GoogleHybrid_5 = new ol.layer.Tile({
            'title': 'Google Hybrid',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}'
            })
        });
var format__6 = new ol.format.GeoJSON();
var features__6 = format__6.readFeatures(json__6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:5181'});
var jsonSource__6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__6.addFeatures(features__6);
var lyr__6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource__6, 
                style: style__6,
                popuplayertitle: "인근 토취장",
                interactive: true,
                title: '<img src="styles/legend/_6.png" /> 인근 토취장'
            });
var format__7 = new ol.format.GeoJSON();
var features__7 = format__7.readFeatures(json__7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:5181'});
var jsonSource__7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__7.addFeatures(features__7);
var lyr__7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource__7, 
                style: style__7,
                popuplayertitle: "선형",
                interactive: true,
    title: '선형<br />\
    <img src="styles/legend/_7_0.png" /> base-본선<br />\
    <img src="styles/legend/_7_1.png" /> base-부체도로<br />\
    <img src="styles/legend/_7_2.png" /> ha-교량(본선)<br />\
    <img src="styles/legend/_7_3.png" /> ha-교량(연결로)<br />\
    <img src="styles/legend/_7_4.png" /> ha-터널<br />'
        });
var format__8 = new ol.format.GeoJSON();
var features__8 = format__8.readFeatures(json__8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:5181'});
var jsonSource__8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__8.addFeatures(features__8);
var lyr__8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource__8, 
                style: style__8,
                popuplayertitle: "노리",
                interactive: true,
                title: '<img src="styles/legend/_8.png" /> 노리'
            });
var format_Line_9 = new ol.format.GeoJSON();
var features_Line_9 = format_Line_9.readFeatures(json_Line_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:5181'});
var jsonSource_Line_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Line_9.addFeatures(features_Line_9);
var lyr_Line_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Line_9, 
                style: style_Line_9,
                popuplayertitle: "선형Line",
                interactive: true,
                title: '<img src="styles/legend/Line_9.png" /> 선형Line'
            });
var group_ = new ol.layer.Group({
                                layers: [lyr__6,],
                                fold: "open",
                                title: "토취장"});
var group_ = new ol.layer.Group({
                                layers: [],
                                fold: "open",
                                title: "문화재"});
var group_ = new ol.layer.Group({
                                layers: [],
                                fold: "open",
                                title: "현황도"});
var group_ = new ol.layer.Group({
                                layers: [],
                                fold: "open",
                                title: "인접사업"});
var group_VWorldMaps = new ol.layer.Group({
                                layers: [],
                                fold: "open",
                                title: "VWorld Maps"});
var group_GoogleMaps = new ol.layer.Group({
                                layers: [lyr_GoogleTraffic_0,lyr_GoogleTerrain_1,lyr_GoogleSatellite_2,lyr_GoogleRoad_3,lyr_GoogleLabels_4,lyr_GoogleHybrid_5,],
                                fold: "open",
                                title: "Google Maps"});

lyr_GoogleTraffic_0.setVisible(true);lyr_GoogleTerrain_1.setVisible(true);lyr_GoogleSatellite_2.setVisible(true);lyr_GoogleRoad_3.setVisible(true);lyr_GoogleLabels_4.setVisible(true);lyr_GoogleHybrid_5.setVisible(true);lyr__6.setVisible(true);lyr__7.setVisible(true);lyr__8.setVisible(true);lyr_Line_9.setVisible(true);
var layersList = [group_GoogleMaps,group_,lyr__7,lyr__8,lyr_Line_9];
lyr__6.set('fieldAliases', {'x': 'x', 'y': 'y', '주 소': '주 소', '예상 매장': '예상 매장', });
lyr__7.set('fieldAliases', {'Layer': 'Layer', 'PaperSpace': 'PaperSpace', 'SubClasses': 'SubClasses', 'Linetype': 'Linetype', 'EntityHand': 'EntityHand', 'Text': 'Text', });
lyr__8.set('fieldAliases', {'Layer': 'Layer', 'PaperSpace': 'PaperSpace', 'SubClasses': 'SubClasses', 'Linetype': 'Linetype', 'EntityHand': 'EntityHand', 'Text': 'Text', });
lyr_Line_9.set('fieldAliases', {'Layer': 'Layer', 'PaperSpace': 'PaperSpace', 'SubClasses': 'SubClasses', 'Linetype': 'Linetype', 'EntityHand': 'EntityHand', 'Text': 'Text', });
lyr__6.set('fieldImages', {'x': 'TextEdit', 'y': 'TextEdit', '주 소': 'TextEdit', '예상 매장': 'TextEdit', });
lyr__7.set('fieldImages', {'Layer': 'TextEdit', 'PaperSpace': 'Range', 'SubClasses': 'TextEdit', 'Linetype': 'TextEdit', 'EntityHand': 'TextEdit', 'Text': 'TextEdit', });
lyr__8.set('fieldImages', {'Layer': '', 'PaperSpace': '', 'SubClasses': '', 'Linetype': '', 'EntityHand': '', 'Text': '', });
lyr_Line_9.set('fieldImages', {'Layer': '', 'PaperSpace': '', 'SubClasses': '', 'Linetype': '', 'EntityHand': '', 'Text': '', });
lyr__6.set('fieldLabels', {'x': 'no label', 'y': 'no label', '주 소': 'no label', '예상 매장': 'no label', });
lyr__7.set('fieldLabels', {'Layer': 'no label', 'PaperSpace': 'inline label - visible with data', 'SubClasses': 'no label', 'Linetype': 'no label', 'EntityHand': 'no label', 'Text': 'no label', });
lyr__8.set('fieldLabels', {'Layer': 'no label', 'PaperSpace': 'no label', 'SubClasses': 'no label', 'Linetype': 'no label', 'EntityHand': 'no label', 'Text': 'no label', });
lyr_Line_9.set('fieldLabels', {'Layer': 'no label', 'PaperSpace': 'no label', 'SubClasses': 'no label', 'Linetype': 'no label', 'EntityHand': 'no label', 'Text': 'no label', });
lyr_Line_9.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});