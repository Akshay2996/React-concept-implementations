import "./App.css";
import Main from "./components/Main";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { removeUser } from "./redux/actions";
import { withRouter } from "react-router-dom";

function mapStateToProps(state) {
  return {
    users: state,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ removeUser }, dispatch);
}

const App = withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));

export default App;
