import { connect } from "react-redux";
import NavBar from "./NavBar";
import { AppStateType } from "../../redux/redux-store";

const mapStateToProps = (state: AppStateType) => {
  return {
    friendsData: state.sidebar,
  };
};

const NavBarContainer = connect(mapStateToProps)(NavBar);

export default NavBarContainer;
