import { Outlet, Navigate, useLocation} from 'react-router-dom';
import { AuthenticationContext } from '../context/UserContext';
import { useContext } from 'react';

const Protected = (props) => {
  const location = useLocation();
  //console.log(props.isLoggedIn);
  if(props.isLoggedIn) {
    return <Outlet />;
  }
  else if(props.guest){
    return <Navigate to="/login" state={{from: location}} replace />;
  }
};
export default Protected;