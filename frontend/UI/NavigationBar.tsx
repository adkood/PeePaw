import Link from "next/link";
import { useState } from "react";
import classes from "./NavigationBar.module.css";
import { RootStateOrAny, useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { authSliceActions } from "../store";
import { useRouter } from "next/router";
// import SettingModal from "../components/settingModal";

const NavigationBar = () => {
  const [isTrue, setIsTrue] = useState(false);
  const isLogged = useSelector((state: RootStateOrAny) => state.isLogged);

  const router = useRouter();

  const dispatch = useDispatch();

  const onClickHandler = () => {
    setIsTrue((previous) => (!previous));
  };

  const logoutClickHandler = () => {
    dispatch(authSliceActions.logout());
    router.replace('/');
  }

  return (
    <div className={classes.navbar}>
      <img src="./logo.png" alt="PeePaw" />
      {!isLogged && (
        <button onClick ={onClickHandler}>{(!isTrue) ? "Login" : "SignUp"}</button>
      )}
      {isLogged && <button onClick={logoutClickHandler}>LogOut</button>}
      {/* {isLogged && <SettingModal></SettingModal>} */}
      {isLogged && <Link href="./notification">Notifications</Link>}
      {isLogged && <Link href="./report">Reports</Link>}
      {isLogged && <Link href="./profile">Profile</Link>}
      {isLogged && <Link href="./home">Home</Link>}
    </div>
  );
};

export default NavigationBar;
