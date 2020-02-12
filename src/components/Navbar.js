import React from 'react';
import Link from 'next/link';

function Navbar() {
  return (
    <nav>
      <ul>
        <li>
          <Link href="/">
            <a>Home</a>
          </Link>
        </li>
        <li>
          <Link href="/about">
            <a>About</a>
          </Link>
        </li>
        <li>
          <Link href="/menu">
            <a>Menu</a>
          </Link>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar;
