import classes from "./LeftProfile.module.css";

const LeftProfile = () => {
  return (
    <div className={classes.left}>
      {/* <div className={classes.split}> */}
      <div className={classes.imgCont}>
        <img
          src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/1820405/profile/profile-512.jpg?1533058950"
          alt="Albert Einstein"
        />
      </div>
      <div className={classes.imgCont}>
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/9/99/Brooks_Chase_Ranger_of_Jolly_Dogs_Jack_Russell.jpg"
          alt="dodo"
        />
      </div>
      <div className={classes.nameFriends}>
        <div>
          <p>
            <span>Albert Feynman</span> with companion <span>dodo</span>
          </p>
        </div>
        <div className={classes.aboutMe}>
          <p>i am very good at wasting time</p>
        </div>

        <button>Add friend</button>

        {/* </div> */}
      </div>
    </div>
  );
};

export default LeftProfile;
