import { FC, Fragment } from "react";
import Head from "next/head";
import BlogGrid from "../components/BlogGrid";
import { GET_BLOG_POSTS } from "../queries";
import { useQuery } from "@apollo/client";
import { IPostItem } from "../types/post";
import Error from "../components/UI/Error";
import Loader from "../components/UI/Loader";
interface IDataItems {
  title: string;
  preface: string;
  sys: {
    id: string;
  };
}
interface IData {
  blogPostCollection: {
    items: IDataItems[];
    limit: number;
    total: number;
  };
}
interface IDataVars {
  limit: number;
  order: string;
}

const BlogListingPage: FC = () => {
  const { data, loading, error } = useQuery<IData, IDataVars>(GET_BLOG_POSTS, {
    variables: { limit: 10, order: "title_ASC" },
  });

  if (loading) return <Loader />;
  if (error) return <Error error={error} />;

  const blogPosts: IPostItem[] = data?.blogPostCollection?.items?.map(
    (item) => ({
      id: item.sys.id,
      title: item.title,
      preface: item.preface,
    })
  );

  return (
    <Fragment>
      <Head>
        <title>Blog</title>
        <meta name="keywords" content="blog"></meta>
      </Head>

      <BlogGrid posts={blogPosts} />
    </Fragment>
  );
};

export default BlogListingPage;
