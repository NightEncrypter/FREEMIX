import p1 from "~/p1.jpg";
import { useLoaderData } from "remix";

// use server stuff in this loader

interface Blog {
  id: string | number;
  title: string;
  body: string;
}
export const loader = () => {
  console.log(123);
  const data = {
    posts: [
      {
        id: 1,
        title: "Post 1",
        body: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.Error quos dicta voluptates quis, nam quaerat atque dolor cum sint sit beatae minima illum perferendis porro.",
      },
      {
        id: 2,
        title: "Post 2",
        body: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.Error quos dicta voluptates quis, nam quaerat atque dolor cum sint sit beatae minima illum perferendis porro.",
      },
      {
        id: 3,
        title: "Post 3",
        body: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.Error quos dicta voluptates quis, nam quaerat atque dolor cum sint sit beatae minima illum perferendis porro.",
      },
      // {
      //   id: 4,
      //   title: "Post 4",
      //   body: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.Error quos dicta voluptates quis, nam quaerat atque dolor cum sint sit beatae minima illum perferendis porro.",
      // },
      // {
      //   id: 5,
      //   title: "Post 5",
      //   body: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.Error quos dicta voluptates quis, nam quaerat atque dolor cum sint sit beatae minima illum perferendis porro.",
      // },
    ],
  };
  return data;
};
export default function PostItems() {
  const { posts } = useLoaderData();

  return (
    <>
      <div className="  min-h-screen px-6 py-2">
        {/* <div className="flex gap-2 justify-start items-center"> */}
        <div className="absolute top-0 left-0  w-full min-h-screen  bg-cover bg-m5 main_img"></div>
        <div className="absolute top-0 left-0  w-full min-h-screen  bg-cover overlay"></div>
        <div className=" max-w-5xl mx-auto">
          <div className="flex justify-between items-center mb-4">
            <h1 className=" text-3xl text-white text-left my-2 ">PostItems</h1>
            <a
              href="/new_post"
              className="inline-block  rounded-md text-white py-2 px-4 bg-purple-700 text-sm hover:bg-purple-500 focus:bg-purple-500"
            >
              New Post
            </a>
          </div>
          {/* <Music className="green" color="purple" /> */}
          {/* </div> */}
          <div className="  gap-4  grid md:grid-cols-4 sm:grid-cols-3 grid-cols-2">
            {posts.map((blog: Blog) => (
              <div
                key={blog.id}
                className="p-4  rounded-md bg-[rgba(165,75,250,0.4)] shadow-lg"
              >
                <div className="flex justify-center items-center">
                  <div className="w-14 h-14 ">
                    <img
                      src={p1}
                      className="w-full h-full  rounded-full "
                      alt="n"
                    />
                  </div>
                </div>

                <h3 className="font-semibold my-1 text-white ">{blog.title}</h3>
                <p className="text-xs text-white">{blog.body}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
