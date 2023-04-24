import { ReactNode } from 'react';

type Props = {
	handler: () => void,
	title: string,
	children: any
}

export default function SampleCard(props : Props) {
	return (
		<div className="card">
			<div className="card-header">{props.title}</div>
			<div className="card-body">{props.children}</div>
			<div className="card-footer">
				<a onClick={props.handler} className="btn btn-primary">
					OK
				</a>
			</div>
		</div>
	);
}
