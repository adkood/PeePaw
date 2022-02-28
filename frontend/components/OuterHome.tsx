import { Grid, GridItem } from '@chakra-ui/react';
import MostLiked from './Feed/MostLiked';
import TrendingPost from './Feed/TrendingPost';

const OuterHome = () => {
  return (
    <Grid
      h="100vh"
      templateRows="repeat(2, 1fr)"
      templateColumns="repeat(5, 1fr)"
      gap={4}
    >
      <GridItem rowSpan={2} colSpan={1} 
      // bg="#00A3C4"
      >
        <TrendingPost />
      </GridItem>
      <GridItem rowSpan={2} colSpan={3} 
      // bg="#00A3C4"
      >
        All posts
      </GridItem>
      <GridItem rowSpan={2} colSpan={1} 
      // bg="#00A3C4"
      >
        <MostLiked />
      </GridItem>
    </Grid>
  );
};

export default OuterHome;
