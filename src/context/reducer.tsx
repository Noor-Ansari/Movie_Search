import { SET_DATA, SET_INPUT, SET_LOADER } from "./const";
import {InitialStateProps} from "./index"
export interface ActionProps {
	type: string;
	payload: any;
}

export const reducer = (state: InitialStateProps, action: ActionProps) => {
	switch (action.type) {
		case SET_DATA:
			return {
				...state,
				data: action.payload,
			};
		case SET_LOADER:
			return {
				...state,
				loader: action.payload,
			};
		case SET_INPUT:
			return {
				...state,
				input: action.payload,
			};
		default:
			return state;
	}
};
