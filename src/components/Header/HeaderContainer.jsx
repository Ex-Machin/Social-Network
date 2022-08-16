import axios from "axios";
import React from "react";
import { connect } from "react-redux";
import Header from "./Header";
import { setAuthUserData } from "../../redux/auth-reducer";
import { setUserProfile } from "../../redux/profileReducer";

class HeaderContainer extends React.Component {
  componentDidMount() {
    axios
      .get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {
        withCredentials: true,
      })
      .then((response) => {
        if (response.data.resultCode === 0) {
          let { id, login, email } = response.data.data;
          this.props.setAuthUserData(id, email, login);
          axios
            .get(`https://social-network.samuraijs.com/api/1.0/profile/${id}`)
            .then((response) => {
              this.props.setUserProfile(response.data);
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
