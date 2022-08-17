import React from "react";
import { connect } from "react-redux";
import Header from "./Header";
import { setAuthUserData } from "../../redux/auth-reducer";
import { setUserProfile } from "../../redux/profileReducer";
import { usersAPI } from "../../api/api";

class HeaderContainer extends React.Component {
  componentDidMount() {
    usersAPI.getCurrentUser().then((data) => {
      if (data.resultCode === 0) {
        let { id, login, email } = data.data;
        this.props.setAuthUserData(id, email, login);
        usersAPI.getUser(id).then((data) => {
          this.props.setUserProfile(data);
        });
      }
    });
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

export default connect(mapStateToProps, { setAuthUserData, setUserProfile })(
  HeaderContainer
);
