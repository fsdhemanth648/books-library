import { FaGoogle } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { useForm, SubmitHandler } from "react-hook-form";

type AuthType = "Login" | "Register";

type AuthFormProps = {
  type: AuthType;
};
type FormInputs = {
  email: string;
  password: string;
};

const AuthForm: React.FC<AuthFormProps> = ({ type }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormInputs>();

  const onSubmit: SubmitHandler<FormInputs> = (data) => console.log(data);

  const handleGoogleSignIn = () => {};

  return (
    <div className="h-[calc(100vh-120px)] flex justify-center items-center">
      <div className="w-full max-w-sm mx-auto bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <h2 className="text-xl font-semibold mb-4 text-center underline">
          {type}
        </h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="username"
            >
              Email
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="email"
              type="email"
              placeholder="Email Address"
              {...register("email", { required: true })}
            />
          </div>
          {errors && (
            <p className="text-red-500 text-xs italic mb-3">
              {errors?.email?.message}
            </p>
          )}
          <div className="mb-6">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="password"
            >
              Password
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="password"
              type="password"
              placeholder="Password"
              {...register("password", { required: true })}
            />
          </div>
          {errors && (
            <p className="text-red-500 text-xs italic mb-3">
              {errors?.password?.message}
            </p>
          )}
          <div className="flex flex-wrap space-y-2.5 items-center justify-between">
            <button
              className="bg-primary hover:bg-blue-700 text-white font-bold py-1.5 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              {type}
            </button>
          </div>
        </form>
        {type === "Login" ? (
          <p className="inline-block align-baseline font-medium mt-4 text-sm">
            Haven't an account? Please
            <Link to="/register" className="text-blue-500 hover:text-blue-800">
              &nbsp;Register
            </Link>
          </p>
        ) : (
          <p className="inline-block align-baseline font-medium mt-4 text-sm">
            Haven an account? Please
            <Link to="/login" className="text-blue-500 hover:text-blue-800">
              &nbsp;Login
            </Link>
          </p>
        )}

        <div className="mt-4">
          <button
            className="w-full flex flex-wrap gap-1 items-center justify-center bg-primary-light hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            onClick={handleGoogleSignIn}
          >
            <FaGoogle className="mr-2" />
            Sign in with Google
          </button>
        </div>
        <p className="mt-5 text-center text-gray-500 text-xs">
          &copy;2025 Book Store | Radiant Ways. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default AuthForm;
