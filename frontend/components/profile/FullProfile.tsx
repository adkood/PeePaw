import { Grid, GridItem } from "@chakra-ui/react";
import YourProfile from "./YourProfile";

const FullProfile = () => {
  return (
    <Grid
      h="100vh"
      templateRows="repeat(8, 1fr)"
      templateColumns="repeat(5, 1fr)"
      gap={4}
    >
      <GridItem rowSpan={2} colSpan={4} bg='#00A3C4'> <YourProfile/> </GridItem>
      <GridItem rowSpan={8} colSpan={1} bg='#00A3C4'>active users</GridItem>
      <GridItem rowSpan={6} colSpan={4} bg='#00A3C4'>your posts</GridItem>
      {/* <GridItem rowSpan={1} colSpan={2} bg="papayawhip" /> */}
    </Grid>
  );
};

export default FullProfile;
