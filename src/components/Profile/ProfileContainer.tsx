import React from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import { withRouter } from "../../hoc/withRouter";
import {
  getStatus,
  getUser,
  updateStatus,
  savePhoto,
  saveProfile
} from "../../redux/profileReducer";
import Profile from "./Profile";

class ProfileContainer extends React.Component {
  refreshProfile() {
    let userId = this.props.params.id;
    if (!userId) {
      userId = this.props.authorisedUserId;
      if (!userId) {
        this.props.navigate("/login", { replace: true });
      }
    }
    if (userId) {
      this.props.getUser(userId);
      this.props.getStatus(userId);
    }
  }

  componentDidMount() {
    this.refreshProfile();
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (this.props.params.id !== prevProps.params.id) {
      this.refreshProfile();
    }
  }

  render() {
    return (
      <Profile
        {...this.props}
        isOwner={!this.props.params.id}
        profile={this.props.profile}
        savePhoto={this.props.savePhoto}
        status={this.props.status}
        updateStatus={this.props.updateStatus}
        saveProfile={this.props.saveProfile}
      />
    );
  }
}

const mapStateToProps = (state) => ({
  profile: state.profilePage.profile,
  status: state.profilePage.status,
  authorisedUserId: state.auth.userId,
  isAuth: state.auth.isAuth,
});

export default compose(
  withRouter,
  connect(mapStateToProps, {
    getUser,
    getStatus,
    updateStatus,
    savePhoto,
    saveProfile,
  })
)(ProfileContainer);
