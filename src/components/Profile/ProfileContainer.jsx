import React from "react";
import { connect } from "react-redux";
import Profile from "./Profile";
import { getUser } from "../../redux/profileReducer";
import { Navigate, useLocation, useNavigate, useParams } from "react-router-dom";
import { WithAuthRedirect } from "../../hoc/WithAuthRedirect";

class ProfileContainer extends React.Component {
  componentDidMount() {
    this.props.getUser(this.props.params.id);
  }
  render() {

    return <Profile {...this.props} profile={this.props.profile} />; 
  }
}

let AuthRedirectComponent = WithAuthRedirect(ProfileContainer);

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

export default connect(mapStateToProps, { getUser })(
  withRouter(AuthRedirectComponent)
);
