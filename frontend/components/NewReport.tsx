import { BoxUi } from "../UI/BoxUi";
import classes from "./NewReport.module.css";
import { Container } from '@mui/material';

const NewReport = () => {
  return (
    <Container sx={{
      height: '100vh',
      width: '100vw',
      backgroundColor: 'blue',
    }}>
      <form className={classes.report}>
        <label>Please raise your voice against Animal voilence</label>
        <input type="text" placeholder="Enter your name" />
        <input type="text" placeholder="Enter your Email" />
        <input type="text" placeholder="Enter your contact number" />
        <textarea typeof="text" placeholder="Enter Your Report here"></textarea>
        <button type="submit">Report</button>
      </form>
      </Container>
  );
};

export default NewReport;
