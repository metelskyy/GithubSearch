import React from "react";
import Info from "../Info/Info";
import Repositories from "../Repositories/Repositories";
import styles from "./Profile.module.css";

const Profile = () => {
  return (
    <div className={styles.profile}>
      <Info />
      <Repositories />
    </div>
  );
};

export default Profile;
