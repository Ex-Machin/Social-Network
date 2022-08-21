import React from "react";
import { connect } from "react-redux";
import Profile from "./Profile";
import { getUser, getStatus, updateStatus } from "../../redux/profileReducer";
import {
  useLocation,
  useNavigate,
  useParams,
} from "react-router-dom";
import { compose } from "redux";

class ProfileContainer extends React.Component {
  componentDidMount() {
    let userId = this.props.params.id;
    if (!userId) {
      userId = this.props.authorisedUserId;
    }

    this.props.getUser(userId);
    this.props.getStatus(userId);
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

function withRouter(Component) {
  function ComponentWithRouterProp(props) {
    let location = useLocation();
    let navigate = useNavigate();
    let params = useParams();
    return (
      <Component
        {...props}
        location={location}
        navigage={navigate}
        params={params}
      />
    );
  }

  return ComponentWithRouterProp;
}

export default compose(
  connect(mapStateToProps, { getUser, getStatus, updateStatus }),
  withRouter
)(ProfileContainer);
