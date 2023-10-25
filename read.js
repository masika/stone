const evtSource = new EventSource("https://tightrope.jp/stone/server/stream.php", {
  withCredentials: true,
});

evtSource.addEventListener("ping", function (event) {
	console.log(event)
  const newElement = document.createElement("li");
  const eventList = document.getElementById("list");
  const time = JSON.parse(event.data).time;
  newElement.textContent = "ping at " + time;
  eventList.appendChild(newElement);
});

evtSource.onerror = function (err) {
  console.error("EventSource failed:", err);
};