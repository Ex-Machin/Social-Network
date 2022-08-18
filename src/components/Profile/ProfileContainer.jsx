import React from "react";
import { connect } from "react-redux";
import Profile from "./Profile";
import { getUser } from "../../redux/profileReducer";
import { Navigate, useLocation, useNavigate, useParams } from "react-router-dom";

class ProfileContainer extends React.Component {
  componentDidMount() {
    this.props.getUser(this.props.params.id);
  }
  render() {

    return !this.props.isAuth ? (
      <Navigate to="/login/" />
    ) : (
      <Profile {...this.props} profile={this.props.profile} />
    ); 
  }
}

const mapStateToProps = (state) => ({
  profile: state.profilePage.profile,
  isAuth: state.auth.isAuth
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
  withRouter(ProfileContainer)
);
