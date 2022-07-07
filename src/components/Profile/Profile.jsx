import React from "react";
import NotFound from "../../pages/NotFound/NotFound";
import Info from "../Profile/Info/Info";
import Repositories from "../Repositories/Repositories";
import styles from "./Profile.module.css";

const Profile = ({ user }) => {
  if (!user) return <NotFound />;
  return (
    <div className={styles.profile}>
      <Info />
      <Repositories />
    </div>
  );
};

export default Profile;
