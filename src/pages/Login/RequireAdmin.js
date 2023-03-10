import { useAuthState, useSignOut } from "react-firebase-hooks/auth";
import { Navigate, useLocation, useNavigate } from "react-router-dom";
import Loading from "../../components/Loading";
import auth from "../../firebase.config";
import useAdmin from "../../hooks/useAdmin";

const RequirAdmin = ({children}) => {
    const [user, loading, error] = useAuthState(auth);
    const [admin, adminLoading] = useAdmin(user);
    const [signOut] = useSignOut(auth);
    const navigate = useNavigate();
    const location = useLocation();

    if(loading || adminLoading){
        return <Loading/>
    }
    if(!user || !admin){
        signOut()
        return <Navigate to="/" ></Navigate>
    }

    return children;
};

export default RequirAdmin;