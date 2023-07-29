import { useContext } from 'react';

import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../Provider/AuthProvider';
import Swal from 'sweetalert2';

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-green-500"></div>
      </div>
    );
  }

  if (user?.email) {
    return children;
  }

  Swal.fire('You have to log in first to view details');

  return (
    <div>
      <Navigate state={{ from: location }} to="/login" replace />
    </div>
  );
};

export default PrivateRoute;
