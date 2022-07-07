import React, { useState } from "react";
import styles from "./Header.module.css";
import loop from "../../../assets/icons/search.svg";
const Header = ({ setUserProfile }) => {
  const [userName, setUserName] = useState("");

  const handleOnClick = () => {
    setUserProfile(userName);
  };

  const handleOnKeyPress = (e) => {
    if (e.key === "Enter") {
      setUserProfile(userName);
    }
  };

  return (
    <header className={styles.header}>
      <div className={styles.wrapper}>
        <div className={styles.inputWrapper}>
          <img
            className={styles.icon}
            src="https://www.ab-it.io/wp-content/uploads/2017/09/github-logo.png"
            alt="github-icon"
          ></img>
          <img
            onClick={handleOnClick}
            className={styles.loop}
            src={loop}
            alt="search"
          ></img>
          <input
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
            onKeyPress={handleOnKeyPress}
            className={styles.input}
            placeholder="Enter GitHub username"
          />
        </div>
      </div>
    </header>
  );
};
export default Header;
