function geturls(thisx) {
	document.getElementById("videos").innerHTML = "";
	var xmlHttp = new XMLHttpRequest();
	xmlHttp.open("GET", "https://yt-url-grabber.technoneverdies.repl.co/vid/" + thisx.value, true); // false for synchronous request
	xmlHttp.onload = function () {
		JSON.parse(xmlHttp.responseText).forEach(function (x) {
			console.log(x);
			document.getElementById("videos").innerHTML += `
<div onclick="replaceimage(this, '`+x[2]+`');" style="clear:both;" class="transition duration-500 ease-in-out bg-white inline-block rounded shadow-md border h-auto w-11/12 m-4 p-2 pr- w-auto hover:bg-gray-100 cursor-pointer">
		
		<image class="m-2 float-left" width="320px" height="auto" src="`+ x[1] + `">
		<h5 class="text-3xl float-left font-bold mt-0 mr-0 ml-0">`+ x[0] + `</h5><br><br>
		<p style='white-space: pre-line;'>`+ x[3] +` </p>
	</div><br> 
`;

		})

	}
	document.getElementById("videos").innerHTML.replace("(https?:\/\/([a-zA-Z0-9_\-]+\.)+(mobi|[a-z]{2,3}))", )
	xmlHttp.send();
}

function homepage() {
	document.getElementById("videos").innerHTML = "";
	var xmlHttp = new XMLHttpRequest();
	xmlHttp.open("GET", "https://yt-url-grabber.technoneverdies.repl.co/homepage", true); // false for synchronous request
	xmlHttp.onload = function () {
		JSON.parse(xmlHttp.responseText).forEach(function (x) {
			console.log(x);
			document.getElementById("videos").innerHTML += `
<div onclick="location.href = '`+ x[2] + `';" class="float-left transition duration-500 ease-in-out bg-white rounded shadow-md border m-4 p-2 pr- w-auto hover:bg-gray-100 cursor-pointer">
		<h5 class="text-3xl font-bold mb-4 mt-0 mr-0 ml-0">`+ x[0] + `</h5>
		<image class="m-0" width="320px" height="auto" src="`+ x[1] + `">
	</div>
`;

		})

	}
	xmlHttp.send();
}

setTimeout(function() {
	var x = document.getElementById("input");
	x.addEventListener("keyup", function (event) {
		// Number 13 is the "Enter" key on the keyboard
		console.log(event.keyCode);
		if (event.keyCode === 13) {
			// Cancel the default action, if needed
			event.preventDefault();
			// Trigger the button element with a click
			x.blur();
			geturls(x);
		}
	});
	homepage();
}, 2000);

function replaceimage(this_, url) {
	this_.getElementsByTagName("img")[0].outerHTML = `<video class="m-2 float-left" width="320" height="auto" controls autoplay>
  <source  src="`+url+`" type="video/mp4">
Your browser does not support the video tag.
</video>`
}