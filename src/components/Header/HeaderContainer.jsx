import React from "react";
import { connect } from "react-redux";
import Header from "./Header";
import { setAuthUserData, getCurrentUser } from "../../redux/auth-reducer";
import { setUserProfile } from "../../redux/profileReducer";


class HeaderContainer extends React.Component {
  componentDidMount() {
    this.props.getCurrentUser();
  }

  render() {
    return <Header {...this.props} />;
  }
}

const mapStateToProps = (state) => ({
  isAuth: state.auth.isAuth,
  login: state.auth.login,
  profile: state.profilePage.profile,
});

export default connect(mapStateToProps, { setAuthUserData, setUserProfile, getCurrentUser })(
  HeaderContainer
);
