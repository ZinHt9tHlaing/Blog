import { Link } from "react-router";
import BackIcon from "../icons/BackIcon";

const PostDetailPage = () => {
  return (
    <section>
      <Link to={"/"} className="flex justify-end mb-8">
        <BackIcon />
      </Link>
      <div className="flex items-center justify-between my-3">
        <div>
          <h1 className=" text-4xl font-bold">Our First Post</h1>
          <p className="text-sm font-medium text-teal-500">
            Code Hub <span className="text-gray-500">| 2023-06-01</span>
          </p>
        </div>
        <div className="flex items-center gap-2 justify-end">
          <Link to={`/post-edit/${1}`}>
            <button className="px-3 py-1 rounded cursor-pointer md:text-lg border-2 border-gray-800 bg-gray-800 text-white active:scale-90 duration-200">
              Edit
            </button>
          </Link>
          <button className="px-3 py-1 rounded cursor-pointer md:text-lg border-2 border-red-600 bg-red-600 text-white active:scale-90 duration-200">
            Delete
          </button>
        </div>
      </div>
      <img
        src="https://pilbox.themuse.com/image.jpg?filter=antialias&h=385&opt=1&pos=top-left&prog=1&q=keep&url=https%3A%2F%2Fcms-assets.themuse.com%2Fmedia%2Flead%2F01212022-1047259374-coding-classes_scanrail.jpg&w=700"
        alt="Our First Post"
        className="w-full"
      />
      <p className="font-medium text-gray-700 mt-3 mb-20">
        Lorem ipsum dolor sit amet consectetur adipiscing elit, dis diam congue
        lacus nascetur sed, ac vulputate litora taciti malesuada lobortis. Morbi
        metus dui dictum odio himenaeos fusce donec commodo, urna nulla diam sed
        tempus nunc tortor praesent nisl, platea tincidunt fermentum vehicula
        curabitur aliquet cum. Dapibus semper aliquet quis euismod mattis
        interdum et, non quam metus suspendisse nostra auctor montes, tortor
        congue sagittis dis urna eleifend. Habitasse interdum diam quisque quam
        rutrum dis, sociis laoreet dignissim elementum lacinia torquent pretium,
        luctus ac at tempor mauris. Nunc taciti nostra ornare congue volutpat
        habitasse ullamcorper felis, nullam viverra potenti vel dictum risus sem
        aliquam, augue aenean morbi laoreet condimentum imperdiet dapibus.
        Dictum ultricies tristique praesent egestas ad inceptos arcu
        pellentesque mus euismod, vulputate scelerisque imperdiet placerat ac
        nascetur hendrerit eu quis.
      </p>
    </section>
  );
};

export default PostDetailPage;
