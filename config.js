/* Magic Mirror Config Sample
 *
 * By Michael Teeuw http://michaelteeuw.nl
 * MIT Licensed.
 *
 * For more information how you can configurate this file
 * See https://github.com/MichMich/MagicMirror#configuration
 *
 */

var config = {
	address: "localhost", // Address to listen on, can be:
	                      // - "localhost", "127.0.0.1", "::1" to listen on loopback interface
	                      // - another specific IPv4/6 to listen on a specific interface
	                      // - "", "0.0.0.0", "::" to listen on any interface
	                      // Default, when address config is left out, is "localhost"
	port: 8080,
	ipWhitelist: ["127.0.0.1", "::ffff:127.0.0.1", "::1"], // Set [] to allow all IP addresses
	                                                       // or add a specific IPv4 of 192.168.1.5 :
	                                                       // ["127.0.0.1", "::ffff:127.0.0.1", "::1", "::ffff:192.168.1.5"],
	                                                       // or IPv4 range of 192.168.3.0 --> 192.168.3.15 use CIDR format :
	                                                       // ["127.0.0.1", "::ffff:127.0.0.1", "::1", "::ffff:192.168.3.0/28"],

	language: "ro",
	timeFormat: 24,
	units: "metric",

	modules: [
		{
			module: "alert",
		},
		{
			module: "updatenotification",
			position: "top_bar"
		},
		{
			module: "clock",
			position: "top_left"
		},
		{
			module: "calendar",
			header: "CALENDAR SARBATORI",
			position: "top_left",
			config: {
				calendars: [
					{
						symbol: "calendar-check-o ",
						url: "webcal://www.calendarlabs.com/ical-calendar/holidays/romania-holidays-64.ics"
					}
				]
			}
		},
		{
			module: "compliments",
			position: "lower_third"
		},
		{
			module: "currentweather",
			position: "top_right",
			config: {
				location: "Targoviste",
				locationID: "665024",  //ID from http://www.openweathermap.org/help/city_list.txt
				appid: "9a0e3e4ae7351da2114061bd7492886f"
			}
		},
		{
			module: "weatherforecast",
			position: "top_right",
			header: "Vremea probabila",
			config: {
				location: "Targoviste",
				locationID: "665024",  //ID from http://www.openweathermap.org/help/city_list.txt
				appid: "9a0e3e4ae7351da2114061bd7492886f"
			}
},
		{
		module: 'MMM-YouTube-API',
		position: 'top_center',
                config: {
                    //Config here
                }
    },
		{
        module: 'MMM-Hello-Mirror',
        position: 'lower_third',
        config: {
            // See 'Configuration options' for more information.
        }
    },
		{
		module: 'MMM-Globe',
		position: 'left',	// This can be any of the regions. Best results in lower_third
		config: {
                size:"small", // Globe size. See configuration options below for more options
                locations: [ 
                    // Fill with location Objects if desired
                    // e.g.
                    // {lat:37.77493,lng:-122.41942, label: "San Francisco"},
                    // {lat:-23.5475,lng:-46.63611, label: "Sao Paulo"}
                    
                    // Individual values must be seperated by a comma. 
                    // You can look up the latitude and longitude for a specific location on Google Maps.
                ]
		}
		},
		{
    module: 'MMM-Remote-Control', 
    position: 'bottom_right'
},
		{
			module: "newsfeed",
			position: "bottom_bar",
			config: {
				feeds: [
					{
						title: "Stiri",
						url: "http://www.nytimes.com/services/xml/rss/nyt/HomePage.xml"
					}
				],
				showSourceTitle: true,
				showPublishDate: true
			}
		},
	]

};

/*************** DO NOT EDIT THE LINE BELOW ***************/
if (typeof module !== "undefined") {module.exports = config;}
