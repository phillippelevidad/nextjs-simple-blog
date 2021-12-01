import React, { useState } from "react";
import css from "styled-jsx/css";
import DarkTheme from "components/DarkTheme";

const LOCAL_STORAGE_KEY = "isDarkMode";

function LoadIsDarkMode() {
  if (typeof localStorage === "undefined") {
    return false;
  }
  var storedValue = localStorage.getItem(LOCAL_STORAGE_KEY);
  return storedValue === null ? false : JSON.parse(storedValue);
}

function ThemeSwitch() {
  const [isDarkMode, setIsDarkMode] = useState(LoadIsDarkMode);
  const text = isDarkMode ? "Light mode" : "Dark mode";

  const handleClick = () => {
    const newValue = !isDarkMode;
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(newValue));
    setIsDarkMode(newValue);
  }

  return (
    <>
      <button onClick={handleClick}>{text}</button>
      <style jsx>{styles}</style>
      {isDarkMode && <DarkTheme />}
    </>
  );
};

const styles = css`
  button {
    background: none;
    border: none;
    cursor: pointer;
    color: inherit;
  }
`;

export default ThemeSwitch;
