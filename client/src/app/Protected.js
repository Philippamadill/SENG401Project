import { Outlet, Navigate } from 'react-router-dom'


const Protected = ({ isLoggedIn, isGuest}) => {
  if (isLoggedIn || isGuest) {
    return <Outlet />;
  }
};
export default Protected;