/*function getLocation() {
	if (navigator.geolocation) {navigator.geolocation.getCurrentPosition(showPosition);}
	else { return "Not Supported"; }
}
function showPosition(position) {return "Latitude: " + position.coords.latitude + " & Longitude: " + position.coords.longitude;}*/

function screenDimension() { return "Screen WxH: " + screen.width + "x" + screen.height}
function colorDepth() {return "Color Depth: " + screen.colorDepth}
function pixelDepth() {return "Pixel Depth: " + screen.pixelDepth}

function parseInfo() {
	var text = [document.getElementById('i1'), document.getElementById('i2'), document.getElementById('i3'), document.getElementById('i4'), document.getElementById('i5'), document.getElementById('i6'), document.getElementById('i7')]
	var information = [navigator["appCodeName"],navigator["platform"],navigator["appVersion"],navigator["language"],screenDimension(),colorDepth(),pixelDepth()]
	text[0].textContent = "Browser: " + information[0] + " " + information[2]
	text[1].textContent = "System: " + information[1]
	text[2].textContent = "Language: " + information[3]
	text[3].textContent = information[4]
	text[4].textContent = information[5]
	text[5].textContent = information[6]
}
