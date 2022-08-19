import React from "react";
import { connect } from "react-redux";
import Profile from "./Profile";
import { getUser } from "../../redux/profileReducer";
import {
  useLocation,
  useNavigate,
  useParams,
} from "react-router-dom";
import { compose } from "redux";

class ProfileContainer extends React.Component {
  componentDidMount() {
    this.props.getUser(this.props.params.id);
  }
  render() {
    return <Profile {...this.props} profile={this.props.profile} />;
  }
}

const mapStateToProps = (state) => ({
  profile: state.profilePage.profile,
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
  connect(mapStateToProps, { getUser }),
  withRouter,
)(ProfileContainer);
