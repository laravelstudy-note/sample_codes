import * as Tone from "tone";

//npm install tone
export function init_audio() {
	const container = document.createElement("div");
	container.className = "container my-3";

	for (let [key, value] of Object.entries([
		"ド",
		"レ",
		"ミ",
		"ファ",
		"ソ",
		"ラ",
		"シ",
		"ド",
	])) {
		const btn = document.createElement("button");
		btn.className = "btn btn-secondary me-2";
		btn.textContent = value;
		btn.addEventListener("click", () => {
			play_sound(key);
		});
		container.appendChild(btn);
	}

	document.body.appendChild(container);
}

function play_sound(key) {
	//音を作ってスピーカーに接続
	const synth = new Tone.Synth().toDestination();

	const sounds = ["C4", "D4", "E4", "F4", "G4", "A4", "B4", "C5"];

	synth.triggerAttackRelease(sounds[key], "8n");
}
