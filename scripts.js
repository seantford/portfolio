var colors = [
	"rgb(255, 0, 0)",
	"rgb(255, 128, 0)",
	"rgb(255, 255, 0)",
	"rgb(128, 255, 0)",
	"rgb(0, 255, 0)",
	"rgb(0, 255, 128)",
	"rgb(0, 255, 255)",
	"rgb(0, 128, 255)",
	"rgb(0, 0, 255)",
	"rgb(128, 0, 255)",
	"rgb(255, 0, 255)",
	"rgb(255, 0, 128)"
]

var colorsBW = [
	"rgb(0, 0, 0)",
	"rgb(255, 255, 255)"
]

function newIndex(array) {
	// return a random index number
	return Math.floor((Math.random() * (array.length)));
};



var bw = false;
var color = false;

//click the button 
$(".bw-btn").click( function(){
	console.log("bw: " +bw+ "  color: " + color);

	//turn other mode off
	color = false;
	console.log("color should now be false: " + color)
	//if this mode is off, turn it on
	if (bw === false) {
		console.log("bw should be false here:  "+bw+" triggering now");
		setInterval(blastBW, 500);

		//set this mode to on
		bw = true;
		console.log("just triggered, should now be true: "+bw);
	} 
});


$(".color-btn").click( function(){
	console.log(color);
	bw = false;
	if (color === false) {
		console.log("color should be false here:  "+color+" triggering now");
		setInterval(blastColor, 500);
		color = true;
		console.log("just triggered, should now be true: "+color);
	}

});



var last;


function blastBW() {
	//pick a random number for the next index
	next = newIndex(colorsBW);
	//if the rgb val of colors[next] is the last color blasted
	while (colorsBW[next] == last) {
		//pick a new random number for the next index
		next = newIndex(colorsBW);
	}
	//change CSS background color to one with the new index
	$("body").css("background-color", colorsBW[next]);
	//set new bg color as last
	last = $("body").css("background-color");
	return last;
};
// setInterval(blastBW, 500);


function blastColor() {

	//pick a random number for the next index
	next = newIndex(colors);
	//console.log("1 next"+next+"colors[next]"+colors[next]+"last"+last);

	//if the rgb val of colors[next] is the last color blasted
	while (colors[next] == last) {

		//pick a new random number for the next index
		next = newIndex(colors);
		//console.log("2 next"+next+"colors[next]"+colors[next]+"last"+last);
	}

	//change CSS background color to one with the new index
	$("#color-blaster").css("background-color", colors[next]);
	console.log("3 next"+next+"colors[next]"+colors[next]+"last"+last);

	//set new bg color as last
	last = $("#color-blaster").css("background-color");
	//console.log("4 next"+next+"colors[next]"+colors[next]+"last"+last);

	return last;
};
setInterval(blastColor, 500);

