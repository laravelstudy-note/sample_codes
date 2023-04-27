export default function SampleModal(){

	const onClickShowModal = () => {

	};
	
	return (
		<>
			<button className="btn btn-primary" onClick={ onClickShowModal }>モーダルを開く</button>

			<div className="modal" style={{ display: "none"}}>
				<div className="modal-inner">
					ここがモーダルで表示されます
				</div>
			</div>
		</>
	)
}