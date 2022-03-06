import { Box, Flex, Grid, GridItem, Heading } from '@chakra-ui/react';
import OnlineUser from '../UI/onlineUser';
import RecommendedUser from '../UI/RecommendedUser';
import PostCard from '../UI/PostCard';
import YourProfile from './YourProfile';
import { Skeleton, SkeletonCircle, SkeletonText } from '@chakra-ui/react';

const Dummy_OnlineUsers = [
  {
    name: 'ashutosh',
    active: true,
  },

  {
    name: 'rohan',
    active: false,
  },

  {
    name: 'pp',
    active: false,
  },

  {
    name: 'jojo',
    active: true,
  },
];

const FullProfile = () => {
  return (
    <Grid
      h="100vh"
      templateRows="repeat(8 , 1fr)"
      templateColumns="repeat(5 ,1fr)"
    >
      <GridItem rowSpan={2} colSpan={4} margin="20px">
        <YourProfile />
        {/* <Skeleton /> */}
        {/* <Flex width="100%" height="100%" alignItems='center'>
          <Skeleton
            startColor="pink.500"
            endColor="orange.500"
            height="10%"
            width="100%"
          />
        </Flex> */}
      </GridItem>
      <GridItem rowSpan={8} colSpan={1} margin="20px">
        <Flex
          width="100%"
          height="100%"
          flexDirection="column"
          justifyContent="space-between"
        >
          <Flex
            width="100%"
            height="45%"
            bgColor="white"
            boxShadow="5px 10px 20px rgba(24, 21, 21, 0.418)"
            borderRadius="10px"
            // justifyContent='center'
            alignItems="center"
            flexDirection="column"
            overflow="scroll"
          >
            <Heading fontSize="1.5vw">Recommended Users</Heading>
            <RecommendedUser></RecommendedUser>
            <RecommendedUser></RecommendedUser>
            <RecommendedUser></RecommendedUser>
            <RecommendedUser></RecommendedUser>
            <RecommendedUser></RecommendedUser>
            <RecommendedUser></RecommendedUser>
          </Flex>
          <Box
            width="100%"
            height="53%"
            bgColor="white"
            boxShadow="5px 10px 20px rgba(24, 21, 21, 0.418)"
            borderRadius="10px"
            sx={{
              display: 'flex',
              flexDirection: 'column',
              // justifyContent: 'center',
              alignItems: 'center',
              // margin: '5px'
            }}
          >
            <Heading fontSize="1.5vw">Active Users</Heading>
            {Dummy_OnlineUsers.map((user) => (
              <OnlineUser user={user}></OnlineUser>
            ))}
          </Box>
        </Flex>
      </GridItem>
      <GridItem rowSpan={6} colSpan={4} margin="20px">
        <Flex
          width="76%"
          height="68%"
          position="absolute"
          flexDirection="row-reverse"
        >
          <Flex
            width="70%"
            height="100%"
            bgColor="white"
            alignItems="center"
            flexDirection="column"
            overflow="scroll"
            borderRadius="10px"
          >
            <PostCard></PostCard>
            <PostCard></PostCard>
            <PostCard></PostCard>
            <PostCard></PostCard>
          </Flex>
          <Flex
            width="40%"
            height="100%"
            flexDirection="column"
            justifyContent="space-around"
            alignItems="center"
          >
            <Box
              width="90%"
              height="49%"
              bgColor="white"
              borderRadius="10"
              display="flex"
              alignItems="center"
              flexDirection="column"
              boxShadow="5px 10px 20px rgba(24, 21, 21, 0.418)"
            >
              <Heading fontSize="1.5vw" margin="5px">
                About you
              </Heading>
              <Heading fontSize="1vw" margin="2px 10px">
                Graduated from GGSIPU,Delhi.
              </Heading>
              <Heading fontSize="1vw" margin="2px 10px">
                Like to play football, baseket, and very much every sport.
              </Heading>
              <Heading fontSize="1vw" margin="2px 10px">
                Favorite horror movie , Conjuring.
              </Heading>
              <Heading fontSize="1vw" margin="2px 10px">
                Wanted the life to fill with adventure.
              </Heading>
            </Box>
            <Box
              width="90%"
              height="49%"
              bgColor="white"
              borderRadius="10"
              display="flex"
              alignItems="center"
              flexDirection="column"
              boxShadow="5px 10px 20px rgba(24, 21, 21, 0.418)"
            >
              <Heading fontSize="1.5vw" margin="5px">
                Community
              </Heading>
              <Heading fontSize="1vw" margin="2px 10px">
                Invite your friends to your current page.
              </Heading>
              <Heading fontSize="1vw" margin="2px 10px">
                1001 people liked this page.
              </Heading>
              <Heading fontSize="1vw" margin="2px 10px">
                This page is shared 1294 times.
              </Heading>
            </Box>
          </Flex>
        </Flex>
      </GridItem>
    </Grid>
  );
};

export default FullProfile;
