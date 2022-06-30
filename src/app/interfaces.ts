export interface UserLoginData {
  username: string;
  password: string;
}

export interface TokenData {
  refresh: string;
  access: string;
}

export interface TokenRefreshRequest {
  refresh: string;
}

export interface Token {
  "token_type": string,
  "exp": number,
  "iat": number,
  "jti": string,
  "user_id": number,
  "username": string
}

