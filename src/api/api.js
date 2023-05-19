import axios from "axios";

export const getFirstPageUsers = ()=> {
    return axios
      .get(
        `https://frontend-test-assignment-api.abz.agency/api/v1/users?page=1&count=6`
      )
      .then((res) => {
        return res.data;
      });
  };
  export const getNextPage = (url)=> {
    return axios
      .get(url)
      .then((res) => {
        return res.data;
      });
  };