import nextConnect from 'next-connect';
import middleware, { AdvancedRequest } from '../../middleware/database';
import { NextApiResponse } from 'next'
import { Post } from '../../schemas/postSchema';


const post = nextConnect();
post.use(middleware);

post.get(async (req: AdvancedRequest, res: NextApiResponse) => {

  const posts: Post[] = await req.post.find();
  console.log(posts)
  res.json(posts);

})

export default post;