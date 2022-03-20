

const Post = ({post}) => {
  return (
    <>
      <h1>Post {post._id}</h1>;
      <p>{post.name}</p>
      <p>{post.message}</p>
    </>
  )
  
}

export async function getStaticProps({params}) {
  const response = await fetch(`http://localhost:3000/api/post/${params.id}`);
  const post = await response.json()

  // Pass post data to the page via props
  return { props: { post } }
}

export async function getStaticPaths() {
  const response = await fetch("http://localhost:3000/api/posts");
  const posts = await response.json();

  const paths = posts.map((post) => ({
    params: { id: post._id },
  }))

  return { paths, fallback: false }

}

export default Post;

