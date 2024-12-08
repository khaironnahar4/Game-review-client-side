import { createContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword, 
  GoogleAuthProvider, 
  onAuthStateChanged, 
  signInWithEmailAndPassword, 
  signInWithPopup, 
  signOut, 
  updateProfile
} from "firebase/auth";
import auth from "./firebase.config"
import { useNavigate } from "react-router-dom";



export const AuthContext = createContext({});

function AuthProvider({ children }) {
  const [user, setUser] = useState({});
  const [loader, setLoader] = useState(true);
  // const navigate = useNavigate();

  // register
  const register = (email,password)=>{
    setLoader(true);
    return createUserWithEmailAndPassword(auth, email, password)
  }

  // login
  const login = (email,password)=>{
    setLoader(true);
    return signInWithEmailAndPassword(auth, email, password)
  }

  // logout
  const logout = ()=>{
    setLoader(true)
    signOut(auth).then(() => {
      // Sign-out successful.
      setUser({});
    }).catch((error) => {
      // An error happened.
      console.log(error);
      
    });
  }

  // signin with google
  const signInWithGoogle = ()=>{
    setLoader(true);
    const provider = new GoogleAuthProvider();

    signInWithPopup(auth, provider)
    .then(Result =>{
      const user = Result.user;
      setUser(user);
      // navigate('/');
    })
    .catch(error =>{
      console.log(error);
    })

  }

  // update user
  const UpdateProfile = (currentUser, userInfo)=>{
    setLoader(true);
    return updateProfile(currentUser, userInfo)
}

  // observer
  useEffect(()=>{
    const unSubscribe = onAuthStateChanged(auth, currentUser =>{
      if(currentUser && currentUser?.email){
        setLoader(false)
        setUser(currentUser)
      }
      return ()=>{
        unSubscribe();
      }
    })
  }, [])

  const userData = {
    user,
    setUser,
    loader,
    setLoader,
    register,
    login,
    logout,
    signInWithGoogle,
    UpdateProfile
    };

  return (
    <AuthContext.Provider value={userData}>
      {children}
    </AuthContext.Provider>
  );
}

export default AuthProvider;
