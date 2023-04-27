import { useState } from "react";
import style from "./SampleModal.module.css";

export default function SampleModalImpl(){

	const [showModal, setShowModal] = useState(false);

	const onClickShowModal = () => {
		setShowModal(true)
	};
	
	return (
		<>
			<button className="btn btn-primary" onClick={ onClickShowModal }>モーダルを開く</button>

			<div 
				className={style.modal} style={{ display: (showModal) ? "block" : "none"}}
				onClick={ () =>  setShowModal(false) }
				>
				<div className={style.modal_inner}>
					ここがモーダルで表示されます
				</div>
			</div>
		</>
	)
}