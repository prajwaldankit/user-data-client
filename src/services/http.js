import axios from "../config/axios";

export function get(url) {
  return axios({
    method: "get",
    url: url,
  });
}

export function post(url, data) {
  return axios({
    method: "post",
    url: url,
    data: data,
  });
}
