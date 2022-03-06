import classes from './YourProfile.module.css';
import NewPost from './NewPost';
import { Box, Flex, Skeleton, SkeletonCircle, SkeletonText } from '@chakra-ui/react';

export default function YourProfile() {
  return (
    <Box >
        <Skeleton startColor='pink.500' endColor='orange.500' height='20px' />
      <Box display='flex' justifyContent='space-between'>
      <SkeletonCircle size='22vh' >
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/9/93/Pet-rebbit-on-Swing_%28seat%29-in-beijing.jpg"
          alt="pet image"
        />
      </SkeletonCircle>
      <Skeleton height='22vh' width='60vw'></Skeleton>
      </Box>
      {/* <NewPost /> */}
    </Box>
  );
}
