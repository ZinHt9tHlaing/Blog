import { useForm, type SubmitHandler } from "react-hook-form";
import * as z from "zod";
import { authSchema } from "../schemas/authSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useSearchParams } from "react-router";

type IFormInputs = z.infer<typeof authSchema>;

export const AuthForm = () => {
  const [searchParams] = useSearchParams();
  const isLoginMode = searchParams.get("mode") === "login";

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<IFormInputs>({
    resolver: zodResolver(authSchema),
  });

  const submitHandler: SubmitHandler<IFormInputs> = async (data) => {
    console.log("data", data);
  };

  return (
    <section className="max-w-sm md:max-w-lg mx-auto mt-20">
      <h1 className="text-center text-teal-600 font-bold text-2xl mb-4">
        {isLoginMode ? "Login to your account" : "Create a new account"}
      </h1>
      <form
        className="flex flex-col space-y-2"
        onSubmit={handleSubmit(submitHandler)}
      >
        <div>
          <label htmlFor="username" className="font-medium">
            Enter Username
          </label>
          <input
            type="text"
            id="username"
            {...register("username")}
            placeholder="username"
            className="form"
          />
          {errors.username && (
            <span className="text-red-500 text-sm font-medium">
              {errors.username.message}
            </span>
          )}
        </div>
        <div>
          <label htmlFor="password" className="font-medium">
            Enter Password
          </label>
          <input
            type="password"
            id="password"
            {...register("password")}
            placeholder="******"
            className="form"
          />
          {errors.password && (
            <span className="text-red-500 text-sm font-medium">
              {errors.password.message}
            </span>
          )}
        </div>
        <button
          type="submit"
          disabled={isSubmitting}
          className="flex justify-center items-center gap-2 text-lg text-white disabled:cursor-not-allowed disabled:bg-teal-700 bg-teal-600 cursor-pointer py-1 px-2 rounded border-2 border-teal-600 active:scale-95 duration-200"
        >
          {/* {isLoading && (
            <div className="w-5 h-5 border-4 border-white border-t-transparent rounded-full animate-spin" />
          )} */}
          {isLoginMode ? "Login" : "Register"}
        </button>
      </form>
    </section>
  );
};
