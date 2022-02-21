import Home from "../../components/Home";
import Card from "../../UI/Card";
import { MongoClient } from "mongodb";

const HomePage:React.FC<{allPost: {
  title: string,
  description: string,
  date: string,
  text: string,
}[]}> = (props) => {
  
  // console.log(props.allPost);
  return (
    <Card>
      <Home posts={props.allPost}/>
    </Card>
  );
};

export async function getStaticProps() {

  const client = await MongoClient.connect(
    "mongodb+srv://negi:512544615@cluster0.zemkh.mongodb.net/Posts?retryWrites=true&w=majority"
  );
  
  const db = client.db();
  const dataCollection = db.collection('posts');
  const allPosts = await dataCollection.find().toArray(); 
  client.close();

  return {
    props: {
      allPost : allPosts.map((post) => ({
        title: post.title,
        description: post.description,
        date: post.date,
        text: post.text,
        // id: post._id.toString()
      }))
    },
    revalidate: 1,
  }

}

export default HomePage;
