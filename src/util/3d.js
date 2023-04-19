//npm install --save three

import * as THREE from "three";

export function init_3d() {
	const container = document.createElement("div");
	container.className = "container my-3";
	document.body.appendChild(container);

	const canvas = document.createElement("canvas");
	canvas.width = 640;
	canvas.height = 480;
	container.appendChild(canvas);

	/* 以下、ThreeJSの初期化 */

	const width = 960;
	const height = 540;

	// レンダラーを作成
	const renderer = new THREE.WebGLRenderer({
		canvas: canvas,
	});
	renderer.setSize(width, height);
	renderer.setPixelRatio(window.devicePixelRatio);

	// シーンを作成
	const scene = new THREE.Scene();

	// カメラを作成
	const camera = new THREE.PerspectiveCamera(45, width / height, 1, 10000);
	// カメラの初期座標を設定（X座標:0, Y座標:0, Z座標:0）
	camera.position.set(0, 0, 1000);

	// 箱を作成
	const geometry = new THREE.BoxGeometry(500, 500, 500);
	const material = new THREE.MeshStandardMaterial({ color: 0x0000ff });
	const box = new THREE.Mesh(geometry, material);
	scene.add(box);

	// 平行光源
	const light = new THREE.DirectionalLight(0xffffff);
	light.intensity = 2; // 光の強さを倍に
	light.position.set(1, 1, 1); // ライトの方向
	// シーンに追加
	scene.add(light);

	// 初回実行
	tick();

	function tick() {
		requestAnimationFrame(tick);

		// 箱を回転させる
		box.rotation.x += 0.01;
		box.rotation.y += 0.01;

		// レンダリング
		renderer.render(scene, camera);
	}
}
