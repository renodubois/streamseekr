import { configureStore } from "redux-starter-kit";
import { categorySlice } from "./categories";
import { filterSlice } from "./filters";

const store = configureStore({
	reducer: {
		categories: categorySlice.reducer,
		filters: filterSlice.reducer
	}
});

export default store;
