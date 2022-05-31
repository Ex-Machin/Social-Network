import dialogsReducer from "./dialogsReducer";
import profileReducer from "./profileReducer";
import sidebarReducer from "./sidebarReducer";

let store = {
  _state: {
    profilePage: {
      posts: [
        { id: 1, message: "Bye World", likeCount: "12" },
        { id: 2, name: "Abrakadabra", likeCount: "11" },
      ],
      newPostText: "bro",
    },
    dialogsPage: {
      messages: [
        { id: 1, message: "hi" },
        { id: 2, message: "What da fuck!" },
        { id: 3, message: "Esketit" },
      ],
      dialogs: [
        { id: 1, name: "Lisa" },
        { id: 2, name: "Vika" },
        { id: 3, name: "Lilia" },
        { id: 4, name: "Vlad" },
        { id: 5, name: "Dima" },
      ],
      newMessageBody: "",
    },
    sidebar: [
      {
        id: 1,
        name: "Lika",
        src: "https://i.quotev.com/img/q/u/20/8/16/hzedqa72l2_l.jpg",
      },
      {
        id: 2,
        name: "Kair",
        src: "https://i.quotev.com/img/q/u/20/8/16/hzedqa72l2_l.jpg",
      },
      {
        id: 3,
        name: "Yulia",
        src: "https://i.quotev.com/img/q/u/20/8/16/hzedqa72l2_l.jpg",
      },
    ],
  },
  _callSubscriber(){
    console.log('state was changed');
  },
  getState() {
    return this._state;
  },
  subscribe(observer){
    this._callSubscriber = observer; // наблюдатель - observer
  },
  dispatch(action) {
    this._state.profilePage = profileReducer(this._state.profilePage, action);
    this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
    this._state.sidebar = sidebarReducer(this._state.sidebar, action);
 
    this._callSubscriber(this._state);
  },
}

export default store;

window.store = store;
