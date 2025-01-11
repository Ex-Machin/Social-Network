import s from "./Post.module.css";

type PropsType = {
  message: string
  likeCount: number
}

const Post: React.FC<PropsType> = ({ message, likeCount }) => {
  return (
    <div className={s.posts}>
      <div className={s.item}>
        <img
          src="https://proslang.ru/wp-content/uploads/2019/03/avatarka_1-300x300.jpg"
          alt=""
        />
        {message}
      </div>
      <div>
        <span>likes: {likeCount}</span>
      </div>
    </div>
  );
};

export default Post;
