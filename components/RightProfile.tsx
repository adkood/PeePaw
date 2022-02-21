import classes from "./RightProfile.module.css";

const RightProfile = () => {
  return (
    <div className={classes.right}>
      <div className={classes.side}>
        <button>Your Friends</button>
        <button>Edit</button>
        <button>Change-Password</button>
        <button>Post</button>
      </div>
    </div>
  );
};

export default RightProfile;
