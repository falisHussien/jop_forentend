import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';

const AuthForm = ({ isLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    setUsername('');
    setPassword('');
    setError('');
    setSuccessMessage('');
  }, [isLogin]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setSuccessMessage('');
    
    try {
      const response = await axios.post(
        `http://localhost:5000/api/${isLogin ? 'login' : 'register'}`,
        { username, password }
      );
  
      if (isLogin) {
        const token = response.data.token;
        
        if (!token) {
          throw new Error("No token received. Check backend response.");
        }
  
        localStorage.setItem('token', token); // Store token
        setSuccessMessage('Login successful!');
        navigate('/Dashpourt'); // Redirect to Dashboard
      } else {
        setSuccessMessage('Registration successful! Please login.');
        navigate('/login');
      }
    } catch (err) {
      setError(err.response?.data?.message || 'An error occurred.');
    }
  };
  
  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded shadow">
      <h2 className="text-2xl font-semibold mb-4 text-center">
        {isLogin ? 'Login' : 'Register'}
      </h2>
      {error && <p className="text-red-500 mb-4 text-center">{error}</p>}
      {successMessage && <p className="text-green-500 mb-4 text-center">{successMessage}</p>}
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Username
          </label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Password
          </label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full"
        >
          {isLogin ? 'Login' : 'Register'}
        </button>
      </form>
      {successMessage && isLogin && (
        <button onClick={handleProceed} className="mt-4 bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full">
          Proceed to Jobs
        </button>
      )}
      <p className="mt-4 text-center">
        {isLogin ? (
          <Link to="/register">Don't have an account? Register</Link>
        ) : (
          <Link to="/login">Already have an account? Login</Link>
        )}
      </p>
    </div>
  );
};

export default AuthForm;