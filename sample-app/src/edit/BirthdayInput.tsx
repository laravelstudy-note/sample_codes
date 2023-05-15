import { TextField } from "@mui/material";
import { useState } from "react";

type Props = {
	value: string,
	validate: (value:string) => string | null,
	onChange: (value:string) => void
}

export default function BirthdayInput(props: Props){

	const [isError, setIsError] = useState(false)
	const [errorMessage, setErrorMessage] = useState("")

	const handleOnChange = (e:React.ChangeEvent<HTMLInputElement>) => {

		const value = e.target.value
		props.onChange(value.replaceAll("-","/"))

		const errorMessage = props.validate(value)
		setIsError(errorMessage != null)
		setErrorMessage(errorMessage ?? "")
	}

	return (
		<>
			<TextField
				label="生年月日"
				type="date"
				value={props.value.replaceAll("/","-")}
				onChange={ handleOnChange }
				error={ isError }
				helperText={ errorMessage }
				required
			/>
		</>
	)
}