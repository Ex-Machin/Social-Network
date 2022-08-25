import profileReducer, { addPost, deletePost } from "./profileReducer";

let state = {
  posts: [
    { id: 1, message: "Bye World", likeCount: "12" },
    { id: 2, message: "Abrakadabra", likeCount: "11" },
  ],
};

it("length of posts should be incremented", () => {
  // 1. Initial data
  let action = addPost("sdfsd");
  // 2. Action

  let newState = profileReducer(state, action);

  // 3. Expectation

  expect(newState.posts.length).toBe(3);
});

it("message of new post should be correct", () => {
  // 1. Initial data
  let action = addPost("sdfsd");

  // 2. Action

  let newState = profileReducer(state, action);

  // 3. Expectation

  expect(newState.posts[2].message).toBe("sdfsd");
});

it("changing length after deletion", () => {
  // 1. Initial data
  let action = deletePost(1);

  // 2. Action

  let newState = profileReducer(state, action);

  // 3. Expectation

  expect(newState.posts.length).toBe(1);
});

it("if id is incorrected after deleting", () => {
  // 1. Initial data
  let action = deletePost(6);

  // 2. Action

  let newState = profileReducer(state, action);

  // 3. Expectation

  expect(newState.posts.length).toBe(2);
});

