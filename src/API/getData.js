import axios from "axios";
import BASE_USER_URL from "../constants/baseUrl";

export async function getUserRepos(userName) {
  try {
    const userRepos = await axios.get(
      BASE_USER_URL +
        userName.toLowerCase() +
        "/repos" +
        `?page=${1}` +
        "&per_page=4"
    );
    return userRepos.data;
  } catch (e) {
    console.log(e);
    return [];
  }
}

export async function getTotalItems(userName) {
  try {
    const userTotalRepos = await axios.get(
      BASE_USER_URL + userName.toLowerCase() + "/repos"
    );
    const totalCount = userTotalRepos.data.length;
    return totalCount;
  } catch (e) {
    console.log(e);
    return 0;
  }
}

export async function getUser(userName) {
  try {
    const userInfo = await axios.get(BASE_USER_URL + userName.toLowerCase());
    return userInfo.data;
  } catch (error) {
    console.log(`getUser : ${error}`);
    return null;
  }
}
export const fetchRepoPage = async (currentPage, userName) => {
  try {
    const responce = await axios.get(
      "https://api.github.com/users/" +
        userName.toLowerCase() +
        "/repos" +
        `?page=${currentPage}` +
        "&per_page=4"
    );
    return responce.data;
  } catch (e) {
    console.log(e);
    return [];
  }
};
