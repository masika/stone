//setTimeout( function() {

	
const evtSource = new EventSource("https://tightrope.jp/stone/server/stream.php");

// evtSource.addEventListener("ping", function (event) {
// 	console.log(event)
//   const newElement = document.createElement("li");
//   const eventList = document.getElementById("list");
//   const time = JSON.parse(event.data).time;
//   newElement.textContent = "ping at " + time;
//   eventList.appendChild(newElement);
// });

evtSource.onerror = function (err) {
  console.error("EventSource failed:", err);
};

evtSource.onopen = function() {
	console.log("Connection to server opened.");
};


evtSource.onmessage = function(e) {
	console.log("onmessage");
};

//},1500);