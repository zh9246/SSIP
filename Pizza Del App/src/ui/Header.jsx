
import React from 'react';
import { Link } from 'react-router-dom';
import SearchOrder from '../features/order/SearchOrder';
import Username from '../features/user/Username';
import './Header.css';
import icon from "../assets/pizza.png";
function Header() {
  return (
    <header className="flex items-center justify-between border-b border-stone-200 bg-yellow px-4 py-3 uppercase sm:px-6">
      <img src={icon} style={{ height: '40px', width: '40px' }} alt="SwiftSlice" />
      <Link to="/" className="tracking-widest font-bold header-title">
        
        SwiftSlice
      </Link>
      <SearchOrder />
      <Username />
    </header>
  );
}

export default Header;
