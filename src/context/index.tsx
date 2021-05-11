import React, { createContext, useReducer, FunctionComponent } from "react";
import { reducer } from "./reducer";

const initialState = {
	data: [],
	loader: true,
	input: "",
};

export interface InitialStateProps {
	data: {
		title: string;
		url: string;
	};
	loader: boolean;
	input: string;
}

export const Context = createContext<InitialStateProps | null | any>(null);

const DataLayer: FunctionComponent = ({ children }) => {
	return (
		<Context.Provider value={useReducer(reducer, initialState)}>
			{children}
		</Context.Provider>
	);
};

export default DataLayer;
