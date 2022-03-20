import { MongoClient } from 'mongodb';
import  mongoose, {Model, Schema} from 'mongoose';
import nextConnect from 'next-connect';
import postSchema, { Post } from '../schemas/postSchema';
import { NextApiRequest, NextApiResponse } from 'next';

export interface AdvancedRequest extends NextApiRequest {
  post: Model<Post>
}

async function connectDataBase(req, res, next) {
  try {
      await mongoose.connect('mongodb+srv://book_user:book@bonily.prny9.mongodb.net/posts_database?retryWrites=true&w=majority', {
        //   useNewUrlParser: true,
        //   useUnifiedTopology: true
      });

      req.post = mongoose.models.Post || mongoose.model('Post', postSchema);

          console.log(`ok connect 124`);
  } catch (e) {
      console.log(e);
  }
  return next();
}


const middleware = nextConnect();
middleware.use(connectDataBase);
export default middleware;