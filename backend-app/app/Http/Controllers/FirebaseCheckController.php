<?php

namespace App\Http\Controllers;

use Exception;
use Illuminate\Http\Request;
use Firebase\JWT\JWT;
use Firebase\JWT\Key;

class FirebaseCheckController extends Controller {
	//
	function check(Request $request) {

		$token = $request->header('Authorization');

		//Tokenは「Bearer トークン」の形になっているはず
		if (strpos($token, "Bearer ") === false) {
			return response()->json([
				"error" => "無効なトークンです"
			]);
		}

		//Tokenを切り出す
		$token = substr($token, strlen("Bearer "));



		//JWTのデコードを行う
		$jwt = explode(".", $token);
		if (count($jwt) != 3) {
			return response()->json([
				"error" => "無効なトークンです(Invalid JWT)"
			]);
		}

		list($header, $payload, $signature) = $jwt;

		$header = json_decode(base64_decode($header), true);
		$payload = json_decode(base64_decode($payload), true);
		if (!$header || !$payload) {
			return response()->json([
				"error" => "無効なトークンです(デコード出来ません)"
			]);
		}

		//署名が正しいかを検証する
		/*
		if(false == $this->checkSignaruete($token)){
			return response()->json([
				"error" => "無効なトークンです(signature)"
			]);
		}
		*/


		//user idを検証する
		$user_id = $payload["user_id"];

		return response()->json([
			"user_id" => $user_id,
		]);
	}

	function checkSignaruete($jwt) {

		list($header, $payload, $signature) = explode(".", $jwt);

		//秘密鍵を取得する
		$key_url = "https://www.googleapis.com/robot/v1/metadata/x509/securetoken@system.gserviceaccount.com";
		$keys = json_decode(file_get_contents($key_url), true);

		//どの鍵を使うかをkidから判定する
		$header = json_decode(base64_decode($header), true);
		$publicKey = $keys[$header["kid"]];

		try {
			$decoded = JWT::decode($jwt, new Key($publicKey, "RS256"));
			return true;
		} catch (Exception $e) {
			return false;
		}
	}
}
