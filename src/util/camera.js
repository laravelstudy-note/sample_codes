export function init_camera() {
	const container = document.createElement("div");
	container.className = "container my-3";

	const btn = document.createElement("button");
	btn.className = "btn btn-secondary";
	btn.textContent = "カメラを起動";
	btn.addEventListener("click", () => {
		launch_camera(container);
	});
	container.appendChild(btn);

	document.body.appendChild(container);
}

function launch_camera(container) {
	const btn = document.createElement("button");
	btn.className = "btn btn-secondary";
	btn.textContent = "撮影";
	container.appendChild(btn);

	const video = document.createElement("video");
	video.classList.add("d-block");
	container.appendChild(video);

	const canvas = document.createElement("canvas");
	canvas.width = 640;
	canvas.height = 480;
	container.appendChild(canvas);

	const constraints = {
		audio: false,
		video: {
			width: 640,
			height: 480,
			facingMode: "user",
		},
	};

	navigator.mediaDevices
		.getUserMedia(constraints)
		.then((stream) => {
			video.srcObject = stream;
			video.onloadedmetadata = (e) => {
				video.play();
			};
		})
		.catch((err) => {
			console.log(err.name + ": " + err.message);
		});

	const shutter = () => {
		const ctx = canvas.getContext("2d");

		video.pause();
		setTimeout(() => {
			video.play();
		}, 100);

		// canvasに画像を貼り付ける
		ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
	};

	btn.addEventListener("click", () => {
		shutter();
	});
}
