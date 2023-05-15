import { TextField, Typography } from "@mui/material";
import { useState } from "react";
import { ObjectSchema } from "yup";

type Props = {
	value: string,
	validate: (value:string) => string | null,
	onChange: (e:React.ChangeEvent<HTMLInputElement>) => void
}

export default function NameReadingInput(props: Props){

	const [isError, setIsError] = useState(false)
	const [errorMessage, setErrorMessage] = useState("")

	const handleOnChange = (e:React.ChangeEvent<HTMLInputElement>) => {

		const value = e.target.value
		props.onChange(e)

		const errorMessage = props.validate(value)
		setIsError(errorMessage != null)
		setErrorMessage(errorMessage ?? "")
	}

	return (
		<>
			<TextField
				label="フリガナ"
				value={props.value}
				onChange={ handleOnChange }
				error={ isError }
				helperText={ errorMessage }
				required
			/>
		</>
	)
}