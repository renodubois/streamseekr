import { createSlice } from "redux-starter-kit";

export const filterSlice = createSlice({
	initialState: [],
	reducers: {
		addFilter: (state, action) => {
			const existingFilter = state.find(
				(filter) => filter.type === action.payload.type && filter.optoins === action.payload.options
			);
			const newFilter = {
				id: Math.ceil(Math.random() * 100000),
				...action.payload
			};
			if (!existingFilter) {
				state.push(newFilter);
			}
		},
		removeFilter: (state, action) => {
			return state.filter((category) => category.id !== action.payload);
		}
	}
});
