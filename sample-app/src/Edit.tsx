import { useEffect, useState } from "react";
import PersonalInformation from "./PersonalInformation";
import Layout from "./layouts/Layout";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import EditForm from "./edit/EditForm";
import YupEditForm from "./edit/YupEditForm";

type State = {
	item?: PersonalInformation;
};

export default function Edit(){

	const { id } = useParams();
	const location = useLocation()
	const navigate = useNavigate();

	const [state, setState] = useState<State>({} as any)
	
	useEffect(() => {
		if(!location.state){
			navigate("/detail/" + id)
			return
		}

		setState({
			...state,
			item: location.state
		})
	}, [])
	
	return (
		<Layout>
			<h1>編集画面</h1>

			{ state.item && <EditForm item={state.item} />}
		</Layout>
	);
}