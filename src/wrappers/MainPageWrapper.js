import { connect } from "react-redux";
import MainPage from "../MainPage";
import { categorySlice } from "../stores/categories";

const mapStateToProps = (state) => {
	return {
		categories: state.categories
	};
};
const mapDispatchToProps = (dispatch) => {
	const { actions } = categorySlice;
	return {
		onCategoryAdd: (name, id) => {
			dispatch(actions.addCategory({ name, id }));
		},
		onCategoryRemove: (name) => {
			dispatch(actions.removeCategory(name));
		}
	};
};

const MainPageWrapper = connect(
	mapStateToProps,
	mapDispatchToProps
)(MainPage);

export default MainPageWrapper;
