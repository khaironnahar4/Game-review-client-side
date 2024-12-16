import { useContext } from "react"
import { AuthContext } from "../Auth/AuthProvider"
import { Navigate } from "react-router-dom"


function PrivateRoute({children}) {
    const {user, loader} = useContext(AuthContext);

    if(loader) return <p>Loading...</p>

    if(user && user?.email) return children;

  return (
    <Navigate to={'/login'}>
    </Navigate>
  )
}

export default PrivateRoute