export class UserClass {
  _id: string;
  name: string;
  email: string;

  constructor() {
    this._id = '';
    this.name = '';
    this.email = '';
  }
}
export interface users {
  _id: string;
  name: string;
  email: string;
}

export interface Userlocal {
  message: string;
  user: users;
  error: false;
}

export interface responseUser {
  message: string;
  error: boolean;
}
