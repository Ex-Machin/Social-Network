import "./App.css";
import React from "react";
import "./App.css";
import HeaderContainer from "./components/Header/HeaderContainer";
import { Routes, Route } from "react-router-dom";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import NavBarContainer from "./components/NavBar/NavBarContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import Login from "./components/Login/Login";

const App = () => {
  return (
    <div className="app-wrapper">
      <HeaderContainer />
      <NavBarContainer />
      <div className="app-wrapper-content">
        <Routes>
          <Route path="/dialogs" element={<DialogsContainer />} />
          <Route path="/profile/:id" element={<ProfileContainer />} />
          <Route path="/profile" element={<ProfileContainer />} />
          <Route path="/news" element={<News />} />
          <Route path="/music" element={<Music />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/users" element={<UsersContainer />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
