import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../../Context/UserContext';
import useAdmin from '../../hooks/UseAdmin';
import Loading from '../Pages/Shared/Loader/Loading';


const AdminRoutes = ({children}) => {

    const {user,loading}=useContext(AuthContext);
    const [isAdmin,isAdminLoading] = useAdmin(user?.email)
    const location = useLocation();
 if (loading || isAdminLoading) {
    return <Loading></Loading>
 }
    if (user && isAdmin) {
        return children;
        
    }
    return <Navigate to='/login' state={{from:location}} replace></Navigate>
};

export default AdminRoutes;

// admin 
// prevent Admin[jaite e deya jabe na]
// hit admin url  api Check to admin role
// Link hide , Show only admin 