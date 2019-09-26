import { configureStore } from "redux-starter-kit";
import { categorySlice } from "./categories";

const store = configureStore({
	reducer: {
		categories: categorySlice.reducer
	}
});

export default store;
