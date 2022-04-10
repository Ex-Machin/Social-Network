let rerenderEntireTree = () =>{
  console.log('state was changed');
}

const state = {
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
};

window.state = state;

export const addPost = () => {
  let newPost = {
    id:5,
    message: state.profilePage.newPostText,
    likesCoint: 0,
  };
  state.profilePage.posts.push(newPost);
  state.profilePage.newPostText = '';
  rerenderEntireTree();
}

export const updateNewPostText = (newText) => {
  state.profilePage.newPostText = newText;
  rerenderEntireTree();
}

export const subscribe = (observer) => {
  rerenderEntireTree = observer; // наблюдатель - observer
}


export default state;
