import React from 'react';

const Hero = () => {
  return (
    <div className="relative min-h-screen overflow-hidden flex justify-center items-center px-4">
      {/* Background Animations */}
      <img
        src="animations/3.gif"
        alt=""
        className="absolute top-[6%] left-[14%] sm:top-[10%] sm:left-[10%] md:top-[3%] md:left-[10%] w-52 md:w-64 pointer-events-none z-10"
      />
      <img
        src="animations/5.gif"
        alt=""
        className="hidden sm:block absolute top-[10%] right-[50%] sm:top-[10%] sm:right-[10%] md:top-[3%] md:right-[10%] w-32 md:w-64 pointer-events-none z-10"
      />
      <img
        src="animations/6.gif"
        alt=""
        className="absolute top-[10%] right-[10%] sm:top-[30%] sm:right-[0%] md:top-[30%] md:right-[0%] w-32 md:w-64 pointer-events-none z-10"
      />
      <img
        src="animations/2.gif"
        alt=""
        className="absolute top-[75%] left-[0%] sm:top-[30%] sm:right-[0%] md:top-[30%] md:right-[0%] w-32 md:w-64 scale-x-[-1] pointer-events-none z-10"
      />
      <img
        src="animations/7.gif"
        alt=""
        className="hidden sm:block absolute bottom-0 left-[10%] w-32 md:w-64 scale-x-[-1] pointer-events-none z-10"
      />
      <img
        src="animations/1.gif"
        alt=""
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-32 md:w-64 pointer-events-none z-10"
      />
      <img
        src="animations/4.gif"
        alt=""
        className="absolute bottom-0 right-0 w-32 md:w-64 pointer-events-none z-10"
      />

      {/* Main Content */}
      <div className="z-20 text-center max-w-3xl mx-auto">
        <h1 className="text-2xl md:text-5xl font-bold mb-6">
          Your Safe Space for Healing
        </h1>
        <p className="text-sm md:text-lg mb-4">
          Feeling overwhelmed? Anxious? Or simply need someone to listen?
        </p>
        <p className="text-sm md:text-lg">
          Our AI-powered mental health companion is here to support you, anytime, anywhere, without judgment. Let’s take the first step toward a calmer, clearer mind—together.
        </p>

        {/* Responsive Search Bar */}
        <div className="mt-8 flex justify-center px-4">
          <div className="flex items-center w-full max-w-xl bg-[#ffdaba] border-4 border-[#0081A7] rounded-full overflow-hidden px-1 py-1">
            {/* Input */}
            <input
              type="text"
              placeholder="I feel anxious all the time…"
              className="flex-grow bg-transparent outline-none text-gray-700 placeholder-gray-500 text-sm sm:text-base px-2 py-2"
            />

            {/* Desktop Button */}
            <button className="hidden md:block bg-[#0081A7] text-white text-sm px-6 h-10 rounded-full hover:bg-[#006b8c] transition-all">
              Search
            </button>

            {/* Mobile Button */}
            <button className="md:hidden bg-[#0081A7] text-white w-10 h-10 rounded-full flex justify-center items-center hover:bg-[#006b8c] transition-all">
              <img
                src="images/search.png"
                alt="Search"
                className="w-5 h-5 object-contain"
              />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
