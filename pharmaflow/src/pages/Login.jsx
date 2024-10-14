import React, { useState } from 'react';
import {Link } from 'react-router-dom';
import { Lock, LogIn, User } from 'lucide-react';

const Card = ({ children, className }) => (
  <div className={`bg-white shadow-lg rounded-lg ${className}`}>
    {children}
  </div>
);

const Input = ({ type, placeholder, value, onChange, className }) => (
  <input
    type={type}
    placeholder={placeholder}
    value={value}
    onChange={onChange}
    className={`w-full p-2 border rounded-md focus:outline-none focus:ring-2 ${className}`}
  />
);

const Button = ({ children, type = 'button', className }) => (
  <button
    type={type}
    className={`py-2 px-4 rounded-md focus:outline-none focus:ring-2 ${className}`}
  >
    {children}
  </button>
);

const LoginPage = ({ setState }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle login logic here
    if (!username || !password) {
      alert('Please enter username and password');
      return;
    }
    if (username === 'admin' && password === 'admin') {
      alert('Logged in successfully');
    }
    console.log('Login submitted:', { username, password });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 to-green-100">
      <Card className="w-full max-w-md p-6">
        <div className="text-center mb-6">
          <h2 className="text-2xl font-bold text-blue-700">PharmaFlow <br />-Login-</h2>
        </div>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="relative">
            <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
            <Input
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="pl-10 border-green-300 focus:border-green-500 focus:ring-green-500"
            />
          </div>
          <div className="relative">
            <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
            <Input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="pl-10 border-green-300 focus:border-green-500 focus:ring-green-500"
            />
          </div>
          <Button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white"
          >
            Log In
          </Button>
        </form>
        <div className="mt-4 text-center">
          <a href="#" className="text-sm text-blue-600 hover:underline">Forgot password?</a>
          <br />
          <a href='#' onClick={() => setState(false)} className="text-sm text-blue-600 hover:underline">Create an account?</a>
        </div>
      </Card>
    </div>
  );
};

export default LoginPage;