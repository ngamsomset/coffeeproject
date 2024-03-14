// LoginFormWithImage.tsx
import React from 'react';

const LoginFormWithImage: React.FC = () => {
  return (
    <div className="flex bg-white rounded-lg shadow-lg overflow-hidden mx-auto max-w-sm lg:max-w-4xl">
        
        <div className="w-full p-8 lg:w-2/5">
    <h1 className="text-2xl font-semibold text-center">Welcome, MATE!</h1>
          <h2 className="text-lg font-semibold mb-4">Login</h2>
          <form>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
                Username
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="username"
                type="text"
                placeholder="myemail@example.com"
              />
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                Password
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="password"
                type="password"
                placeholder="password"
              />
              <a className="inline-block align-baseline font-bold text-sm text-blue hover:text-blue-darker" href="#">
        Forgot Password?
      </a>
            </div>
            {/* Other input fields */}
            {/* Add your signup form fields here */}
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>

            <button 
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
              
            >
              Login
            </button>
            </div>
          </form>
          <div className="mt-4 flex items-center justify-between">
                <span className="border-b w-1/5 md:w-2/5"></span>
                <a href="#" className="text-xs text-gray-500 uppercase">OR</a>
                <span className="border-b w-1/5 md:w-2/5"></span>
                
            </div>
            <div className="mt-4 flex flex-col items-center pd-1">
            <div className="mb-4">Sign up with us!</div>
                <div>
                <button
              className="bg-button hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              
            >
              Sign up
            </button>
            </div>
          </div>
        </div>
        <div className="hidden lg:block lg:w-3/5 bg-cover bg-hero opacity-78"></div>
      </div>
     
     
  
  );
};

export default LoginFormWithImage;
