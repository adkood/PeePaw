import { Grid, GridItem } from "@chakra-ui/react";
import Tester from "./tester";

const OuterHome = () => {
  return (
    <Grid
      h="100vh"
      templateRows="repeat(2, 1fr)"
      templateColumns="repeat(5, 1fr)"
      gap={4}
    >
      <GridItem rowSpan={2} colSpan={1} bg="tomato">Trending Posts</GridItem>
      <GridItem rowSpan={2} colSpan={3} bg="papayawhip"><Tester/></GridItem>
      <GridItem rowSpan={2} colSpan={1} bg="tomato">Most Liked</GridItem>
    </Grid>
  );
};

export default OuterHome;
