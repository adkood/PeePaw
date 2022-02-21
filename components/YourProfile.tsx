import classes from "./YourProfile.module.css";
import { useRef } from "react";

const YourProfile: React.FC<{
  onPostingData: (data: {
    title: string,
    description: string,
    date: string,
    text: string,
  }) => void
}> = (props) => {


  const titleInputRef = useRef<HTMLInputElement>(null);
  const descriptionInputRef = useRef<HTMLInputElement>(null);
  const dateInputRef = useRef<HTMLInputElement>(null);
  const noteInputRef = useRef<HTMLInputElement>(null);

  const onsubmitHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const enteredTitle = titleInputRef.current!.value;
    const enteredDescription = descriptionInputRef.current!.value;
    const enteredDate = dateInputRef.current!.value;
    const enteredText = noteInputRef.current!.value;

    const postObj = {
      title: enteredTitle,
      description: enteredDescription,
      date: enteredDate.toString(),
      text: enteredText,
    };

    props.onPostingData(postObj);
  };

  return (
    <form className={classes.profile} onSubmit={onsubmitHandler}>
      <input type="text" placeholder="Your Title" ref={titleInputRef}/>
      <input type="text" placeholder="Your description" ref={descriptionInputRef}/>
      <input type="date" placeholder="date" ref={dateInputRef}/>
      <input type="text" placeholder="Whats on your mind!" ref={noteInputRef}/>
      <button type="submit" >Post</button>
    </form>
  );
};

export default YourProfile;
