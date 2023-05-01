import personalInformations from "./personal_infomation.json";

export default function SampleCustomer(){

	const persona_infomations = personalInformations["personal-infomations"] as any;
	const items = persona_infomations["personal-infomation"] as any[];

	const renderTableRow = (item:any) => {
		return (
			<tr>
				<td>{item["連番"]}</td>
				<td>{item["氏名"]}</td>
				<td>{item["氏名_カタカナ"]}</td>
			</tr>
		);
	}

	return (
		<>
			<h1>個人情報一覧</h1>

			<table>
				<tbody>
					{
						items.map((item:any) => {
							return renderTableRow(item)
						})
					}
				</tbody>
			</table>
		</>
	)
}