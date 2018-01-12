setInterval(function() {
	var liveTime = new Date ( );
	var liveHours = liveTime.getHours ( );
	var liveMinutes = liveTime.getMinutes ( );
	var liveMinutesleadingzero = liveMinutes > 9 ? liveMinutes : '0' + liveMinutes;
	var liveDate = liveTime.getDate ( );
	if(liveDate%10==1 && liveDate!=11 && liveDate!=12 && liveDate!= 13) {
		liveDate+="st";
	}
	else if(liveDate%10==2) {
		liveDate+="nd";
	}
	else if(liveDate%10==3) {
		liveDate+="rd";
	}
	else
		liveDate+="th";
	var weekday = new Array(7);
		weekday[0] = "Sunday";
		weekday[1] = "Monday";
		weekday[2] = "Tuesday";
		weekday[3] = "Wednesday";
		weekday[4] = "Thursday";
		weekday[5] = "Friday";
		weekday[6] = "Saturday";
	var liveDay = weekday[liveTime.getDay()];
	var actualmonth = new Array(12);
		actualmonth[0] = "January";
		actualmonth[1] = "February";
		actualmonth[2] = "March";
		actualmonth[3] = "April";
		actualmonth[4] = "May";
		actualmonth[5] = "June";
		actualmonth[6] = "July";
		actualmonth[7] = "August";
		actualmonth[8] = "September";
		actualmonth[9] = "October";
		actualmonth[10] = "November";
		actualmonth[11] = "December";
var liveMonth = actualmonth[liveTime.getMonth ()];
var liveTimeString = "<h1>" + liveHours + ":" + liveMinutesleadingzero + "</h1><h3>" +
liveDay + ", " + liveDate + " " + liveMonth + "</h3>";
document.getElementById("clock").innerHTML = liveTimeString;
}, 1000);