import React from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();

  const handleLogin = () => {
    // Navigate to the path you want after login, e.g., "/dashboard"
    navigate('/home');
  };

  return (
    <div className = "login" style={{
      height: '100vh',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'column',
      backgroundColor: '#34495e',
    }}>
      <h1 className='login-welcome'>Welcome</h1>
      <button onClick={handleLogin} style={{
        backgroundColor: 'rgb(237, 235, 235)',
        border: '1px solid rgb(12, 12, 12)',
        borderRadius: '10px',
        boxShadow:'5px 5px 5px hsla(0,0%,0%,0.1)',
        padding: '10px 20px',
        fontSize: '16px',
        cursor: 'pointer',
        color: 'black',
      }}>Click Here to create a To-Do List</button>
    </div>
  );
};

export default Login;
