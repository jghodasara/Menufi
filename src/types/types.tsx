export interface User {
  email?: string;
  theme?: string;
}

export interface AppData {
  activeUser: User | undefined;
}
