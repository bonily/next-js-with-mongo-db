import  {Schema, model} from 'mongoose';

export interface Post {
    name: string;
    message: string;
}

const postSchema = new Schema<Post>({
    name: {
        type: String,
        required: true,
    },
    message: {
        type: String,
        required: true,
    },
});

export default postSchema;
