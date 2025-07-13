import React, { useState } from 'react';
import Typewriter from 'typewriter-effect';

const Hero = () => {
  const [query, setQuery] = useState('');

  const prompts = [
    "I feel anxious all the time…",
    "Why do I feel so empty?",
    "How do I cope with overthinking?",
    "Is it normal to feel this sad?",
    "I can’t stop worrying about everything.",
    "How do I deal with panic attacks?",
    "Why can't I sleep at night?",
    "I feel like I'm not good enough.",
    "How do I manage my stress better?",
    "I'm tired, but I don’t know why.",
    "How can I stop negative thoughts?",
    "I feel alone even around people.",
  ];

  const handleSearch = () => {
    if (!query.trim()) {
      alert("Please type what you're feeling or want to ask.");
      return;
    }
    alert(`Searching for: ${query}`);
  };

  return (
    <div className="relative min-h-screen overflow-hidden flex justify-center items-center px-4">
      {/* Background Animations */}
      <img
        src="animations/3.gif"
        alt=""
        className="absolute top-[6%] left-[10%] sm:top-[10%] sm:left-[10%] md:top-[3%] md:left-[10%] w-44 md:w-64 pointer-events-none z-10"
      />
      <img
        src="animations/5.gif"
        alt=""
        className="hidden sm:block absolute top-[10%] right-[50%] sm:top-[10%] sm:right-[10%] md:top-[3%] md:right-[20%] w-32 md:w-64 pointer-events-none z-10"
      />
      <img
        src="animations/6.gif"
        alt=""
        className="absolute top-[20%] right-[10%] sm:top-[30%] sm:right-[0%] md:top-[30%] md:right-[0%] w-32 md:w-64 pointer-events-none z-10"
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
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-48 md:w-64 pointer-events-none z-10"
      />
      <img
        src="animations/4.gif"
        alt=""
        className="absolute bottom-10 right-0 w-32 md:w-64 pointer-events-none z-10 -rotate-45"
      />

      {/* Main Content */}
      <div className="z-20 text-center max-w-3xl mx-auto">
        <h1
          className="text-2xl md:text-5xl font-bold mb-3"
          style={{ fontFamily: '"Cera Pro", sans-serif' }}
        >
          Your Safe Space for Healing
        </h1>
        <p className="text-xs md:text-lg mb-2">
          Feeling overwhelmed? Anxious? Or simply need someone to listen?
        </p>
        <p className="text-xs md:text-lg">
          Our AI-powered mental health companion is here to support you, anytime, anywhere, without judgment. Let’s take the first step toward a calmer, clearer mind—together.
        </p>

        {/* Responsive Search Bar */}
        <div className="mt-6 flex justify-center px-4 relative">
          <div className="flex items-center w-full max-w-xl bg-[#ffdaba] border-4 border-[#0081A7] rounded-full overflow-hidden pl-2 pr-1 py-1 relative">
            {/* Typewriter Placeholder */}
            {!query && (
              <div className="absolute left-4 sm:left-6 text-sm sm:text-base text-gray-500 pointer-events-none z-10">
                <Typewriter
                  options={{
                    strings: prompts,
                    autoStart: true,
                    loop: true,
                    delay: 60,
                    deleteSpeed: 30,
                    pauseFor: 1800,
                  }}
                />
              </div>
            )}

            {/* Input Field */}
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="flex-grow bg-transparent outline-none text-gray-700 placeholder-transparent text-sm sm:text-base px-2 py-2 z-20"
            />

            {/* Desktop Button */}
            <button
              onClick={handleSearch}
              className="hidden md:block bg-[#0081A7] text-white text-sm px-6 h-10 rounded-full hover:bg-[#006b8c] transition-all"
            >
              Search
            </button>

            {/* Mobile Button */}
            <button
              onClick={handleSearch}
              className="md:hidden bg-[#0081A7] text-white w-10 h-10 rounded-full flex justify-center items-center hover:bg-[#006b8c] transition-all"
            >
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
