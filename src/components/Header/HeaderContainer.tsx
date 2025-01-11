import React from "react";
import { connect } from "react-redux";
import { logout } from "../../redux/auth-reducer";
import { AppStateType } from "../../redux/redux-store";
import Header, { DispatchHeaderPropsType, MapHeaderPropsType } from "./Header";

class HeaderContainer extends React.Component<MapHeaderPropsType & DispatchHeaderPropsType> {
  render() {
    return <Header {...this.props} />;
  }
}

const mapStateToProps = (state: AppStateType) => ({
  isAuth: state.auth.isAuth,
  login: state.auth.login,
});

export default connect<MapHeaderPropsType, DispatchHeaderPropsType, {}, AppStateType>(mapStateToProps, { logout })(HeaderContainer);
