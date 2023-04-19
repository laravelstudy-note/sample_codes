import "./style.css";
import initMemo from "./initMemo";
import "bootstrap/dist/css/bootstrap.min.css";
import { init_geocode } from "./util/geocode";
import { init_camera } from "./util/camera";
import { init_audio } from "./util/audio";
import { init_push } from "./util/push";
import { init_files } from "./util/files";
import { init_3d } from "./util/3d";
import { init_game } from "./util/game";

initMemo();

//init_geocode();

//init_camera();

//init_audio();

//init_push();

//init_files();

//init_3d();

init_game();
