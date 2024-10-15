import React from 'react';

function Header() {
  return (
    <header>
      <div className="logo-nav-container">
        <div className="logo">Netflix</div>
        <nav>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/TV Shows">TY Shows</a></li>
            <li><a href="/Movies">Movies</a></li>
            <li><a href="/New & Popular">New & Popular</a></li>
            <li><a href="/My List">My List</a></li>
          </ul>
        </nav>
        <div className="profile">
          <img src="https://th.bing.com/th/id/OIP.WMM14tV_QL5jH2Qkjb33OAHaEL?rs=1&pid=ImgDetMain" alt="Profile" />
        </div>
      </div>
    </header>
  );
}

export default Header;
