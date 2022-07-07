import React, { useState } from "react";
import Start from "../../pages/Start/Start";
import Header from "./Header/Header";
import Profile from "../Profile/Profile";
import Loader from "./Loader/Loader";
import { Context } from "../../context";
import {
  fetchUserRepos,
  fetchTotalItems,
  fetchUser,
} from "../../API/fetchUserProfile";

const App = () => {
  console.log("RENDER");

  const [user, setUser] = useState(null);
  const [userName, setUserName] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [repoList, setRepoList] = useState([]);
  const [totalCount, setTotalCount] = useState(0);

  const setUserProfile = async (userName) => {
    setIsLoading(true);
    setUserName(userName);
    setRepoList(await fetchUserRepos(userName));
    setTotalCount(await fetchTotalItems(userName));
    setUser(await fetchUser(userName));
    setIsLoading(false);
  };

  const renderComponents = () => {
    if (isLoading) return <Loader />;
    else if (userName === "") return <Start />;
    return <Profile user={user} />;
  };

  return (
    <Context.Provider
      value={{ user, repoList, totalCount, userName, setRepoList }}
    >
      <div className="app">
        <Header setUserProfile={(userName) => setUserProfile(userName)} />
        {renderComponents()}
      </div>
    </Context.Provider>
  );
};

export default App;
