import React from 'react';
import Link from "next/link";
import logo from '../../public/logo.png';
import Image from 'next/image';

const Navbar = () => {
  return (
    <nav className="navbar">
      {/* Logo */}
      <div className="navbar-brand">
        
        <Link href="/">
        <Image src={logo.src} alt='logo' width={100} height={100} /></Link>
      </div>

      {/* Navigation Links */}
      <ul className="nav-links">
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/about">About</Link>
        </li>
        <li>
          <Link href="/contact">Contact</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
