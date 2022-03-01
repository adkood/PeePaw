import classes from './PostCard.module.css';
import { FavoriteOutlined } from '@mui/icons-material';
import { FavoriteBorderOutlined } from '@mui/icons-material';
import ShareIcon from '@mui/icons-material/Share';
import { Image } from '@chakra-ui/react';

const PostCard = () => {
  return (
    <div className={classes.container}>
      <div className={classes.accountAndTimeCont}>
        <div className={classes.account}>
			<div className={classes.accountPhoto}>
        <Image src="https://i.picsum.photos/id/1025/4951/3301.jpg?hmac=_aGh5AtoOChip_iaMo8ZvvytfEojcgqbCH7dzaz-H8Y"></Image>
      </div>
			<div className={classes.accountName}>Catherine Sharma</div>
		</div>
        <div className={classes.time}>
			<div className={classes.postTime}>
				2022,March 3
			</div>
		</div>
      </div>

      <div className={classes.imgCont}>
        <div className={classes.img}>
        <Image src="https://i.picsum.photos/id/1025/4951/3301.jpg?hmac=_aGh5AtoOChip_iaMo8ZvvytfEojcgqbCH7dzaz-H8Y"></Image>
        </div>
        <div className={classes.likeAndShare}>
          <div className={classes.like}>
            <button>
              <FavoriteBorderOutlined sx={{ color: 'red', fontSize: '3.3rem' }} />
            </button>
          </div>
          <div className={classes.share}>
            <button>
              <ShareIcon sx={{ fontSize: 'xxx-large'}}/>
            </button>
          </div>
        </div>
      </div>

      <div className={classes.bottom}>
        <div className={classes.description}>
          <div className={classes.insideDescription}>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reiciendis quasi, quo consequatur ducimus ullam quisquam temporibus sed odio harum officiis nobis ut nulla veniam quos eveniet ipsam iste itaque. Doloribus!
          </div>
        </div>
        <div className={classes.commentsCont}>
          <div className={classes.comments}>
            <label>Add Comments...</label>
            <textarea></textarea>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostCard;
