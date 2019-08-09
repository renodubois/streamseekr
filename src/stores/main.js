import { configureStore, createAction, createReducer } from "redux-starter-kit";

export const addCategory = createAction("ADD_CATEGORY");
export const removeCategory = createAction("REMOVE_CATEGORY");

const categories = createReducer([], {
	[addCategory]: (state, action) => {
		const existingCategory = state.find((category) => category.id === action.payload.id);
		if (!existingCategory) {
			state.push(action.payload);
		}
	},
	[removeCategory]: (state, action) => {
		return state.filter((category) => category.name !== action.payload);
	}
});

const store = configureStore({
	reducer: categories
});

export default store;
