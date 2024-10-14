import React, { useState, useEffect } from 'react';
import { Lock, User } from 'lucide-react';

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

const RadioButton = ({ id, name, value, checked, onChange, label }) => (
  <div className="flex items-center space-x-2 p-2 rounded-md hover:bg-gray-100">
    <input
      id={id}
      type="radio"
      name={name}
      value={value}
      checked={checked}
      onChange={onChange}
      className="form-radio text-blue-600"
    />
    <label htmlFor={id} className="flex items-center cursor-pointer">
      <span>{label}</span>
    </label>
  </div>
);

const RegisterPage = ({ setState }) => {
  console.log('RegisterPage rendering');

  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: '',
    confirmPassword: '',
    userType: 'client',
  });

  useEffect(() => {
    console.log('RegisterPage mounted');
    return () => console.log('RegisterPage unmounted');
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => {
      console.log('Updating form data:', { ...prevData, [name]: value });
      return {[name]: value};
    });
    
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Form submitted ${JSON.stringify(formData)}');
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 to-green-100 p-4">
      <Card className="w-full max-w-md p-6">
        <div className="text-center mb-6">
          <h2 className="text-2xl font-bold text-blue-700">PharmaCare<br/> Registration</h2>
        </div>
        <form onSubmit={handleSubmit} className="space-y-4">
          <Input
            type="text"
            name="fullName"
            placeholder="Full Name"
            value={formData.fullName}
            onChange={handleChange}
            className="border-gray-300 focus:border-black-500 focus:ring-black-500"
          />
          <Input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            className="border-gray-300 focus:border-black-500 focus:ring-black-500"
          />
          <Input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            className="border-gray-300 focus:border-black-500 focus:ring-black-500"
          />
          <Input
            type="password"
            name="confirmPassword"
            placeholder="Confirm Password"
            value={formData.confirmPassword}
            onChange={handleChange}
            className="border-gray-300 focus:border-black-500 focus:ring-black-500"
          />
          <div className="space-y-2">
            <p className="font-semibold text-gray-700">I am registering as a:</p>
            <RadioButton
              id="client"
              name="userType"
              value="client"
              checked={formData.userType === 'client'}
              onChange={handleChange}
              label="Client"
            />
            <RadioButton
              id="employee"
              name="userType"
              value="employee"
              checked={formData.userType === 'employee'}
              onChange={handleChange}
              label="Employee"
            />
            <RadioButton
              id="supplier"
              name="userType"
              value="supplier"
              checked={formData.userType === 'supplier'}
              onChange={handleChange}
              label="Supplier"
            />
          </div>
          <Button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white"
          >
            Register
          </Button>
        </form>
        <div className="mt-4 text-center">
          <a href="#" onClick={() => setState('login')} className="text-sm text-blue-600 hover:underline">Already have an account? Log in</a>
        </div>
      </Card>
    </div>
  );
};

export default RegisterPage;