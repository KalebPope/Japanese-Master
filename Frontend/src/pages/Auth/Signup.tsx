import { SubmitHandler, useForm } from "react-hook-form";
import { useAuth } from "../../hooks/useAuth";
import image from "../../assets/images/top-view-japanese-symbols-with-brushes.jpg";

type SignupFields = {
  username: string;
  email: string;
  password: string;
};

export default function Signup() {
  const { register, handleSubmit } = useForm<SignupFields>();
  const { signup } = useAuth();

  const onSubmit: SubmitHandler<SignupFields> = async (data) => {
    await signup(data);
  };

  return (
    <>
      <div className="flex justify-center items-center h-[calc(100vh-4.75rem)]">
        <img src={image} className="w-70 h-150 rounded-l-2xl shadow-xl" />

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col w-full max-w-md space-y-4 p-6 h-150 rounded-r-2xl shadow-xl">
          <h1 className="text-3xl font-nuku1">Signup</h1>

          <input
            className="border px-5 py-4"
            {...register("username")}
            name="username"
            placeholder="Username"
          />

          <input
            className="border px-5 py-4"
            {...register("email")}
            name="email"
            placeholder="Email"
          />

          <input
            className="border px-5 py-4"
            {...register("password")}
            name="password"
            placeholder="Password"
          />

          <button className="bg-red-500 rounded-3xl py-3 font-nuku1 text-white text-2xl hover:bg-red-700">
            Signup
          </button>
        </form>
      </div>
    </>
  );
}
