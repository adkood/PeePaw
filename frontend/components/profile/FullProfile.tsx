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
      <GridItem rowSpan={2} colSpan={4} bgGradient='linear(to-r, green.200, pink.500)'> <YourProfile/> </GridItem>
      <GridItem rowSpan={8} colSpan={1} bgGradient='linear(to-r, green.200, pink.500)'>active users</GridItem>
      <GridItem rowSpan={6} colSpan={4} bgGradient='linear(to-r, green.200, pink.500)'>your posts</GridItem>
      {/* <GridItem rowSpan={1} colSpan={2} bg="papayawhip" /> */}
    </Grid>
  );
};

export default FullProfile;
