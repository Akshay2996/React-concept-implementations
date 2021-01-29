import "./App.css";
import Main from "./components/Main";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as actions from "./redux/actions";
import { withRouter } from "react-router-dom";

function mapStateToProps(state) {
	return {
		users: state.users,
		count: state.count,
	};
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators(actions, dispatch);
}

const App = withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));

export default App;
