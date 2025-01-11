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
import { AppStateType } from "../../redux/redux-store";
import { NavigateFunction } from "react-router-dom";
import { ProfileType } from "../../types/types";


type MapPropsType = ReturnType<typeof mapStateToProps>
type DispatchPropsType = {
  getUser: (userId: number) => void
  getStatus: (userId: number) => void
  updateStatus: (text: string) => void
  savePhoto: (file: File) => void
  saveProfile: (profile: ProfileType) => Promise<any>
}

type PathParamsType = {
  userId: string
}

type withRouterProps = {
  location: Location;
  navigate: NavigateFunction;
  params: any;
}

type PropsType = MapPropsType & DispatchPropsType & withRouterProps & PathParamsType

class ProfileContainer extends React.Component<PropsType> {
  refreshProfile() {
    let userId: number | null = +this.props.params.id;
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

  componentDidUpdate(prevProps: PropsType) {
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

const mapStateToProps = (state: AppStateType) => ({
  profile: state.profilePage.profile,
  status: state.profilePage.status,
  authorisedUserId: state.auth.userId,
  isAuth: state.auth.isAuth,
});

export default compose<React.ComponentType>(
  withRouter,
  connect(mapStateToProps, {
    getUser,
    getStatus,
    updateStatus,
    savePhoto,
    saveProfile,
  })
)(ProfileContainer);
