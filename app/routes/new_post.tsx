import { Download } from "react-feather";
import { redirect } from "remix";

export const action = async ({ request }: { request: any }) => {
  console.log("123");

  const form = await request.formData();
  const body = form.get("body");
  const title = form.get("title");

  const v = {
    body,
    title,
  };
  console.log(v);
  return redirect("/posts");
};

function New_post() {
  return (
    <div className="min-h-screen px-6 py-2">
      <div className="absolute top-0 left-0  w-full min-h-screen  bg-cover bg-m5 main_img"></div>
      <div className="absolute top-0 left-0  w-full min-h-screen  bg-cover overlay"></div>

      <div className="max-w-lg mx-auto">
        <h2 className="text-3xl text-white text-center my-2 font-semibold ">
          New Post
        </h2>

        <form
          method="POST"
          className="flex justify-center items-center flex-col gap-5 mt-4 "
        >
          <div className="w-full">
            <label className=" text-white my-2 inline-block">Title</label>
            <div className="w-full border-none rounded-md bg-purple-500">
              <input
                name="title"
                type="text"
                className="w-full bg-transparent text-white py-2 px-3 focus:outline-none"
              />
            </div>
          </div>
          <div className="w-full">
            <label className=" text-white my-2 inline-block">Image</label>
            <div className="w-full border-none rounded-md bg-purple-500 flex items-center justify-start relative py-2">
              <label
                htmlFor="img_file"
                className="px-6 text-sm  w-full z-20 flex gap-5 items-center"
              >
                <Download className="text-white" />
                <span className="text-white">Select your image</span>
              </label>
              <input
                type="file"
                name="images"
                id="img_file"
                className="inset-0 absolute w-full z-20 appearance-none hidden bg-transparent"
              />

              {/* <input
                type="text"
                className="w-full bg-transparent text-white py-2 px-3 focus:outline-none"
              /> */}
            </div>
          </div>
          <div className="w-full">
            <label className=" text-white my-2 inline-block">Body</label>
            <div className="w-full border-none rounded-md bg-purple-500">
              <textarea
                className="w-full bg-transparent text-white py-2 px-3 focus:outline-none"
                name="body"
              ></textarea>
            </div>
          </div>

          <input
            type="submit"
            value="Submit"
            className="w-full bg-purple-900 py-2 rounded-md text-white mt-4 cursor-pointer "
          />
        </form>
      </div>
    </div>
  );
}

export default New_post;
