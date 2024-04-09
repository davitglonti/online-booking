import React, { useState, useEffect } from 'react';
import './Navbar.css'
const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      if (scrollPosition > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleProfileMenu = () => {
    setIsProfileMenuOpen(!isProfileMenuOpen);
  };

  return (
    <nav className={isScrolled ? 'navbar scrolled' : 'navbar'}>
      <div className="logo">Your Site Name</div>
      <ul className="nav-links">
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About Us</a></li>
        <li><a href="#blogs">Blogs</a></li>
        <li><a href="#services">Our Services</a></li>
        <li><a href="#offers">Our Offers</a></li>
        <li><a href="#offers" onClick={toggleProfileMenu}>profile
        {isProfileMenuOpen && (
            <div className="profile-menu">
              <ul>
                <li> <a href='/Login'>Sign In</a></li>
                <li>Sign Up</li>
                <li>Sign Out</li>
              </ul>
            </div>
          )}
        </a></li>
      </ul>
     
    </nav>
  );
};

export default Navbar;