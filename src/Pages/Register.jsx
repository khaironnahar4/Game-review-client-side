import { useContext } from "react";
import { FcGoogle } from "react-icons/fc";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../Auth/AuthProvider";
// import { updateProfile } from "firebase/auth";

function Register() {

    const navigate = useNavigate()
    const {register,UpdateProfile, setUser, signInWithGoogle} = useContext(AuthContext)

    const handleForm = (event) => {
        event.preventDefault();
        const form = event.target;

        const name = form.name.value
        const email = form.email.value;
        const password = form.password.value;
        const photoUrl = form.photoURL.value
        // console.log(name, email, password, photoUrl);

        register(email, password)
        .then(userCredintial =>{
          const newUser = userCredintial.user;
         
          UpdateProfile(newUser,{
            displayName: name,
            photoURL: photoUrl
          }).then(()=>{
            // console.log('updated profile',newUser);
            setUser(newUser);
            navigate('/')
          }).catch(error =>{
            console.log(error);
            
          })
        })
        .catch(error =>{
          console.log(error.message);
        })
        
      };

  return (
    <div className="card bg-base-100 w-full mx-auto mt-16 max-w-sm shrink-0 shadow-2xl">
    <form onSubmit={handleForm} className="card-body">
      <h1 className="text-2xl font-bold text-center">Register Now!</h1>

      <div className="form-control">
        <label className="label">
          <span className="label-text">Name</span>
        </label>
        <input
          name="name"
          type="text"
          placeholder="Name"
          className="input input-bordered"
          required
        />
      </div>

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
          <span className="label-text">Photo URL</span>
        </label>
        <input
          name="photoURL"
          type="text"
          placeholder="photo URL"
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
       
      </div>
      <div className="form-control mt-6">
        <button className="btn btn-primary">Register</button>
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
        Already have an account?{" "}
        <Link to={"/login"} className="font-bold cursor-pointer">
          Login
        </Link>{" "}
        now.
      </div>
    </form>
  </div>
  )
}

export default Register