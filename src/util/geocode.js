export function init_geocode() {
	const btn = document.createElement("button");
	btn.className = "btn btn-secondary";
	btn.textContent = "緯度経度を取得";
	btn.addEventListener("click", () => {
		load_geocode();
	});

	const container = document.createElement("div");
	container.className = "container my-3";
	container.appendChild(btn);

	document.body.appendChild(container);
}

function load_geocode() {
	navigator.geolocation.getCurrentPosition((point) => {
		alert(
			"あなたの現在値" +
				"緯度:" +
				point.coords.latitude +
				"\n" +
				"軽度:" +
				point.coords.longitude
		);
	});
}
