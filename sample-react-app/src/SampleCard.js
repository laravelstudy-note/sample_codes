export default function SampleCard(props) {
	return (
		<div className="card">
			<div class="card-header">{props.title}</div>
			<div className="card-body">{props.children}</div>
			<div class="card-footer">
				<a onClick={props.handler} class="btn btn-primary">
					OK
				</a>
			</div>
		</div>
	);
}
