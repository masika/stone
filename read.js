const evtSource = new EventSource("https://tightrope.jp/stone/server/stream.php");
let rpm_txt=document.getElementById("rpm_txt");
let stone=document.getElementById("stone");
let rpm=0
let deg=0

evtSource.addEventListener("ping", function (event) {
	//console.log(event)
	const data=JSON.parse(event.data)
	rpm=data.rpm
	rpm_txt.innerText=rpm
});

evtSource.onerror = function (err) {
  console.error("EventSource failed:", err);
};

evtSource.onopen = function() {
	console.log("Connection to server opened.");
};


setInterval(function(){
	let rps = rpm / 60;
	let r=rps/20
	deg+=360 * r
	deg=deg%360;

	stone.style.transform = "rotate(" + deg + "deg)";
},1000/20)
