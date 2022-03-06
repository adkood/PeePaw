import classes from './YourProfile.module.css';
import NewPost from './NewPost';
import { Box, Flex, Image, Skeleton, SkeletonCircle, SkeletonText } from '@chakra-ui/react';

export default function YourProfile() {
  return (
    <Box >
        <Skeleton startColor='orange.500' endColor='pink.500' height='20px'/>
      <Box display='flex' justifyContent='space-around'>
      <SkeletonCircle size='22vh' isLoaded>
        <Box borderRadius='50%' overflow='hidden' width='22vh' height='22vh'>
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/9/93/Pet-rebbit-on-Swing_%28seat%29-in-beijing.jpg"
          alt="pet image"
        />
        </Box>
      </SkeletonCircle>
      <Skeleton height='22vh' isLoaded>
        <Box height='22vh' width='50vw' bgColor='pink'>
        </Box>
        </Skeleton>
      </Box>
      {/* <NewPost /> */}
    </Box>
  );
}
