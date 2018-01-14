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
	module: 'MMM-Globe',
	position: 'center',
	config: {
		style: 'geoColor',
		imageSize: 300,
		ownImagePath:'',
		updateInterval: 10*60*1000
	}
},
		{
	module: 'MMM-TouchPlayerBasic',
		position: 'bottom_right',
		config: {
			stations: [
				"R radio", // Separation by space, First part "R" is the .png image filename, the second is .sh script name
				"P playlist" // The default icons are R for radiostation and P for playlist icon.
				]

		}

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
