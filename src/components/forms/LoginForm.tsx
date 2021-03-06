import Alert from '@material-ui/core/Alert';
import Button from '@material-ui/core/Button';
import CircularProgress from '@material-ui/core/CircularProgress';
import FormControl from '@material-ui/core/FormControl';
import InputBase from '@material-ui/core/InputBase';
import InputLabel from '@material-ui/core/InputLabel';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import { FunctionComponent, SyntheticEvent, useEffect } from 'react';

import {
  Payload as LoginCredentials,
  SuccessResponse as AuthenticationSuccessResponse,
} from '../../../pages/api/auth/authenticate';
import { ServerValidationErrorResponse } from '../../types/api';
import { AUTH_KEY_NAME } from '../../lib/jwt';
import useApiMutation from '../../lib/useApiMutation';
import useLocalStorage from '../../lib/useLocalStorage';

interface Props {
  onAuthenticated: () => void;
}

const useStyles = makeStyles((theme) => ({
  loginForm: {
    color: theme.palette.text.secondary,
    textAlign: 'center',

    '& .infoSpace': {
      minHeight: '3rem',
      marginBottom: theme.spacing(2),
    },

    '& .MuiFormControl-root': {
      width: '100%',
    },

    '& .MuiInputLabel-root.Mui-focused': {
      color: theme.palette.text.secondary,
    },

    '& .MuiInputBase-root': {
      color: theme.palette.text.secondary,
      marginTop: theme.spacing(3),
      marginBottom: theme.spacing(2),
    },

    '& .MuiInputBase-input': {
      borderRadius: 4,
      border: '1px solid #90c5fa',
      padding: '10px 12px',
    },

    '& .MuiButton-root': {
      marginTop: theme.spacing(1),
      width: '100%',
      height: '3rem',
    },
  },
}));

const LoginForm: FunctionComponent<Props> = ({ onAuthenticated }) => {
  const classes = useStyles();
  const [, setLocalStorage] = useLocalStorage<string>(AUTH_KEY_NAME);
  const { data: authenticationResponse, isLoading, mutate: authenticate } = useApiMutation<
    AuthenticationSuccessResponse | ServerValidationErrorResponse,
    LoginCredentials
  >('post', '/auth/authenticate');

  const handleSubmit = (ev: SyntheticEvent<HTMLFormElement>) => {
    ev.preventDefault();

    const form = ev.currentTarget;
    const loginCredentials: LoginCredentials = {
      username: form.username.value,
      password: form.password.value,
    };

    authenticate(loginCredentials);
  };

  useEffect(() => {
    if (authenticationResponse != null && 'authToken' in authenticationResponse) {
      setLocalStorage(authenticationResponse.authToken);
      onAuthenticated();
    }
  }, [authenticationResponse, setLocalStorage, onAuthenticated]);

  return (
    <form className={classes.loginForm} onSubmit={handleSubmit}>
      <Typography variant="h4" sx={{ mt: 4, mb: 4 }}>
        Login
      </Typography>

      <div className="infoSpace">
        <>
          {isLoading && <CircularProgress />}
          {authenticationResponse != null &&
            'serverValidationErrors' in authenticationResponse &&
            Object.entries(authenticationResponse.serverValidationErrors).map(([field, errorMessage]) => (
              <Alert key={field} variant="filled" severity="error">
                {errorMessage}
              </Alert>
            ))}
        </>
      </div>

      <FormControl>
        <InputLabel shrink htmlFor="username">
          *email
        </InputLabel>
        <InputBase id="username" type="email" required />
      </FormControl>

      <FormControl>
        <InputLabel shrink htmlFor="password">
          *password
        </InputLabel>
        <InputBase id="password" type="password" required />
      </FormControl>

      <Button type="submit" variant="contained" disabled={isLoading}>
        Submit
      </Button>
    </form>
  );
};

export default LoginForm;
