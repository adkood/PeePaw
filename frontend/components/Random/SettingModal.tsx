import classes from './SettingModal.module.css';

const SettingModal = () => {
  return (
    <div className={classes.dropdown}>
      <button className={classes.dropbtn}>Setting</button>
      <div id="myDropdown" className={classes.dropdownContent}>
        <a href="#">Link 1</a>
        <a href="#">Link 2</a>
        <a href="#">Link 3</a>
      </div>
    </div>
  );
};

export default SettingModal;
