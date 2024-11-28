export interface IUser {
  id: number;
  username: string;
  password: string;
  accessToken: string;
}

export interface IUserRegisterInfo {
  username: string;
  password: string;
}

export interface IUserLoginInfo {
  username: string;
  password: string;
}