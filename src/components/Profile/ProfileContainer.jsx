import React from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import { withRouter } from "../../hoc/withRouter";
import { getStatus, getUser, updateStatus } from "../../redux/profileReducer";
import Profile from "./Profile";

class ProfileContainer extends React.Component {
  componentDidMount() {
    let userId = this.props.params.id;
    if (!userId) {
      userId = this.props.authorisedUserId;
      if (!!userId) {
        this.props.getUser(userId);
        this.props.getStatus(userId);
      } else {
        this.props.navigate("/login", { replace: true });
      }
    }
  }
  render() {
    return (
      <Profile
        {...this.props}
        profile={this.props.profile}
        status={this.props.status}
        updateStatus={this.props.updateStatus}
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
  connect(mapStateToProps, { getUser, getStatus, updateStatus })
)(ProfileContainer);
