import { get } from "./http";

export function getFormFields() {
  return get("/api/users/create-user-form");
}
