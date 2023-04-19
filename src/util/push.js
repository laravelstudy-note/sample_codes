//npm install --save push.js
import Push from "push.js";

export function init_push() {
	const container = document.createElement("div");
	container.className = "container my-3";

	const btn = document.createElement("button");
	btn.className = "btn btn-secondary";
	btn.textContent = "プッシュ通知";
	btn.addEventListener("click", () => {
		send_push();
	});
	container.appendChild(btn);

	document.body.appendChild(container);
}

function send_push() {
	if (!Push.Permission.has()) {
		// 2. Permissionのリクエスト
		Push.Permission.request(
			() => {
				console.log("onGranted!!");
				send_push();
			},
			() => {
				console.log("onDenied!!");
			}
		);
		return;
	}

	setTimeout(() => {
		Push.create("Push.jsのデモ!", {
			body: "通知テキストです。", // 表示テキスト
			timeout: 4000, // 自動的に閉じる時間 * 4秒
			onClick: function () {
				// 通知バーをクックした時のイベント
				window.focus(); // フォーカス
				this.close(); // 通知を閉じる
			},
		});
		console.log("Push created");
	}, 3000);
}
