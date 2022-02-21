import exp from "constants";
import { MongoClient } from "mongodb";

const handler = async (req, res) => {
  if (req.method === "POST") {
    const data = req.body;
    const client = await MongoClient.connect(
      "mongodb+srv://negi:512544615@cluster0.zemkh.mongodb.net/Posts?retryWrites=true&w=majority"
    );

    const db = client.db();
    const dataCollection = db.collection('posts');
    const result = await dataCollection.insertOne(data);
    client.close();

    res.status(201).json({message: 'data posted'});
  }
};

export default handler;
