import { useContext } from "react"
import { AuthContext } from "../Auth/AuthProvider"
import { Navigate } from "react-router-dom"


function PrivateRoute({children}) {
    const {user} = useContext(AuthContext);

    if(user && user?.email) return children;

  return (
    <Navigate to={'/login'}>
    </Navigate>
  )
}

export default PrivateRoute