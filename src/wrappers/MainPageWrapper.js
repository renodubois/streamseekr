import { connect } from "react-redux";
import MainPage from "../MainPage";
import { addCategory, removeCategory } from "../stores/main";

const mapStateToProps = (state) => {
	return {
		categories: state
	};
};
const mapDispatchToProps = (dispatch) => {
	return {
		onCategoryAdd: (name, id) => {
			dispatch(addCategory({ name, id }));
		},
		onCategoryRemove: (name) => {
			dispatch(removeCategory(name));
		}
	};
};

const MainPageWrapper = connect(
	mapStateToProps,
	mapDispatchToProps
)(MainPage);

export default MainPageWrapper;
