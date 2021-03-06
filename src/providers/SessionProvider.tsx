import { FunctionComponent, useEffect, useState } from 'react';

import { ValidationErrorsResponse } from '../types/api';
import {
  Payload as LoginCredentials,
  SuccessResponse as AuthenticationSuccessResponse,
} from '../types/api.authenticate';
import { AUTH_KEY_NAME, loadAuthToken } from '../lib/jwt';
import { SessionContext, User } from '../hooks/useSession';
import useLocalStorage from '../hooks/useLocalStorage';
import useApiMutation from '../hooks/useApiMutation';

const JWT_PUBLIC_KEY = process.env.NEXT_PUBLIC_JWT_PUBLIC_KEY!;

const SessionProvider: FunctionComponent = ({ children }) => {
  const [jwtPublicKey, setJwtPublicKey] = useState<string | null>(null);
  const [storedJwt, setStoredJwt] = useLocalStorage<string>(AUTH_KEY_NAME);
  const [user, setUser] = useState<User | null>(null);

  const { data: authenticationResponse, isLoading: isAuthenticating, mutate: authenticate } = useApiMutation<
    AuthenticationSuccessResponse | ValidationErrorsResponse,
    LoginCredentials
  >('post', '/auth/authenticate', (serverResponse) => {
    if (!('authToken' in serverResponse)) {
      return serverResponse;
    }
    if (jwtPublicKey == null) {
      return serverResponse;
    }

    // validate received JWT
    try {
      loadAuthToken(serverResponse.authToken, jwtPublicKey);
      return serverResponse;
    } catch (exc) {
      return { validationErrors: { jwt: 'Invalid server token' } };
    }
  });

  // decode JWT_PUBLIC_KEY on the client
  useEffect(() => {
    setJwtPublicKey(atob(JWT_PUBLIC_KEY));
  }, []);

  // handle successful authentication
  useEffect(() => {
    if (authenticationResponse != null && 'authToken' in authenticationResponse && jwtPublicKey != null) {
      const { sub, roles } = loadAuthToken(authenticationResponse.authToken);

      setUser({ username: sub, roles });
      setStoredJwt(authenticationResponse.authToken);
      // TODO attach to Jotai, so useApi* hooks can consume JWT
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [authenticationResponse, jwtPublicKey]);

  // handle stored JWT
  useEffect(() => {
    if (jwtPublicKey != null && storedJwt != null) {
      try {
        const { sub, roles } = loadAuthToken(storedJwt, jwtPublicKey);
        setUser({ username: sub, roles });
        // TODO attach to Jotai, so useApi* hooks can consume JWT
      } catch (exc) {
        // JWT invalid, destroy session
        setStoredJwt(undefined);
        setUser(null);
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [jwtPublicKey, storedJwt]);

  return (
    <SessionContext.Provider
      value={{
        authenticate,
        authenticationResponse,
        isAuthenticating,
        user,
      }}
    >
      {children}
    </SessionContext.Provider>
  );
};

export default SessionProvider;
