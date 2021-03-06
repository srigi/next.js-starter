import { decode, verify } from 'jsonwebtoken';

import { AuthTokenPayload } from '../types/jwt';

export const AUTH_KEY_NAME = 'auth-jwt';
export const ALGORITHM = 'RS256';

export const loadAuthToken = (token: string, jwtPublicKey?: string): AuthTokenPayload => {
  if (jwtPublicKey != null) {
    return verify(token, jwtPublicKey) as AuthTokenPayload;
  }

  return decode(token) as AuthTokenPayload;
};
