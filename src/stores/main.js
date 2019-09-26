import { configureStore, createSlice } from "redux-starter-kit";

export const categorySlice = createSlice({
	initialState: [],
	reducers: {
		addCategory: (state, action) => {
			const existingCategory = state.find((category) => category.id === action.payload.id);
			if (!existingCategory) {
				state.push(action.payload);
			}
		},
		removeCategory: (state, action) => {
			return state.filter((category) => category.name !== action.payload);
		}
	}
});

const store = configureStore({
	reducer: categorySlice.reducer
});

export default store;
