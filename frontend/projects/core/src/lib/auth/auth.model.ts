export interface AuthResponse {
  access_token: string;
  user: CurrentUser;
}

export interface CurrentUser {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
}
