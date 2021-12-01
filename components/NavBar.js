import Link from "next/link";
import React from "react";
import css from "styled-jsx/css";
import ThemeSwitch from "./ThemeSwitch";

const NavBar = () => {
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
      </ul>
      <ThemeSwitch />
      <style jsx>{styles}</style>
    </nav>
  );
};

const styles = css`
  nav {
    display: flex;
    justify-content: space-between;
  }
  
  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    display: inline;
  }

  li:not(:first-child) {
    margin-left: 0.75rem;
  }
`;

export default NavBar;
