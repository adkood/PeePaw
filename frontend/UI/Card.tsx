import React, { Fragment } from "react";
import BottomBar from "./BottomBar";
import NavigationBar from "./NavigationBar";
import { Box } from '@chakra-ui/react'

const Card: React.FC = (props) => {
  return (
    <Fragment>
      <NavigationBar />
        <Box h='100%' w='100%'>{props.children}</Box>
      <BottomBar />
    </Fragment>
  );
};

export default Card;
