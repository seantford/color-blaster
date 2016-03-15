var colors = [
	//"#FF0000"
	"rgb(255, 0, 0)",
	//"#ff8000"
	"rgb(255, 128, 0)",
	//"#ffff00"
	"rgb(255, 255, 0)",
	//"#80ff00"
	"rgb(128, 255, 0)",
	//"#00ff00"
	"rgb(0, 255, 0)",
	//"#00ff80"
	"rgb(0, 255, 128)",
	//"#00ffff"
	"rgb(0, 255, 255)",
	//"#007fff"
	"rgb(0, 127, 255)",
	//"#0000ff"
	"rgb(0, 0, 255)",
	//"#7f00ff"
	"rgb(127, 0, 255)",
	//"#ff00ff"
	"rgb(255, 0, 255)",
	//"#ff0080"
	"rgb(255, 0, 128)", 
	//"#ffffff"
	"rgb(255, 255, 255)"
]



//function will repeat every 800ms without repeating colors
setInterval(function(){
	//store current background color 
	var current = $("body").css( "background-color" );
		console.log("the current bg color is " + current);

	//random number color index
	var next = Math.floor(Math.random() * (colors.length + 1));
		console.log("next will be " + colors[next]);

	//if the next color is equal to the current color, pick a new random color

	if ( current == colors[next] ) {

		//next will be the previous color in the array
		next -= 1;

		if (next < 0) {

			next +=2;
			console.log("real oops, next will be " + colors[next]);
		}

		console.log("oops, next will be " + colors[next]);

	}

	

	//change CSS background color to one with new index
	$("body").css("background", colors[next]);
		console.log("just changed it to " + colors[next]);


}, 800);


//alert popup with instructions
alert("Press 'cmd + shift + F' to go fullscreen (Mac), then press 'esc' to hide the mouse!")
	//NEEDS WINDOWS INSTRUCTIONS


	//TO DO:

//stop colors from repeating

//upon page load, theres a window w/instructions and $ AD $ SPACE $ 

//different color palettes

//disable screen saver

//make mouse invisible after inactivity

//fullscreen toggle button
	//when mouse is moving make visible
	//invisible when mouse is idle

//cut out jQuery if possible/practical in the end


