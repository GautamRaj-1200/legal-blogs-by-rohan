import { Link } from "react-router-dom";

interface cardProps {
  postImg: string;
  postTitle: string;
  postDesc: string;
  postDate: string;
  postId: string;
}
const Card = ({
  postImg,
  postTitle,
  postDesc,
  postDate,
  postId,
}: cardProps) => {
  return (
    <>
      <div className="sm:max-w-[26rem] max-w-full rounded-md border border-dark/25">
        <img
          src={postImg}
          alt="The blog article cover image"
          className="w-full h-[14rem] rounded-t-md"
        />
        <div className="p-6 text-dark">
          <h1 className="text-headerThree">{postTitle}</h1>
          <h2
            className="text-paraTwo pt-3 font-roboto"
            dangerouslySetInnerHTML={{ __html: postDesc }}
          ></h2>
          <div className="pt-14 flex justify-between items-center">
            <p className="text-smallText font-roboto uppercase">{postDate}</p>
            <Link
              className="text-buttonText uppercase font-roboto py-3 px-6 rounded-full border border-dark"
              to={`posts/post/${postId}`}
            >
              Read More
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
