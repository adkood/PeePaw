import HomeUtil from './HomeUtil';

const Home:React.FC<{ posts: {
  title: string,
  description: string,
  date: string,
  text: string,
}[] }> = (props) => {

  console.log(props.posts);
  return (
    props.posts.map((p) => {
      console.log(p);
      <HomeUtil post={p}/>
    })
  );
}

export default Home;