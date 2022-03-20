
import fetch from 'isomorphic-unfetch'
import Link from 'next/link';
import AppHead from "../components/AppHead";
import MainLayout from "../components/MainLayout";



const Posts = ({posts}) => {
  console.log(posts)
//   const [posts, setPosts] = useState([]);
//   useLayoutEffect(() => {
//     getDataForPosts()
//   }, [])

// const getDataForPosts = async () => {

//   const response = await fetch('api/posts');
//   const json = await response.json()
//   console.log(json)
//   setPosts(json)
// } 

  return (
    <>
      <AppHead title='Posts'/>
      <MainLayout>
        <h1>
          Posts page
        </h1>
        {posts.map(post => (
          <Link href={`/post/${post._id}`} key={post._id}><a  >
            <p>{post.name}</p>
            <p>{post.message}</p>
          </a>
          </Link>
        ))}
      </MainLayout>
    </>
  )
}

export async function getStaticProps() {
  const res = await fetch("http://localhost:3000/api/posts");

  const json = await res.json();
  console.log(json)
  return {
    props: {
      posts: json,
    },
  };
}


export default Posts;