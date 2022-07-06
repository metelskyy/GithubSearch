import React, { useContext } from "react";
import shared from "../../assets/icons/shared.svg";
import provate from "../../assets/icons/provate.svg";
import styles from "./Info.module.css";
import { Context } from "../../context";

const Info = () => {
  const { user } = useContext(Context);
  const followers =
    user.followers >= 1000000
      ? Math.round(user.followers / 1000000) + "m"
      : user.followers >= 1000
      ? Math.round(user.followers / 1000) + "k"
      : user.followers;

  return (
    <div className={styles.info}>
      <img className={styles.photo} src={user.avatar_url} alt="user-img" />
      <h2 className={styles.name}>
        {user.name ? user.name : "User has no name"}
      </h2>
      <a
        rel="noreferrer"
        target="_blank"
        className={styles.link}
        href={user.html_url}
      >
        {user.login}
      </a>
      <ul className={styles.list}>
        <li className={styles.item}>
          <img className={styles.icon} src={shared} alt="shared" />
          {followers} followers
        </li>
        <li className={styles.item}>
          <img className={styles.icon} src={provate} alt="provate" />
          {user.following} following
        </li>
      </ul>
    </div>
  );
};

export default Info;
