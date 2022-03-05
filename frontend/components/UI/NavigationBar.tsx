// import Link from "next/link";
import { useState } from 'react';
import classes from './NavigationBar.module.css';
import { RootStateOrAny, useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { authSliceActions } from '../../store';
import { useRouter } from 'next/router';
import NotificationModal from './NotificationModal';
import LogoutRoundedIcon from '@mui/icons-material/LogoutRounded';
import SummarizeRoundedIcon from '@mui/icons-material/SummarizeRounded';
import PeopleAltRoundedIcon from '@mui/icons-material/PeopleAltRounded';
import { Box, Button, Flex, Image } from '@chakra-ui/react';

// import SettingModal from "../components/settingModal";

const NavigationBar = () => {
  const [isTrue, setIsTrue] = useState(false);
  const isLogged = useSelector((state: RootStateOrAny) => state.isLogged);

  const router = useRouter();

  const dispatch = useDispatch();

  const onClickHandler = () => {
    setIsTrue((previous) => !previous);
  };

  const logoutClickHandler = () => {
    dispatch(authSliceActions.logout());
    router.replace('/');
  };

  const onReportLinkHandler = () => {
    router.push('/report');
  };

  const onProfileLinkHandler = () => {
    router.push('/profile');
  };

  const onHomeLinkHandler = () => {
    router.replace('/home');
  };

  return (
    <Flex w="100%" h="5rem" justifyContent={'center'} alignItems="center">
      <Flex
        w={'100%'}
        gap="2rem"
        h="100%"
        bgColor={'blue'}
        justifyContent={'center'}
        alignItems="center"
        borderBottomLeftRadius={'50%'}
        borderBottomRightRadius={'50%'}
        position="sticky"
      >
        {/* {!isLogged && <img src="logo.png" alt="PeePaw" />} */}
        <Box bgColor={'red'}>
          {isLogged && (
            <Button onClick={onHomeLinkHandler}>
              <Image src="logo.jpeg" alt="peepaw" />
            </Button>
          )}
        </Box>
        <Flex w={'30%'} justifyContent={'space-between'} bgColor={'yellow'}>
          {!isLogged && (
            <Button onClick={onClickHandler} bgColor="transparent">
              {!isTrue ? 'Login' : 'SignUp'}
            </Button>
          )}
          {isLogged && (
            <Button onClick={logoutClickHandler}>
              <LogoutRoundedIcon fontSize="medium" />
            </Button>
          )}
          {isLogged && (
            <Button>
              {' '}
              <NotificationModal />
            </Button>
          )}
          {isLogged && (
            <Button onClick={onReportLinkHandler}>
              <SummarizeRoundedIcon fontSize="medium" />
            </Button>
          )}
          {isLogged && (
            <Button onClick={onProfileLinkHandler}>
              <PeopleAltRoundedIcon />
            </Button>
          )}
        </Flex>
      </Flex>
    </Flex>
  );
};

export default NavigationBar;
