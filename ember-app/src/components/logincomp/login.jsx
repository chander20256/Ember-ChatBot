import React from 'react';

const Login = () => {
  return (
    <div className="min-h-screen flex flex-col md:flex-row items-center justify-center bg-[#fdfcdc] px-4 py-10 gap-10">
      {/* Image Section (Responsive) */}
      <div className="w-full md:w-1/2 flex justify-center">
        <img
          src="animations/gifvideo.gif" // Make sure the path matches your image
          alt="Login Illustration"
          className="w-3/4 max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl object-contain"
        />
      </div>

      {/* Login Form Section */}
      <div className="w-full md:w-1/2 max-w-md bg-white border-2 border-[#0081A7] rounded-xl shadow-lg px-8 py-10">
        <h2 className="text-2xl font-bold text-center mb-6">LOG IN</h2>

        <div className="mb-4">
          <input
            type="email"
            placeholder="Email address"
            className="w-full px-4 py-2 bg-[#ffdaba] border border-[#0081A7] rounded-full outline-none"
          />
        </div>
        <div className="mb-6">
          <input
            type="password"
            placeholder="Password"
            className="w-full px-4 py-2 bg-[#ffdaba] border border-[#0081A7] rounded-full outline-none"
          />
        </div>

        <button className="w-full bg-[#0081A7] text-white py-2 rounded-full hover:bg-[#006b8c] transition-all">
          Log In
        </button>

        <div className="mt-4 flex justify-between text-sm text-gray-600">
          <a href="/signup" className="hover:underline">Create an account</a>
          <a href="#" className="hover:underline">Forgot password?</a>
        </div>
      </div>
    </div>
  );
};

export default Login;
