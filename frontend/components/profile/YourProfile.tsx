import classes from "./YourProfile.module.css";
import NewPost from "./NewPost";

export default function YourProfile() {
  return (
    <div className={classes.container}>
      <div className={classes.petName}>
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/9/93/Pet-rebbit-on-Swing_%28seat%29-in-beijing.jpg"
          alt="pet image"
        />
      </div>
      <div className={classes.ownerName}>
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/Da_Nang%2C_Vietnam._A_young_Marine_private_waits_on_the_beach_during_the_Marine_landing._-_NARA_-_532432_%28restored%29.jpg/800px-Da_Nang%2C_Vietnam._A_young_Marine_private_waits_on_the_beach_during_the_Marine_landing._-_NARA_-_532432_%28restored%29.jpg"
          alt="owner image"
        />
      </div>
      <NewPost />
    </div>
  );
}
