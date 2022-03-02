import axios from "axios";

export function GET(...args) {
  return axios.get(...args).then((res) => res.data);
}

export function POST(...args) {
  return axios.post(...args).then((res) => res.data);
}
