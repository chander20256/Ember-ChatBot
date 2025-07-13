import React from 'react';

const Signup = () => {
  return (
    <div className="min-h-screen flex flex-col md:flex-row items-center justify-center bg-[#fdfcdc] px-4 py-10 gap-10">
      {/* Image Section (Responsive) */}
      <div className="w-full md:w-1/2 flex justify-center">
        <img
          src="animations/gifvideo.gif" // Adjust path if needed
          alt="Signup Illustration"
          className="w-3/4 max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl object-contain"
        />
      </div>

      {/* Signup Form Section */}
      <div className="w-full md:w-1/2 max-w-md bg-white border-2 border-[#0081A7] rounded-xl shadow-lg px-8 py-10">
        <h2 className="text-2xl font-bold text-center mb-6">SIGN UP</h2>

        <div className="mb-4">
          <input
            type="text"
            placeholder="Full Name"
            className="w-full px-4 py-2 bg-[#ffdaba] border border-[#0081A7] rounded-full outline-none"
          />
        </div>
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
          Sign Up
        </button>

        <div className="mt-4 flex justify-between text-sm text-gray-600">
          <a href="/login" className="hover:underline">Already have an account?</a>
          <a href="#" className="hover:underline">Need help?</a>
        </div>
      </div>


      
    </div>
  );
};

export default Signup;
