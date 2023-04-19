export function init_files() {
	const container = document.createElement("div");
	container.className = "container my-3";

	{
		const btn = document.createElement("button");
		btn.className = "btn btn-secondary me-2";
		btn.textContent = "ファイルの書き込み";
		btn.addEventListener("click", () => {
			save_file();
		});
		container.appendChild(btn);
	}

	{
		const btn = document.createElement("button");
		btn.className = "btn btn-secondary";
		btn.textContent = "ファイルの読み込み";
		btn.addEventListener("click", () => {
			load_file(container);
		});
		container.appendChild(btn);
	}

	document.body.appendChild(container);
}

async function load_file(container) {
	const options = {
		types: [
			{
				description: "Texts(.txt)",
				accept: {
					"text/*": [".txt"],
				},
			},
		],
		multiple: false,
	};

	const fileReader = new FileReader();
	const [fileHandle] = await window.showOpenFilePicker(options);
	const file = await fileHandle.getFile();
	const fileContents = await file.text();

	const textarea =
		document.getElementById("file-preview") ??
		document.createElement("textarea");
	textarea.setAttribute("id", "file-preview");
	textarea.classList.add("form-control");
	container.appendChild(textarea);

	textarea.value = fileContents;
}

async function save_file() {
	const options = {
		types: [
			{
				description: "Texts(.txt)",
				accept: {
					"text/*": [".txt"],
				},
			},
		],
		multiple: false,
	};

	const fileHandle = await window.showSaveFilePicker(options);
	const writable = await fileHandle.createWritable();
	await writable.write(
		"JavaScriptから書き込み" + new Date().toLocaleDateString()
	);
	await writable.close();
}
