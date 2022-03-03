import { calc, Grid, GridItem } from '@chakra-ui/react';
import PostCard from '../UI/PostCard';
import MostLiked from './Feed/MostLiked';
import TrendingPost from './Feed/TrendingPost';
import { Box } from '@chakra-ui/react';

const OuterHome = () => {
  return (
    <Grid
      h="100vh"
      templateRows="repeat(2, 1fr)"
      templateColumns="repeat(5, 1fr)"
      gap={4}
    >
      <GridItem
        rowSpan={2}
        colSpan={1}
        // bg="#00A3C4"
      >
        <TrendingPost />
      </GridItem>
      <GridItem
        rowSpan={2}
        colSpan={3}
        // bg="#00A3C4"
      >
        <Box
          p="6"
          rounded="md"
          bg="white"
          w="94%"
          h="84%"
          position="relative"
          top={'6%'}
          left={'3%'}
          display="flex"
          justifyItems="center"
          flexDirection="column"
          alignItems="center"
          overflow="scroll"
        >
          <PostCard></PostCard>
          <PostCard></PostCard>
          <PostCard></PostCard>
          <PostCard></PostCard>
        </Box>
      </GridItem>
      <GridItem
        rowSpan={2}
        colSpan={1}
        // bg="#00A3C4"
      >
        <MostLiked />
      </GridItem>
    </Grid>
  );
};

export default OuterHome;
