import { SubmitHandler, useForm } from "react-hook-form";
import { useAuth } from "../../hooks/useAuth";

type SignupFields = {
  username: string;
  email: string;
  password: string;
};

export default function Signup() {

  const { register, handleSubmit } = useForm<SignupFields>();
  const { signup } = useAuth()

  const onSubmit: SubmitHandler<SignupFields> = async (data) => {
    await signup(data)
  }

  return (
    <>

      <form onSubmit={handleSubmit(onSubmit)}>

        <h1>Welcome to Japanese Master! join for free lessons on Japanese</h1>

        <input
          {...register("username")}
          name="username"
          placeholder="Username"
        />

        <input {...register("email")} name="email" placeholder="Email" />
        <input
          {...register("password")}
          name="password"
          placeholder="Password"
        />

        <button>Signup</button>

      </form>
    </>
  );
}
