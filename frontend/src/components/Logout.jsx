import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Logout = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const logoutUser = async () => {
      try {
        // Send request to logout endpoint if using Knox or DRF token logout
        await axios.post('/api/logout/', {}, {
          headers: {
            Authorization: `Token ${localStorage.getItem('authToken')}`,
          }
        });

        // Clear token from localStorage or cookies
        localStorage.removeItem('authToken');

        // Redirect to login
        navigate('/');
      } catch (error) {
        console.error('Logout failed:', error);
        // Fallback to login even if server logout fails
        localStorage.removeItem('authToken');
        navigate('/');
      }
    };

    logoutUser();
  }, [navigate]);

  return <div>Logging out...</div>;
};

export default Logout;
