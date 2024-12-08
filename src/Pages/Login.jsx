import { useContext } from "react";
import { FcGoogle } from "react-icons/fc";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../Auth/AuthProvider";
// import { Result } from "postcss";

function Login() {
  const navigate = useNavigate()
  const {login, setUser,signInWithGoogle} = useContext(AuthContext)
  const handleForm = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);

    login(email, password)
    .then(userCredintial =>{
      const user = userCredintial.user;
      // console.log(user);
      setUser(user);
      navigate('/')
    })
    .catch(error =>{
      console.log(error.message);
    })
    
  };

  // const googleSignin = ()=>{
  //   signInWithGoogle
  //   .then(Result =>{
  //     const user = Result.user;
  //     setUser(user)
  //   })
  //   .catch(error =>{
  //     console.log(error);
  //   })
  // }

  return (
    <div className="card bg-base-100 w-full mx-auto mt-16 max-w-sm shrink-0 shadow-2xl">
      <form onSubmit={handleForm} className="card-body">
        <h1 className="text-2xl font-bold text-center">Login Now!</h1>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input
            name="email"
            type="email"
            placeholder="email"
            className="input input-bordered"
            required
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input
            name="password"
            type="password"
            placeholder="password"
            className="input input-bordered"
            required
          />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">
              Forgot password?
            </a>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Login</button>
        </div>
        <div>
          <button onClick={signInWithGoogle}
          className="flex items-center justify-center gap-2 px-4 py-2 w-full
          bg-white border border-gray-300 rounded-md shadow hover:border-gray-500 transition duration-300">
            <FcGoogle size={20} />
            <span className="text-gray-600 font-medium">
              Sign in with Google
            </span>
          </button>
        </div>
        <div className="text-sm">
          Do not have any account?{" "}
          <Link to={"/register"} className="font-bold cursor-pointer">
            Register
          </Link>{" "}
          now.
        </div>
      </form>
    </div>
  );
}

export default Login;
