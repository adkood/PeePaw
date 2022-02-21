import { Fragment } from 'react';
import classes from './ProfileModal.module.css';

const Backdrop:React.FC = (props) => {
    return (
        <div className={classes.backdrop}>
            {/* Empty Div */}
        </div>
    )
}

const ModalOverlay:React.FC = (props) => {
    return (
        <div className={classes.modal}>
            <div className={classes.content}>{props.children}</div>
        </div>
    )
}



const ProfileModal:React.FC = (props) => {
    return (
        <Fragment>
            <Backdrop></Backdrop>
            <ModalOverlay>{props.children}</ModalOverlay>
        </Fragment>
    )
}

export default ProfileModal;