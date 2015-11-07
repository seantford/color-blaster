var colors = [
	"#FF0000",
	"#ff8000",
	"#ffff00",
	"#80ff00",
	"#00ff00",
	"#00ff80",
	"#00ffff",
	"#007fff",
	"#0000ff",
	"#7f00ff",
	"#ff00ff",
	"#ff0080", 
	"#ffffff",
	"#000000"
]

//function will repeat every 800ms
setInterval(function(){
	//random number color index
	var x = Math.floor(Math.random() * (colors.length + 1));
	//change CSS background color to one with new index
	$("body").css("background", colors[x]);
}, 800);
