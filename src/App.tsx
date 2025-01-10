import React, { Component, ComponentType, Suspense } from "react";
import { connect } from "react-redux";
import { Route, Routes } from "react-router-dom";
import { compose } from "redux";
import "./App.css";
import HeaderContainer from "./components/Header/HeaderContainer";
import Music from "./components/Music/Music";
import NavBarContainer from "./components/NavBar/NavBarContainer";
import News from "./components/News/News";
import Preloader from "./components/Preloader/Preloader";
import Settings from "./components/Settings/Settings";
import UsersContainer from "./components/Users/UsersContainer";
import { withRouter } from "./hoc/withRouter";
import { initialize } from "./redux/app-reducer";
import { AppStateType } from "./redux/redux-store";
const DialogsContainer = React.lazy(() =>
  import("./components/Dialogs/DialogsContainer")
);
const ProfileContainer = React.lazy(() =>
  import("./components/Profile/ProfileContainer")
);
const Login = React.lazy(() => import("./components/Login/Login"));

type MapPropsType = ReturnType<typeof mapStateToProps>
type DispatchPropsType = {
  initialize: () => void
}

class App extends Component<MapPropsType & DispatchPropsType> {

  catchAllUnhandledErrors = () =>{
    alert("Some error occured")
  }

  componentDidMount() {
    this.props.initialize();
    window.addEventListener("unhandledrejection", this.catchAllUnhandledErrors);
  }
  componentWillUnmount() {
    window.removeEventListener(
      "unhandledrejection",
      this.catchAllUnhandledErrors
    );
  }

  render() {
    if (!this.props.init) {
      return <Preloader />;
    } else
      return (
        <div className="app-wrapper">
          <HeaderContainer />
          <NavBarContainer />
          <div className="app-wrapper-content">
            <Suspense fallback={<div>Loading...</div>}>
              <Routes>
                <Route path="/" element={<ProfileContainer />} />
                <Route path="/dialogs" element={<DialogsContainer />} />
                <Route path="/profile/:id" element={<ProfileContainer />} />
                <Route path="/profile" element={<ProfileContainer />} />
                <Route path="/news" element={<News />} />
                <Route path="/music" element={<Music />} />
                <Route path="/settings" element={<Settings />} />
                <Route
                  path="/users"
                  element={<UsersContainer pageTitle="Каничива" />}
                />
                <Route path="/login" element={<Login />} />
                <Route path="*" element={<div>Not Found</div>} />
              </Routes>
            </Suspense>
          </div>
        </div>
      );
  }
}

const mapStateToProps = (state: AppStateType) => ({
  init: state.app.initialized,
});

export default compose<ComponentType>(
  withRouter,
  connect(mapStateToProps, { initialize })
)(App);
