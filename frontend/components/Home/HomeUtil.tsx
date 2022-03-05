import classes from "./HomeUtil.module.css";

const HomeUtil: React.FC<{
  post: {
    title: string;
    description: string;
    date: string;
    text: string;
  };
}> = (props) => {
  
  return (
    <div className={`${classes.row} ${classes.box}`}>
      <div className={classes.leftcolumn}>
        <div className={classes.card}>
          <h2>{props.post.title}</h2>
          <h5>{`${props.post.description},${props.post.date}`}</h5>
          <div className={classes.fakeimg}>Image</div>
          <p>{props.post.text}</p>
        </div>
      </div>
    </div>
  );
};

export default HomeUtil;
