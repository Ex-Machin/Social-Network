let ADD_POST = "ADD-POST";
let UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT"

let UPDATE_NEW_MESSAGE_BODY = "UPDATE-NEW-MESSAGE-BODY"
let SEND_MESSAGE = "SEND-MESSAGE"

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
    if (action.type === ADD_POST) {
      let newPost = {
        id:5,
        message: this._state.profilePage.newPostText,
        likesCoint: 0,
      };
      this._state.profilePage.posts.push(newPost);
      this._state.profilePage.newPostText = '';
      this._callSubscriber(this._state);
    } else if (action.type === UPDATE_NEW_POST_TEXT) {
      this._state.profilePage.newPostText = action.newText;
      this._callSubscriber(this._state);
    } else if (action.type === UPDATE_NEW_MESSAGE_BODY) {
      this._state.dialogsPage.newMessageBody = action.body;
      this._callSubscriber(this._state);
    }  else if (action.type === SEND_MESSAGE) {
      let body = this._state.dialogsPage.newMessageBody;
      this._state.dialogsPage.newMessageBody = "";
      this._state.dialogsPage.messages.push({id: 6, message: body})
      this._callSubscriber(this._state);
    }
  },
}

export const addPostActionCreator = () => ({
  type: ADD_POST,
});
export const updateNewPostTextActionCreator = (text) => ({
  type: UPDATE_NEW_POST_TEXT,
  newText: text,
});

export const sendMessageCreator = () => ({
  type: SEND_MESSAGE,
});
export const updateNewMessageBodyCreator = (body) => ({
  type: UPDATE_NEW_MESSAGE_BODY,
  body: body,
});

export default store;

window.store = store;
