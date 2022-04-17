let store = {
  _state: {
    profilePage: {
      posts: [
        { id: 1, message: "Bye World", likeCount: "12" },
        { id: 2, name: "Abrakadabra", likeCount: "11" },
      ],
      newPostText: "bro",
    },
    messagesPage: {
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
    },
    sideBar: [
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

  dispatch(action) { // { type: "ADD-POST"}
    if (action.type === "ADD-POST") {
      let newPost = {
        id:5,
        message: this._state.profilePage.newPostText,
        likesCoint: 0,
      };
      this._state.profilePage.posts.push(newPost);
      this._state.profilePage.newPostText = '';
      this._callSubscriber(this._state);
    } else if (action.type === "UPDATE-NEW-POST-TEXT") {
      this._state.profilePage.newPostText = action.newText;
      this._callSubscriber(this._state);
    }
  },
}

export default store;

window.store = store;
