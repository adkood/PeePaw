import { ChatIcon } from '@chakra-ui/icons';
import classes from './MessageBox.module.css';

const MessageBox = () => {
  return (
    <div className={classes.dropup}>
      <button className={classes.dropbtn}><ChatIcon fontSize='xxx-large' sx={{ color: '#83cf5f'}}/></button>
      <div className={classes.dropupContent}>
        <a href="#">Link 1</a>
        <a href="#">Link 2</a>
        <a href="#">Link 3</a>
      </div>
    </div>
  );
};

export default MessageBox;
