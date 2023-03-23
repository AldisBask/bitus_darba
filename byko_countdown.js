// Set the end times for each period
var end1 = new Date();
end1.setHours(8, 0, 0);
var end2 = new Date();
end2.setHours(10, 0, 0);
var end3 = new Date();
end3.setHours(12, 0, 0);
var end4 = new Date();
end4.setHours(15, 0, 0);
var end5 = new Date();
end5.setHours(17, 0, 0);

// Update the countdown timers every second
var x = setInterval(function() {

	// Get the current time
	var now = new Date().getTime();

	// Calculate the time remaining for each period
	var remaining1 = end1 - now;
	var remaining2 = end2 - now;
	var remaining3 = end3 - now;
	var remaining4 = end4 - now;
	var remaining5 = end5 - now;

	// Update the HTML for each countdown timer
	document.getElementById("countdown1").innerHTML = formatTime(remaining1);
	document.getElementById("countdown2").innerHTML = formatTime(remaining2);
	document.getElementById("countdown3").innerHTML = formatTime(remaining3);
	document.getElementById("countdown4").innerHTML = formatTime(remaining4);
	document.getElementById("countdown5").innerHTML = formatTime(remaining5);

	// If the timer for a period has expired, show "Time's up!"
	if (remaining1 < 0) {
		document.getElementById("countdown1").innerHTML = "Time's up!";
	}
	if (remaining2 < 0) {
		document.getElementById("countdown2").innerHTML = "Time's up!";
	}
	if (remaining3 < 0) {
		document.getElementById("countdown3").innerHTML = "Time's up!";
	}
	if (remaining4 < 0) {
		document.getElementById("countdown4").innerHTML = "Time's up!";
	}
	if (remaining5 < 0) {
		document.getElementById("countdown5").innerHTML = "Time's up!";
	}
}, 1000);

// Format the time remaining as "hh:mm:ss"
function formatTime(ms) {
	var seconds = Math.floor(ms / 1000);
	var minutes = Math.floor(seconds / 60);
	var hours = Math.floor(minutes / 60);
	minutes %= 60;
	seconds %= 60;
	return hours + ":" + padZero(minutes) + ":" + padZero(seconds);
}

// Add leading zero to single-digit numbers
function padZero(num) {
	return num < 10 ? "0" + num : num;
}

