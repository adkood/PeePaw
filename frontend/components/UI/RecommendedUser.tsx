import { Box, Button, Container, Flex, Heading } from '@chakra-ui/react';
import Image from 'next/image';
import AddCircleOutlinedIcon from '@mui/icons-material/AddCircleOutlined';
import LocalPostOfficeIcon from '@mui/icons-material/LocalPostOffice';

const RecommendedUser = () => {
  return (
    <Box
      width="75%"
      height="20%"
      bgColor="white"
      borderRadius="10px"
      margin="5px"
      display="flex"
      alignItems="center"
      boxShadow='5px 10px 20px rgba(24, 21, 21, 0.418)'
      padding="7px"
    >
      <Image src="/holder.jpg" alt="image" height="80%" width="90%"></Image>
      <Flex height="100%" width="80%" justifyContent='space-around' alignItems='center'>
            <Button> <AddCircleOutlinedIcon font-size='medium'></AddCircleOutlinedIcon> </Button>
            <Button> <LocalPostOfficeIcon font-size='medium'></LocalPostOfficeIcon></Button>  
        </Flex>
    </Box>
  );
};

export default RecommendedUser;
