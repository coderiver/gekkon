//=include lib/ammap.js
//=include lib/world.js
//=include lib/russiaLow.js
//=include lib/maptheme.js

// europe
(function(){
	var europe = "#a7c66d";

	var dataProvider = {
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
	}
	var map = AmCharts.makeChart("chartdiv", {
		"type": "map",
	  	"theme": "light",
		dataProvider: dataProvider,
		areasSettings: {
			autoZoom: false,
			selectable: true
		}
	});
	map.zoomControl.zoomControlEnabled = false;
	map.addListener("clickMapObject", function (event) {
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
})();

// CIS
(function(){
	var CIS = "#a7c66d";
	var dataProvider = {
		map: "worldLow",
		zoomLevel: 3.5,
		zoomLongitude: 10,
		zoomLatitude: 52,
		areas: [ {
			  title: "Россия",
			  id: "RU",
			  color: CIS
			}, {
			  title: "Казахстан",
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
	};

	var map = AmCharts.makeChart("chartdiv2", {
		"type": "map",
	  	"theme": "light",
		dataProvider: dataProvider,
		areasSettings: {
			autoZoom: false,
			selectable: true
		}
	});

	map.zoomControl.zoomControlEnabled = true;
	map.addListener("clickMapObject", function (event) {
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
})();



// Russia
(function(){
	var CIS = "#a7c66d";
	var dataProvider = {
		// map: "worldLow",
		zoomLevel: 1.2,
		zoomLongitude: 85,
		zoomLatitude: 66,
		mapURL : "/img/russia.svg",
        getAreasFromMap : true
	};

	var map = AmCharts.makeChart("chartdiv3", {
		"type": "map",
	  	"theme": "light",
	  	"language": "ru",
		dataProvider: dataProvider,
		areasSettings: {
			autoZoom: false,
			selectable: true,
			color: "#a7c580"
		},
	});
	
	// setTimeout(function(){
	// 	areas = map.areasProcessor.allObjects; // undefined
	// 	console.log(map.areasProcessor.allObjects);
	// 	for (var i = 0; i < areas.length - 10; i++) {
	// 		map.rollOverMapObject(areas[i]);
	// 	}
	// },1000)
	map.zoomControl.zoomControlEnabled = true;
	map.addListener("clickMapObject", function (event) {
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
})();










