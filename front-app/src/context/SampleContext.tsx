import { createContext, useContext } from "react";

//Contextの形
type SampleContextType = {
	counter: number;
	setCounter: (value:number) => void;
}

//作ったContext
export const SampleContext = createContext<SampleContextType>({
	counter: 0,
	setCounter: (value:number) => {}
});

//SampleContextを使う
export const useSampleContext = () => {
	return useContext(SampleContext);
}