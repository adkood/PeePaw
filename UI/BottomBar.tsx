import Link from 'next/link';
import classes from './BottomBar.module.css';

const BottomBar = () => {
    return (
        <div className={classes.navbar}>
            <Link href='https://github.com/adkood'>github</Link>
        </div>
    );
}

export default BottomBar; 