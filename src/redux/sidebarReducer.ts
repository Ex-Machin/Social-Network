export type InitialStateType = typeof initialState 

type SideProfileType = {
  id: number
  name: string
  src: string
}

let initialState = [
  {
    id: 1,
    name: "Lika",
    src: "https://i.quotev.com/img/q/u/20/8/16/hzedqa72l2_l.jpg",
  } as SideProfileType,
  {
    id: 2,
    name: "Kair",
    src: "https://i.quotev.com/img/q/u/20/8/16/hzedqa72l2_l.jpg",
  } as SideProfileType,
  {
    id: 3,
    name: "Yulia",
    src: "https://i.quotev.com/img/q/u/20/8/16/hzedqa72l2_l.jpg",
  } as SideProfileType,
];

const sidebarReducer = (state = initialState): InitialStateType => {
  return state;
};

export default sidebarReducer;
