import Card from "../Card/Card";
import { useEffect, useState } from "react";
import axios from "axios";

interface postProps {
  _id: string;
  title: string;
  desc: string;
  coverImage: string;
  postId: string;
  createdAt: Date;
}

const stripHTML = (html: string) => {
  const tmp = document.createElement("DIV");
  tmp.innerHTML = html;
  return tmp.textContent || tmp.innerText || "";
};

const Posts = () => {
  const [posts, setPosts] = useState<postProps[]>([]);
  useEffect(() => {
    const fetchAllPosts = async () => {
      try {
        const res = await axios.get(
          `${import.meta.env.VITE_API_URL}/posts/all-posts`
        );
        console.log(res?.data?.data);
        setPosts(res?.data?.data.reverse());
      } catch (error) {
        console.log("Error");
      }
    };
    fetchAllPosts();
  }, []);
  return (
    <>
      <div className="flex flex-col items-center mt-4">
        <h2 className="text-headerTwo text-primary mt-4 text-center uppercase tracking-wider">
          Posts
        </h2>
      </div>
      <div
        className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4 mt-4"
        id="posts"
      >
        {posts.map((post) => (
          <Card
            key={post?._id}
            postId={post?._id}
            postImg={post?.coverImage}
            postTitle={
              post?.title.length > 30
                ? post.title.slice(0, 30) + "..."
                : post?.title
            }
            postDesc={
              stripHTML(post?.desc).length > 60
                ? stripHTML(post.desc).slice(0, 60) + "..."
                : stripHTML(post?.desc)
            }
            postDate={new Date(post?.createdAt).toLocaleString("en-In", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          />
        ))}
      </div>
      <button className="text-buttonText uppercase font-roboto py-3 px-6 mt-2 rounded-full bg-secondary flex mx-auto">
        Browse More
      </button>
    </>
  );
};

export default Posts;
