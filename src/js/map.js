//=include lib/ammap.js
//=include lib/world.js
//=include lib/maptheme.js
var map = AmCharts.makeChart("chartdiv", {

	"type": "map",
  "theme": "light",

    dataProvider: {
      map: "worldLow",
      zoomLevel: 3.5,
      zoomLongitude: 10,
      zoomLatitude: 52,
      areas: [ {
          title: "Austria",
          id: "AT",
          color: "#67b7dc",
          customData: "1995"
        }, {
          title: "Ireland",
          id: "IE",
          color: "#67b7dc",
          customData: "1973"
        }, {
          title: "Denmark",
          id: "DK",
          color: "#67b7dc",
          customData: "1973"
        }, {
          title: "Finland",
          id: "FI",
          color: "#67b7dc",
          customData: "1995"
        }, {
          title: "Sweden",
          id: "SE",
          color: "#67b7dc",
          customData: "1995"
        }, {
          title: "Great Britain",
          id: "GB",
          color: "#67b7dc",
          customData: "1973"
        }, {
          title: "Italy",
          id: "IT",
          color: "#67b7dc",
          customData: "1957"
        }, {
          title: "France",
          id: "FR",
          color: "#67b7dc",
          customData: "1957"
        }, {
          title: "Spain",
          id: "ES",
          color: "#67b7dc",
          customData: "1986"
        }, {
          title: "Greece",
          id: "GR",
          color: "#67b7dc",
          customData: "1981"
        }, {
          title: "Germany",
          id: "DE",
          color: "#67b7dc",
          customData: "1957"
        }, {
          title: "Belgium",
          id: "BE",
          color: "#67b7dc",
          customData: "1957"
        }, {
          title: "Luxembourg",
          id: "LU",
          color: "#67b7dc",
          customData: "1957"
        }, {
          title: "Netherlands",
          id: "NL",
          color: "#67b7dc",
          customData: "1957"
        }, {
          title: "Portugal",
          id: "PT",
          color: "#67b7dc",
          customData: "1986"
        },

        {
          title: "Lithuania",
          id: "LT",
          color: "#ebdb8b",
          customData: "2004"
        }, {
          title: "Latvia",
          id: "LV",
          color: "#ebdb8b",
          customData: "2004"
        }, {
          title: "Czech Republic ",
          id: "CZ",
          color: "#ebdb8b",
          customData: "2004"
        }, {
          title: "Slovakia",
          id: "SK",
          color: "#ebdb8b",
          customData: "2004"
        }, {
          title: "Slovenia",
          id: "SI",
          color: "#ebdb8b",
          customData: "2004"
        }, {
          title: "Estonia",
          id: "EE",
          color: "#ebdb8b",
          customData: "2004"
        }, {
          title: "Hungary",
          id: "HU",
          color: "#ebdb8b",
          customData: "2004"
        }, {
          title: "Cyprus",
          id: "CY",
          color: "#ebdb8b",
          customData: "2004"
        }, {
          title: "Malta",
          id: "MT",
          color: "#ebdb8b",
          customData: "2004"
        }, {
          title: "Poland",
          id: "PL",
          color: "#ebdb8b",
          customData: "2004"
        },

        {
          title: "Romania",
          id: "RO",
          color: "#83c2ba",
          customData: "2007"
        }, {
          title: "Bulgaria",
          id: "BG",
          color: "#83c2ba",
          customData: "2007"
        }, {
          title: "Croatia",
          id: "HR",
          color: "#db8383",
          customData: "2013"
        }
      ]
    },
	"areasSettings": {
		"autoZoom": false,
		// "selectedColor": "#CC0000",
    "selectable": true
	}
	// "smallMap": {}
});
map.zoomControl.zoomControlEnabled = false;
map.addListener("clickMapObject", function (event) {
    // html we would insert into bubble
    html  = event.mapObject.customData+'===';
    html += event.mapObject.title+'===';
    //click position
    html += event.event.pageX+'===';
    html += event.event.pageY;
    $('.mybubble').html(html);
});
var map2 = AmCharts.makeChart("chartdiv2", {

  "type": "map",
  "theme": "light",

    dataProvider: {
      map: "worldLow",
      zoomLevel: 3.5,
      zoomLongitude: 10,
      zoomLatitude: 52,
      areas: [ {
          title: "Austria",
          id: "AT",
          color: "#67b7dc",
          customData: "1995"
        }, {
          title: "Ireland",
          id: "IE",
          color: "#67b7dc",
          customData: "1973"
        }, {
          title: "Denmark",
          id: "DK",
          color: "#67b7dc",
          customData: "1973"
        }, {
          title: "Finland",
          id: "FI",
          color: "#67b7dc",
          customData: "1995"
        }, {
          title: "Sweden",
          id: "SE",
          color: "#67b7dc",
          customData: "1995"
        }, {
          title: "Great Britain",
          id: "GB",
          color: "#67b7dc",
          customData: "1973"
        }, {
          title: "Italy",
          id: "IT",
          color: "#67b7dc",
          customData: "1957"
        }, {
          title: "France",
          id: "FR",
          color: "#67b7dc",
          customData: "1957"
        }, {
          title: "Spain",
          id: "ES",
          color: "#67b7dc",
          customData: "1986"
        }, {
          title: "Greece",
          id: "GR",
          color: "#67b7dc",
          customData: "1981"
        }, {
          title: "Germany",
          id: "DE",
          color: "#67b7dc",
          customData: "1957"
        }, {
          title: "Belgium",
          id: "BE",
          color: "#67b7dc",
          customData: "1957"
        }, {
          title: "Luxembourg",
          id: "LU",
          color: "#67b7dc",
          customData: "1957"
        }, {
          title: "Netherlands",
          id: "NL",
          color: "#67b7dc",
          customData: "1957"
        }, {
          title: "Portugal",
          id: "PT",
          color: "#67b7dc",
          customData: "1986"
        },

        {
          title: "Lithuania",
          id: "LT",
          color: "#ebdb8b",
          customData: "2004"
        }, {
          title: "Latvia",
          id: "LV",
          color: "#ebdb8b",
          customData: "2004"
        }, {
          title: "Czech Republic ",
          id: "CZ",
          color: "#ebdb8b",
          customData: "2004"
        }, {
          title: "Slovakia",
          id: "SK",
          color: "#ebdb8b",
          customData: "2004"
        }, {
          title: "Slovenia",
          id: "SI",
          color: "#ebdb8b",
          customData: "2004"
        }, {
          title: "Estonia",
          id: "EE",
          color: "#ebdb8b",
          customData: "2004"
        }, {
          title: "Hungary",
          id: "HU",
          color: "#ebdb8b",
          customData: "2004"
        }, {
          title: "Cyprus",
          id: "CY",
          color: "#ebdb8b",
          customData: "2004"
        }, {
          title: "Malta",
          id: "MT",
          color: "#ebdb8b",
          customData: "2004"
        }, {
          title: "Poland",
          id: "PL",
          color: "#ebdb8b",
          customData: "2004"
        },

        {
          title: "Romania",
          id: "RO",
          color: "#83c2ba",
          customData: "2007"
        }, {
          title: "Bulgaria",
          id: "BG",
          color: "#83c2ba",
          customData: "2007"
        }, {
          title: "Croatia",
          id: "HR",
          color: "#db8383",
          customData: "2013"
        }
      ]
    },
  "areasSettings": {
    "autoZoom": false,
    // "selectedColor": "#CC0000",
    "selectable": true
  }
  // "smallMap": {}
});
map2.zoomControl.zoomControlEnabled = false;
map2.addListener("clickMapObject", function (event) {
    // html we would insert into bubble
    html  = event.mapObject.customData+'===';
    html += event.mapObject.title+'===';
    //click position
    html += event.event.pageX+'===';
    html += event.event.pageY;
    $('.mybubble2').html(html);
});
