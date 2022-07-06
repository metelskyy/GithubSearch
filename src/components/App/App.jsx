import React, { useState } from "react";
import Start from "../../pages/Start/Start";
import Header from "./Header/Header";
import Profile from "../Profile/Profile";
import NotFound from "../../pages/NotFound/NotFound";
import Loader from "../Loader/Loader";
import { Context } from "../../context";
import { getUserRepos, getTotalItems, getUser } from "../../API/getData";

const App = () => {
  console.log("RENDER");

  const [user, setUser] = useState(null);
  const [userName, setUserName] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [repoList, setRepoList] = useState([]);
  const [totalCount, setTotalCount] = useState(0);

  const setUserRepos = async (userName) => {
    setIsLoading(true);
    setUserName(userName);
    setRepoList(await getUserRepos(userName));
    setTotalCount(await getTotalItems(userName));
    setUser(await getUser(userName));
    setIsLoading(false);
  };

  return (
    <Context.Provider
      value={{ user, repoList, totalCount, userName, setRepoList }}
    >
      <div className="app">
        <Header setUserRepos={(userName) => setUserRepos(userName)} />
        {userName === "" ? (
          <Start />
        ) : isLoading ? (
          <Loader />
        ) : user ? (
          <Profile />
        ) : (
          <NotFound />
        )}
      </div>
    </Context.Provider>
  );
};

export default App;
