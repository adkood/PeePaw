// import Link from "next/link";
import { useState } from "react";
import classes from "./NavigationBar.module.css";
import { RootStateOrAny, useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { authSliceActions } from "../store";
import { useRouter } from "next/router";
import NotificationModal from "./NotificationModal";
import LogoutRoundedIcon from "@mui/icons-material/LogoutRounded";
import SummarizeRoundedIcon from "@mui/icons-material/SummarizeRounded";
import PeopleAltRoundedIcon from "@mui/icons-material/PeopleAltRounded";

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
    router.replace("/");
  };

  const onReportLinkHandler = () => {
    router.push("/report");
  };

  const onProfileLinkHandler = () => {
    router.push("/profile");
  };

  const onHomeLinkHandler = () => {
    router.replace("/home");
  };

  return (
    <div className={classes.navbar}>
      {!isLogged && <img src="logo.png" alt="PeePaw" />}
      {isLogged && (
        <button onClick={onHomeLinkHandler}>
          <img src="logo.png" alt="PeePaw" />
        </button>
      )}
      {!isLogged && (
        <button onClick={onClickHandler}>{!isTrue ? "Login" : "SignUp"}</button>
      )}
      {isLogged && (
        <LogoutRoundedIcon fontSize="medium" onClick={logoutClickHandler} />
      )}
      {isLogged && <NotificationModal />}
      {isLogged && (
        <button onClick={onReportLinkHandler}>
          <SummarizeRoundedIcon />
        </button>
      )}
      {isLogged && (
        <button onClick={onProfileLinkHandler}>
          <PeopleAltRoundedIcon />
        </button>
      )}
    </div>
  );
};

export default NavigationBar;
