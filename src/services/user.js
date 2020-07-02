import { get, post } from "./http";

export function getAllUsers() {
  return get("/api/users");
}

export function getUserWithId(id) {
  return get(`/api/users/${id}`);
}

export function createNewUser(user) {
  return post("api/users", user);
}
