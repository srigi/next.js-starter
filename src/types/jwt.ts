export interface AuthTokenPayload {
  exp: number;
  roles: string[];
  sub: string;
}
