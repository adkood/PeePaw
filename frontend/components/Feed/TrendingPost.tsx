import { Box, Flex, Grid, GridItem, Image, position } from '@chakra-ui/react'
import { FavoriteBorderOutlined } from '@mui/icons-material';
import React from 'react'

const DUMMY_DATA = [
    {
      userName: 'Rohan Sharma',
      postCaption: 'My new dog poopoo',
      postLikes: 256,
      profilePic:
        'https://i.picsum.photos/id/1025/4951/3301.jpg?hmac=_aGh5AtoOChip_iaMo8ZvvytfEojcgqbCH7dzaz-H8Y',
    },
    {
      userName: 'Ashutosh Negi',
      postCaption: 'Cat does purrrr!',
      postLikes: 191,
      profilePic:
        'https://i.picsum.photos/id/1025/4951/3301.jpg?hmac=_aGh5AtoOChip_iaMo8ZvvytfEojcgqbCH7dzaz-H8Y',
    },
    {
      userName: 'Catherine Sharma',
      postCaption: 'What a parrot ;)',
      postLikes: 136,
      profilePic:
        'https://i.picsum.photos/id/1025/4951/3301.jpg?hmac=_aGh5AtoOChip_iaMo8ZvvytfEojcgqbCH7dzaz-H8Y',
    },
  ];

export default function TrendingPost() {
  return (
    <>
    <Box
      boxShadow="dark-lg"
      p="6"
      rounded="md"
      bg="white"
      w="100%"
      h="60%"
      position={'relative'}
      top={'20%'}
      left={'5%'}
    >
        <Box textAlign={"center"} fontSize="2rem" marginBottom="1rem">Trending Posts</Box>
      {DUMMY_DATA.map((postObj, i) => (
        <Grid
          h="20%"
          templateRows="repeat(2, 1fr)"
          templateColumns="repeat(5, 1fr)"
          key={i}
          marginBottom="3rem"
        >
          <GridItem
            rowSpan={2}
            colSpan={1}
            //   bg="tomato"
            textAlign={'center'}
            fontSize="2rem"
            borderRight={'1px'}
            borderColor="gray"
            paddingTop="1rem"
            m="5px"
          >
            #{i + 1}
          </GridItem>
          <GridItem colSpan={4} h="3rem" p="2px" fontWeight={"medium"}>
            <Flex align="center" justifyContent={'flex-start'} gap="1rem">
              <Image
                src="https://i.picsum.photos/id/1025/4951/3301.jpg?hmac=_aGh5AtoOChip_iaMo8ZvvytfEojcgqbCH7dzaz-H8Y"
                borderRadius="full"
                boxSize="3rem"
                alt="Dan Abramov"
              />
              {postObj.userName}
            </Flex>
          </GridItem>

          <GridItem colSpan={3} paddingTop="1rem" paddingLeft={"1rem"}>
            {postObj.postCaption}
          </GridItem>
          <GridItem colSpan={1}  >
            <Flex verticalAlign="center" justifyContent={"space-evenly"} p="1rem" >
              {postObj.postLikes}
              <FavoriteBorderOutlined style={{ color: 'red' ,fontSize:'1rem',marginTop:'4px'}} />
            </Flex >
          </GridItem>
        </Grid>
      ))}
    </Box>
  </>
  )
}
