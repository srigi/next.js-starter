import { createContext, useContext } from 'react';

import { ValidationErrorsResponse } from '../types/api';
import {
  Payload as LoginCredentials,
  SuccessResponse as AuthenticationSuccessResponse,
} from '../types/api.authenticate';

export interface User {
  username: string;
  roles: string[];
}

interface Session {
  user: User | null;
  authenticate: (credentials: LoginCredentials) => void;
  authenticationResponse: AuthenticationSuccessResponse | ValidationErrorsResponse | undefined;
  isAuthenticating: boolean;
}

export const SessionContext = createContext<Session>({
  user: null,
  authenticate: () => {}, // eslint-disable-line @typescript-eslint/no-empty-function
  authenticationResponse: undefined,
  isAuthenticating: false,
});

const useSession = (): Session => {
  return useContext(SessionContext);
};

export default useSession;
