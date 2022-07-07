import axios from "axios";
import BASE_USER_URL from "../constants/baseUrl";

export const fetchUserRepos = async (userName) => {
  try {
    const { data } = await axios.get(
      BASE_USER_URL +
        userName.toLowerCase() +
        "/repos" +
        `?page=${1}` +
        "&per_page=4"
    );
    return data;
  } catch (e) {
    console.log(e);
    return [];
  }
};

export const fetchTotalItems = async (userName) => {
  try {
    const { data } = await axios.get(
      BASE_USER_URL + userName.toLowerCase() + "/repos"
    );
    return data.length;
  } catch (e) {
    console.log(e);
    return 0;
  }
};

export const fetchUser = async (userName) => {
  try {
    const { data } = await axios.get(BASE_USER_URL + userName.toLowerCase());
    return data;
  } catch (error) {
    console.log(`getUser : ${error}`);
    return null;
  }
};

export const fetchRepoPage = async (currentPage, userName) => {
  try {
    const { data } = await axios.get(
      "https://api.github.com/users/" +
        userName.toLowerCase() +
        "/repos" +
        `?page=${currentPage}` +
        "&per_page=4"
    );
    return data;
  } catch (e) {
    console.log(e);
    return [];
  }
};
