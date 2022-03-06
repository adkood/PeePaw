import React, { Fragment } from "react";
import BottomBar from "./BottomBar";
import NavigationBar from "./NavigationBar";
import { Box } from '@chakra-ui/react'
import MessageBox from "./Message/MessageBox";

const Card: React.FC = (props) => {
  return (
    <Fragment>
      <NavigationBar />
        <Box h='100%' w='100%' bgColor='#EDFDFD'>{props.children}</Box>
      <BottomBar />
      <MessageBox/>
    </Fragment>
  );
};

export default Card;
