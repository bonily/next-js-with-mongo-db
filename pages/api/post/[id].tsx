import nextConnect from 'next-connect';
import { NextApiResponse } from 'next'
import middleware, { AdvancedRequest } from '../../../middleware/database';


const post = nextConnect();
post.use(middleware);

post.get(async (req: AdvancedRequest, res: NextApiResponse) => {
  const {id} = req.query;
  const post = await req.post.findOne({_id: id});
  res.json(post);

})


export default post;