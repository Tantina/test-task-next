import { useRouter } from "next/router";
import { useQuery } from "@apollo/client";
import { Fragment } from "react";
import Head from "next/head";
import PostDetails from "../../components/PostDetails";
import { GET_POST_BY_ID } from "../../queries";
import Error from "../../components/UI/Error";
import Loader from "../../components/UI/Loader";
import { IPostItem } from "../../types/post";

interface IData {
  blogPost: IPostItem;
}
interface IDataVars {
  id: string | string[];
}

const PostPage = () => {
  const router = useRouter();
  const { postId } = router.query;
  const { data, loading, error } = useQuery<IData, IDataVars>(GET_POST_BY_ID, {
    variables: { id: postId },
  });

  if (loading) return <Loader />;
  if (error) return <Error error={error} />;

  const { blogPost } = data;

  if (!blogPost)
    return (
      <Error
        error={{ message: "Sorry, we couldn't find the requested post :( " }}
      />
    );

  return (
    <Fragment>
      <Head>
        <title>Blog Post - {blogPost.title}</title>
        <meta name="keywords" content="blog post"></meta>
      </Head>
      <PostDetails item={blogPost} />
    </Fragment>
  );
};

export default PostPage;
