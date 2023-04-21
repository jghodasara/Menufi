export interface User {
  email?: string;
  theme?: string;
}

export interface UserData {
  email?: string;
  fName?: string;
  lName?: string;
  id?: string;
}

export interface AppData {
  activeUser: User | undefined;
}
