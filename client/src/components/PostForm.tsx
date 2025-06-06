import { useForm, Controller, type SubmitHandler } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { postSchema } from "../schemas/postSchema";

interface PostFormProps {
  uiTitle: string;
  uiBtnText: string;
}

type IPostFormInputs = z.infer<typeof postSchema>;

const PostForm = ({ uiTitle, uiBtnText }: PostFormProps) => {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<IPostFormInputs>({
    resolver: zodResolver(postSchema),
  });

  const onSubmit: SubmitHandler<IPostFormInputs> = (data) => {
    console.log({
      title: data.title,
      content: data.content,
      cover: data.cover[0],
    });
  };

  const modules = {
    toolbar: [
      [{ header: [1, 2, false] }],
      ["bold", "italic", "underline", "strike", "blockquote"],
      [
        { list: "ordered" },
        { list: "bullet" },
        { indent: "-1" },
        { indent: "+1" },
      ],
      ["link", "image"],
      ["clean"],
    ],
  };

  const formats = [
    "header",
    "bold",
    "italic",
    "underline",
    "strike",
    "blockquote",
    "list",
    "bullet",
    "indent",
    "link",
    "image",
  ];

  return (
    <section className="w-[80%] md:w-[70%] mx-auto">
      <h1 className="text-center text-teal-600 font-bold text-2xl mb-4">
        {uiTitle}
      </h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-5">
          <label htmlFor="title" className="font-medium">
            Enter post title
          </label>
          <input
            type="text"
            id="title"
            {...register("title")}
            className="block border-2 border-teal-600 text-lg px-2 py-1 w-full"
          />
          {errors.title && (
            <p className="text-red-500">{errors.title.message}</p>
          )}
        </div>

        <div className="mb-5">
          <label htmlFor="cover" className="font-medium">
            Upload cover photo
          </label>
          <input
            type="file"
            id="cover"
            {...register("cover")}
            className="py-2 block w-full text-slate-500 font-medium text-sm bg-slate-100 file:cursor-pointer cursor-pointer file:border-0 file:rounded file:py-2 file:px-4 file:mr-4 file:bg-teal-600 file:hover:bg-teal-600 file:text-white rounded active:scale-95 duration-200"
          />
          {errors.cover && (
            <p className="text-red-500">
              {(errors.cover.message as string) ?? "Invalid file"}
            </p>
          )}
        </div>

        <div className="mb-2 pb-1 md:pb-7">
          <label htmlFor="content" className="font-medium block mb-1">
            Write your post
          </label>
          <Controller
            name="content"
            control={control}
            render={({ field }) => (
              <ReactQuill
                theme="snow"
                modules={modules}
                formats={formats}
                value={field.value}
                onChange={field.onChange}
                className="h-36 "
              />
            )}
          />
          {errors.content && (
            <p className="text-red-500">{errors.content.message}</p>
          )}
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="flex justify-center items-center gap-2 text-lg text-white font-medium text-center disabled:cursor-not-allowed disabled:bg-teal-700 cursor-pointer mt-20 md:mt-14 px-2 py-1 w-full bg-teal-600 active:scale-95 duration-200"
        >
          {/* {isLoading && (
            <div className="w-5 h-5 border-4 border-white border-t-transparent rounded-full animate-spin" />
          )} */}
          {uiBtnText}
        </button>
      </form>
    </section>
  );
};

export default PostForm;
