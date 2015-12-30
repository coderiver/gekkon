//=include lib/ammap.js
//=include lib/world.js
//=include lib/maptheme.js
var europe = "#a7c66d";
var mapEurope = AmCharts.makeChart("chartdiv", {

	"type": "map",
  	"theme": "light",
	dataProvider: {
	  map: "worldLow",
	  zoomLevel: 3.5,
	  zoomLongitude: 10,
	  zoomLatitude: 52,
	  areas: [ {
		  title: "Австрия",
		  id: "AT",
		  color: europe
		}, {
		  title: "Ирландия",
		  id: "IE",
		  color: europe
		}, {
		  title: "Даниия",
		  id: "DK",
		  color: europe
		}, {
		  title: "Финляндия",
		  id: "FI",
		  color: europe
		}, {
		  title: "Швеция",
		  id: "SE",
		  color: europe
		}, {
		  title: "Великобритания",
		  id: "GB",
		  color: europe
		}, {
		  title: "Италия",
		  id: "IT",
		  color: europe
		}, {
		  title: "Франция",
		  id: "FR",
		  color: europe
		}, {
		  title: "Украина",
		  id: "UA",
		  color: europe
		}, {
		  title: "Польша",
		  id: "PL",
		  color: europe
		}
	  ]
	},
	areasSettings: {
		autoZoom: false,
		selectable: true
	}
});
mapEurope.zoomControl.zoomControlEnabled = false;
mapEurope.addListener("clickMapObject", function (event) {
	// html we would insert into bubble
	html  = event.mapObject.customData+'===';
	html += event.mapObject.title+'===';
	//click position
	html += event.event.clientX+'===';
	html += event.event.clientY;
	var left = event.chart.mouseX;
	var top = event.chart.mouseY;
	var id = event.mapObject.id;
	//var fieldCoords = event.currentTarget.getBoundingClientRect();
	$('.js-mybubble').removeClass("is-active");
	$('#'+id).css({
		left: left,
		top: top,
	}).addClass("is-active");
	$(".js-close-mybubble").on("click", function() {
		$(".js-mybubble").removeClass("is-active");
		return false;
	});
});

var CIS = "#a7c66d";
var mapCIS = AmCharts.makeChart("chartdiv2", {

	"type": "map",
  	"theme": "light",
	dataProvider: {
	  map: "worldLow",
	  zoomLevel: 3.5,
	  zoomLongitude: 10,
	  zoomLatitude: 52,
	  areas: [ {
		  title: "Россия",
		  id: "RU",
		  color: CIS
		}, {
		  title: "Казахстана",
		  id: "KZ",
		  color: CIS
		}, {
		  title: "Aзербайджан",
		  id: "AZ",
		  color: CIS
		}, {
		  title: "Узбекистан",
		  id: "UZ",
		  color: CIS
		}, {
		  title: "Беларусь",
		  id: "BY",
		  color: CIS
		}
	  ]
	},
	areasSettings: {
		autoZoom: false,
		selectable: true
	}
});

mapCIS.zoomControl.zoomControlEnabled = false;
mapCIS.addListener("clickMapObject", function (event) {
	// html we would insert into bubble
	html  = event.mapObject.customData+'===';
	html += event.mapObject.title+'===';
	//click position
	html += event.event.clientX+'===';
	html += event.event.clientY;
	var left = event.chart.mouseX;
	var top = event.chart.mouseY;
	var id = event.mapObject.id;
	//var fieldCoords = event.currentTarget.getBoundingClientRect();
	$('.js-mybubble').removeClass("is-active");
	$('#'+id).css({
		left: left,
		top: top,
	}).addClass("is-active");
	$(".js-close-mybubble").on("click", function() {
		$(".js-mybubble").removeClass("is-active");
		return false;
	});
});