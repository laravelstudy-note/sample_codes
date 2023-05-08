import { createContext, useState } from "react"

type AppState = {
	loggedIn: boolean,
	username: string,
	drawer_open: boolean
}

type AppStateContextType = {
	state : AppState,
	setState : React.Dispatch<React.SetStateAction<AppState>>
}

export const AppStateContext = createContext<AppStateContextType>({} as AppStateContextType);

export const AppStateProvider = (props:{ children?: React.ReactNode }) => {

	const [appState, setAppState] = useState<AppState>({
		loggedIn: false,
		username: "",
		drawer_open: false
	})

	return (
		<AppStateContext.Provider value={{ state: appState, setState: setAppState}}>
			{props.children}
		</AppStateContext.Provider>
	)
}