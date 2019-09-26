import { configureStore } from "redux-starter-kit";
import { categorySlice } from "./category";

const store = configureStore({
	reducer: {
		categories: categorySlice.reducer
	}
});

export default store;
