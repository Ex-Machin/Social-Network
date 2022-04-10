import "./App.css";
import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import NavBar from "./components/NavBar/NavBar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import { Routes, Route } from "react-router-dom";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";

const App = ({ state, addPost, updateNewPostText }) => {
  return (
    <div className="app-wrapper">
      <Header />
      <NavBar friendsData={state.sideBar} />
      <div className="app-wrapper-content">
        <Routes>
          <Route
            path="/dialogs/*"
            element={
              <Dialogs
                messagesData={state.messagesPage.messages}
                dialogsData={state.messagesPage.dialogs}
              />
            }
          />
          <Route
            path="/profile"
            element={
              <Profile
                profilePage={state.profilePage}
                addPost={addPost}
                updateNewPostText={updateNewPostText}
              />
            }
          />
          <Route path="/news" element={<News />} />
          <Route path="/music" element={<Music />} />
          <Route path="/settings" element={<Settings />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
