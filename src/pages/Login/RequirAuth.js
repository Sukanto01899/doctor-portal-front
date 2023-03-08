import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate, useLocation, useNavigate } from 'react-router-dom';
import Loading from '../../components/Loading';
import auth from '../../firebase.config';

const RequirAuth = ({children}) => {
    const [user, loading, error] = useAuthState(auth);
    const navigate = useNavigate();
    const location = useLocation();

    if(loading){
        return <Loading/>
    }
    if(!user){
        return <Navigate to="/login" state={{from: location}} replace></Navigate>
    }

    return children;
};

export default RequirAuth;