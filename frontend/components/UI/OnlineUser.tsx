import { Box, Container, Flex, Heading } from '@chakra-ui/react';
import FaceIcon from '@mui/icons-material/Face';
import CircleIcon from '@mui/icons-material/Circle';
import React from 'react';

const OnlineUser: React.FC<{ user: { name: string; active: boolean } }> = (
  props
) => {
  return (
    <Box
      width="75%"
      height="6%"
      bgColor="white"
      borderRadius="10px"
      margin="5px"
      display="flex"
      alignItems="center"
      boxShadow='5px 10px 20px rgba(24, 21, 21, 0.418)'
    >
      <FaceIcon font-size="large"></FaceIcon>

      <Heading width='80%' fontSize="1.5vh">{props.user.name}</Heading>
      <CircleIcon
        fontSize="medium"
        position="absolute"
        right="10px"
        style={{
          color: props.user.active ? '#32CD32' : 'grey',
        }}
      ></CircleIcon>
    </Box>
  );
  //   <Box width="100%" height="100%" bgColor='black'>
  //     <Container width="75%%" height="4%" bgColor="white" borderRadius="10px"></Container>
  //     <Container width='3%' height='3%' borderRadius='50%' bgColor='green'></Container>
  //   </Box>
  //   );
};

export default OnlineUser;
