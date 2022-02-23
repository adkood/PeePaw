import { Grid, GridItem } from "@chakra-ui/react";
import { PlusSquareIcon } from '@chakra-ui/icons';

const FullProfile = () => {

  const postingNewDataHandler = () => {
    
  }

  return (
    <Grid
      h="100vh"
      templateRows="repeat(8, 1fr)"
      templateColumns="repeat(5, 1fr)"
      gap={4}
    >
      <GridItem rowSpan={2} colSpan={4} bg="papayawhip"> <button onClick={postingNewDataHandler}><PlusSquareIcon fontSize='xx-large' sx={{ position: 'absolute' , top: '22%' , right: '22%'}}></PlusSquareIcon></button> </GridItem>
      <GridItem rowSpan={8} colSpan={1} bg="tomato">active users</GridItem>
      <GridItem rowSpan={6} colSpan={4} bg="tomato">your posts</GridItem>
      {/* <GridItem rowSpan={1} colSpan={2} bg="papayawhip" /> */}
    </Grid>
  );
};

export default FullProfile;
