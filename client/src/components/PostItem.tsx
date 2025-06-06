import { Link } from "react-router";

type PostItemProps = {
  post: {
    id: number;
    username: string;
    time: string;
    title: string;
    description: string;
    image: string;
  };
};

const PostItem = ({ post }: PostItemProps) => {
  const { id, username, time, title, description, image } = post;

  return (
    <div className="mb-5">
      <h2 className=" text-3xl font-medium">{title.toUpperCase()}</h2>
      <p className="text-sm my-2 font-medium text-teal-500">
        {username} <span className="text-gray-500">| {time}</span>
      </p>
      <Link to={`/post/${id}`}>
        <img
          src={image}
          alt={title}
          className="h-64 w-full rounded object-cover hover:-translate-y-1.5 duration-300"
        />
      </Link>
      <p className="font-normal text-gray-600 my-2">
        {description.slice(0, 230)}....
      </p>
    </div>
  );
};

export default PostItem;
