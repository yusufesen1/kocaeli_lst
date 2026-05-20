ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:32635").setExtent([681286.168789, 4514076.160754, 752443.783007, 4548087.875217]);
var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '<a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var lyr_16072026GebzeNDVIHartias_1 = new ol.layer.Image({
        opacity: 1,
        
    title: '16.07.2026 Gebze NDVI Hartiası<br />\
    <img src="styles/legend/16072026GebzeNDVIHartias_1_0.png" /> -1.0000<br />\
    <img src="styles/legend/16072026GebzeNDVIHartias_1_1.png" /> 0.6476<br />\
    <img src="styles/legend/16072026GebzeNDVIHartias_1_2.png" /> 1.0000<br />\
    <img src="styles/legend/16072026GebzeNDVIHartias_1_3.png" /> 1.0000<br />\
    <img src="styles/legend/16072026GebzeNDVIHartias_1_4.png" /> 1.0000<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/16072026GebzeNDVIHartias_1.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [3264616.009320, 4977400.941849, 3313354.463529, 5019838.910814]
        })
    });
var lyr_16072026GebzeNDBIHartias_2 = new ol.layer.Image({
        opacity: 1,
        
    title: '16.07.2026 Gebze NDBI Hartiası<br />\
    <img src="styles/legend/16072026GebzeNDBIHartias_2_0.png" /> -1.0000<br />\
    <img src="styles/legend/16072026GebzeNDBIHartias_2_1.png" /> -0.5565<br />\
    <img src="styles/legend/16072026GebzeNDBIHartias_2_2.png" /> -0.3079<br />\
    <img src="styles/legend/16072026GebzeNDBIHartias_2_3.png" /> -0.0117<br />\
    <img src="styles/legend/16072026GebzeNDBIHartias_2_4.png" /> 1.0000<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/16072026GebzeNDBIHartias_2.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [3264616.009320, 4977400.941849, 3313354.463529, 5019838.910814]
        })
    });
var lyr_15072016GebzeNDBIHaritas_3 = new ol.layer.Image({
        opacity: 1,
        
    title: '15.07.2016 Gebze NDBI Haritası<br />\
    <img src="styles/legend/15072016GebzeNDBIHaritas_3_0.png" /> -1.0000<br />\
    <img src="styles/legend/15072016GebzeNDBIHaritas_3_1.png" /> -0.4908<br />\
    <img src="styles/legend/15072016GebzeNDBIHaritas_3_2.png" /> -0.3070<br />\
    <img src="styles/legend/15072016GebzeNDBIHaritas_3_3.png" /> -0.0382<br />\
    <img src="styles/legend/15072016GebzeNDBIHaritas_3_4.png" /> 1.0000<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/15072016GebzeNDBIHaritas_3.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [3264616.009320, 4977400.941849, 3313354.463529, 5019838.910814]
        })
    });
var lyr_15072016GebzeNDVIHaritas_4 = new ol.layer.Image({
        opacity: 1,
        
    title: '15.07.2016 Gebze NDVI Haritası<br />\
    <img src="styles/legend/15072016GebzeNDVIHaritas_4_0.png" /> -1.0000<br />\
    <img src="styles/legend/15072016GebzeNDVIHaritas_4_1.png" /> 0.6019<br />\
    <img src="styles/legend/15072016GebzeNDVIHaritas_4_2.png" /> 1.0000<br />\
    <img src="styles/legend/15072016GebzeNDVIHaritas_4_3.png" /> 1.0000<br />\
    <img src="styles/legend/15072016GebzeNDVIHaritas_4_4.png" /> 1.0000<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/15072016GebzeNDVIHaritas_4.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [3264616.009320, 4977400.941849, 3313354.463529, 5019838.910814]
        })
    });
var format_15072016ScaklkHaritas_5 = new ol.format.GeoJSON();
var features_15072016ScaklkHaritas_5 = format_15072016ScaklkHaritas_5.readFeatures(json_15072016ScaklkHaritas_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32635'});
var jsonSource_15072016ScaklkHaritas_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_15072016ScaklkHaritas_5.addFeatures(features_15072016ScaklkHaritas_5);
var lyr_15072016ScaklkHaritas_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_15072016ScaklkHaritas_5, 
                style: style_15072016ScaklkHaritas_5,
                popuplayertitle: '15.07.2016 Sıcaklık Haritası',
                interactive: true,
    title: '15.07.2016 Sıcaklık Haritası<br />\
    <img src="styles/legend/15072016ScaklkHaritas_5_0.png" /> 0 - 32,8<br />\
    <img src="styles/legend/15072016ScaklkHaritas_5_1.png" /> 32,8 - 35,3<br />\
    <img src="styles/legend/15072016ScaklkHaritas_5_2.png" /> 35,3 - 38,4<br />\
    <img src="styles/legend/15072016ScaklkHaritas_5_3.png" /> 38,4 - 42,2<br />\
    <img src="styles/legend/15072016ScaklkHaritas_5_4.png" /> 42,2 - 48,1<br />' });
var format_15072016ScaklkHaritas_6 = new ol.format.GeoJSON();
var features_15072016ScaklkHaritas_6 = format_15072016ScaklkHaritas_6.readFeatures(json_15072016ScaklkHaritas_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32635'});
var jsonSource_15072016ScaklkHaritas_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_15072016ScaklkHaritas_6.addFeatures(features_15072016ScaklkHaritas_6);
var lyr_15072016ScaklkHaritas_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_15072016ScaklkHaritas_6, 
                style: style_15072016ScaklkHaritas_6,
                popuplayertitle: '15.07.2016 Sıcaklık Haritası',
                interactive: true,
    title: '15.07.2016 Sıcaklık Haritası<br />\
    <img src="styles/legend/15072016ScaklkHaritas_6_0.png" /> 0 - 0<br />\
    <img src="styles/legend/15072016ScaklkHaritas_6_1.png" /> 0 - 35,9<br />\
    <img src="styles/legend/15072016ScaklkHaritas_6_2.png" /> 35,9 - 39,6<br />\
    <img src="styles/legend/15072016ScaklkHaritas_6_3.png" /> 39,6 - 43,6<br />\
    <img src="styles/legend/15072016ScaklkHaritas_6_4.png" /> 43,6 - 50,2<br />' });
var format_1507201616072026YllarndakiScaklkDeiimi_7 = new ol.format.GeoJSON();
var features_1507201616072026YllarndakiScaklkDeiimi_7 = format_1507201616072026YllarndakiScaklkDeiimi_7.readFeatures(json_1507201616072026YllarndakiScaklkDeiimi_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32635'});
var jsonSource_1507201616072026YllarndakiScaklkDeiimi_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_1507201616072026YllarndakiScaklkDeiimi_7.addFeatures(features_1507201616072026YllarndakiScaklkDeiimi_7);
var lyr_1507201616072026YllarndakiScaklkDeiimi_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_1507201616072026YllarndakiScaklkDeiimi_7, 
                style: style_1507201616072026YllarndakiScaklkDeiimi_7,
                popuplayertitle: '15.07.2016 - 16.07.2026 Yıllarındaki Sıcaklık Değişimi',
                interactive: true,
    title: '15.07.2016 - 16.07.2026 Yıllarındaki Sıcaklık Değişimi<br />\
    <img src="styles/legend/1507201616072026YllarndakiScaklkDeiimi_7_0.png" /> -5,2 - 0,5<br />\
    <img src="styles/legend/1507201616072026YllarndakiScaklkDeiimi_7_1.png" /> 0,5 - 2,3<br />\
    <img src="styles/legend/1507201616072026YllarndakiScaklkDeiimi_7_2.png" /> 2,3 - 4,2<br />\
    <img src="styles/legend/1507201616072026YllarndakiScaklkDeiimi_7_3.png" /> 4,2 - 8,1<br />\
    <img src="styles/legend/1507201616072026YllarndakiScaklkDeiimi_7_4.png" /> 8,1 - 23,5<br />' });
var format_GebzeSanayiAlanlar_8 = new ol.format.GeoJSON();
var features_GebzeSanayiAlanlar_8 = format_GebzeSanayiAlanlar_8.readFeatures(json_GebzeSanayiAlanlar_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32635'});
var jsonSource_GebzeSanayiAlanlar_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_GebzeSanayiAlanlar_8.addFeatures(features_GebzeSanayiAlanlar_8);
var lyr_GebzeSanayiAlanlar_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_GebzeSanayiAlanlar_8, 
                style: style_GebzeSanayiAlanlar_8,
                popuplayertitle: 'Gebze Sanayi Alanları',
                interactive: true,
                title: '<img src="styles/legend/GebzeSanayiAlanlar_8.png" /> Gebze Sanayi Alanları'
            });

lyr_GoogleSatellite_0.setVisible(true);lyr_16072026GebzeNDVIHartias_1.setVisible(false);lyr_16072026GebzeNDBIHartias_2.setVisible(false);lyr_15072016GebzeNDBIHaritas_3.setVisible(false);lyr_15072016GebzeNDVIHaritas_4.setVisible(false);lyr_15072016ScaklkHaritas_5.setVisible(false);lyr_15072016ScaklkHaritas_6.setVisible(false);lyr_1507201616072026YllarndakiScaklkDeiimi_7.setVisible(true);lyr_GebzeSanayiAlanlar_8.setVisible(false);
var layersList = [lyr_GoogleSatellite_0,lyr_16072026GebzeNDVIHartias_1,lyr_16072026GebzeNDBIHartias_2,lyr_15072016GebzeNDBIHaritas_3,lyr_15072016GebzeNDVIHaritas_4,lyr_15072016ScaklkHaritas_5,lyr_15072016ScaklkHaritas_6,lyr_1507201616072026YllarndakiScaklkDeiimi_7,lyr_GebzeSanayiAlanlar_8];
lyr_15072016ScaklkHaritas_5.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'left': 'left', 'top': 'top', 'right': 'right', 'bottom': 'bottom', 'row_index': 'row_index', 'col_index': 'col_index', '16_LST_mean': '16_LST_mean', '16_LST_min': '16_LST_min', '16_LST_max': '16_LST_max', });
lyr_15072016ScaklkHaritas_6.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'left': 'left', 'top': 'top', 'right': 'right', 'bottom': 'bottom', 'row_index': 'row_index', 'col_index': 'col_index', 'LST_mean': 'LST_mean', 'LST_min': 'LST_min', 'LST_max': 'LST_max', });
lyr_1507201616072026YllarndakiScaklkDeiimi_7.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'left': 'left', 'top': 'top', 'right': 'right', 'bottom': 'bottom', 'row_index': 'row_index', 'col_index': 'col_index', 'LST_25_ort': 'LST_25_ort', 'LST_25_min': 'LST_25_min', 'LST_25_max': 'LST_25_max', 'LST_16_ort': 'LST_16_ort', 'LST_16_min': 'LST_16_min', 'LST_16_max': 'LST_16_max', 'LST_ort_dg': 'LST_ort_dg', 'LST_min_dg': 'LST_min_dg', 'LST_max_dg': 'LST_max_dg', });
lyr_GebzeSanayiAlanlar_8.set('fieldAliases', {'fid': 'fid', '16_LST_hex_mean': '16_LST_hex_mean', '16_LST_hex_min': '16_LST_hex_min', '16_LST_hex_max': '16_LST_hex_max', '25_LST_hex_mean': '25_LST_hex_mean', '25_LST_hex_min': '25_LST_hex_min', '25_LST_hex_max': '25_LST_hex_max', });
lyr_15072016ScaklkHaritas_5.set('fieldImages', {'fid': 'TextEdit', 'id': 'TextEdit', 'left': 'TextEdit', 'top': 'TextEdit', 'right': 'TextEdit', 'bottom': 'TextEdit', 'row_index': 'TextEdit', 'col_index': 'TextEdit', '16_LST_mean': 'TextEdit', '16_LST_min': 'TextEdit', '16_LST_max': 'TextEdit', });
lyr_15072016ScaklkHaritas_6.set('fieldImages', {'fid': 'TextEdit', 'id': 'TextEdit', 'left': 'TextEdit', 'top': 'TextEdit', 'right': 'TextEdit', 'bottom': 'TextEdit', 'row_index': 'TextEdit', 'col_index': 'TextEdit', 'LST_mean': 'TextEdit', 'LST_min': 'TextEdit', 'LST_max': 'TextEdit', });
lyr_1507201616072026YllarndakiScaklkDeiimi_7.set('fieldImages', {'fid': 'TextEdit', 'id': 'TextEdit', 'left': 'TextEdit', 'top': 'TextEdit', 'right': 'TextEdit', 'bottom': 'TextEdit', 'row_index': 'TextEdit', 'col_index': 'TextEdit', 'LST_25_ort': 'TextEdit', 'LST_25_min': 'TextEdit', 'LST_25_max': 'TextEdit', 'LST_16_ort': 'TextEdit', 'LST_16_min': 'TextEdit', 'LST_16_max': 'TextEdit', 'LST_ort_dg': 'TextEdit', 'LST_min_dg': 'TextEdit', 'LST_max_dg': 'TextEdit', });
lyr_GebzeSanayiAlanlar_8.set('fieldImages', {'fid': '', '16_LST_hex_mean': '', '16_LST_hex_min': '', '16_LST_hex_max': '', '25_LST_hex_mean': '', '25_LST_hex_min': '', '25_LST_hex_max': '', });
lyr_15072016ScaklkHaritas_5.set('fieldLabels', {'fid': 'no label', 'id': 'no label', 'left': 'no label', 'top': 'no label', 'right': 'no label', 'bottom': 'no label', 'row_index': 'no label', 'col_index': 'no label', '16_LST_mean': 'no label', '16_LST_min': 'no label', '16_LST_max': 'no label', });
lyr_15072016ScaklkHaritas_6.set('fieldLabels', {'fid': 'no label', 'id': 'no label', 'left': 'no label', 'top': 'no label', 'right': 'no label', 'bottom': 'no label', 'row_index': 'no label', 'col_index': 'no label', 'LST_mean': 'no label', 'LST_min': 'no label', 'LST_max': 'no label', });
lyr_1507201616072026YllarndakiScaklkDeiimi_7.set('fieldLabels', {'fid': 'no label', 'id': 'no label', 'left': 'no label', 'top': 'no label', 'right': 'no label', 'bottom': 'no label', 'row_index': 'no label', 'col_index': 'no label', 'LST_25_ort': 'no label', 'LST_25_min': 'no label', 'LST_25_max': 'no label', 'LST_16_ort': 'no label', 'LST_16_min': 'no label', 'LST_16_max': 'no label', 'LST_ort_dg': 'no label', 'LST_min_dg': 'no label', 'LST_max_dg': 'no label', });
lyr_GebzeSanayiAlanlar_8.set('fieldLabels', {'fid': 'no label', '16_LST_hex_mean': 'no label', '16_LST_hex_min': 'no label', '16_LST_hex_max': 'no label', '25_LST_hex_mean': 'no label', '25_LST_hex_min': 'no label', '25_LST_hex_max': 'no label', });
lyr_GebzeSanayiAlanlar_8.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});