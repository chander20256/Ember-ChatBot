import { Menu, X } from 'lucide-react';
import React, { useEffect, useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const links = [
    { name: 'Privacy Policy', href: '/privacy' },
    { name: 'Need Help?', href: '/help' },
  ];

  useEffect(() => {
    const closeMenuOnResize = () => {
      if (window.innerWidth >= 768) {
        setIsOpen(false);
      }
    };
    window.addEventListener('resize', closeMenuOnResize);
    return () => window.removeEventListener('resize', closeMenuOnResize);
  }, []);

  return (
    <div className="relative z-50 w-full">
      {/* Fixed Navbar */}
      <nav className="fixed top-0 left-0 w-full bg-[#fefddf] flex justify-between items-center py-4 px-4 md:px-20 z-40">
        {/* Logo */}
        <div>
          <h1 className="logo-font ">EMBER</h1>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex gap-6 items-center">
          {links.map((link) => (
            <NavLink
              key={link.name}
              to={link.href}
              className="text-sm text-black hover:underline"
            >
              {link.name}
            </NavLink>
          ))}
          <NavLink
            to="/login"
            className="bg-[#0085a1] text-white text-sm font-semibold py-2 px-5 rounded-full hover:bg-[#006c87] transition"
          >
            LOG IN
          </NavLink>
        </div>

        {/* Mobile Buttons */}
        <div className="flex items-center gap-3 md:hidden">
          <NavLink
            to="/login"
            className="bg-[#0085a1] text-white text-sm font-semibold py-1.5 px-4 rounded-full hover:bg-[#006c87] transition"
          >
            LOG IN
          </NavLink>
          <button onClick={handleToggle} className="focus:outline-none">
            {isOpen ? <X className="text-black" /> : <Menu className="text-black" />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="fixed top-[72px] right-0 h-screen w-3/4 max-w-xs bg-[#0085a1] text-white z-40 shadow-lg p-5 transition-all duration-300">
          <div className="flex flex-col gap-6 mt-10">
            {links.map((link) => (
              <NavLink
                key={link.name}
                to={link.href}
                className="w-full text-center p-2 rounded-lg hover:bg-white hover:text-black text-base transition"
                onClick={() => setTimeout(() => setIsOpen(false), 200)}
              >
                {link.name}
              </NavLink>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
