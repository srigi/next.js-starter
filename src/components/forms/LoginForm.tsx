import FormControl from '@material-ui/core/FormControl';
import InputBase from '@material-ui/core/InputBase';
import InputLabel from '@material-ui/core/InputLabel';
import LoadingButton from '@material-ui/lab/LoadingButton';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import { FunctionComponent, SyntheticEvent, useEffect } from 'react';
import { useMutation } from 'react-query';

interface LoginCredentials {
  username: string;
  password: string;
}

const useStyles = makeStyles((theme) => ({
  loginForm: {
    color: theme.palette.text.secondary,
    textAlign: 'center',

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

const LoginForm: FunctionComponent = () => {
  const classes = useStyles();
  const { data, error, isError, isLoading, isSuccess, mutate: authenticate } = useMutation<
    Record<string, unknown>,
    Error,
    LoginCredentials
  >(async (credentials) => {
    const response = await fetch('/api/auth/authenticate', {
      method: 'post',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(credentials),
    });
    if (!response.ok) {
      throw new Error(`[${response.status}] ${response.statusText}`);
    }

    return response.json();
  });

  const handleSubmit = (ev: SyntheticEvent<HTMLFormElement>) => {
    ev.preventDefault();

    const form = ev.currentTarget;
    const loginCredentials: LoginCredentials = {
      username: form.username.value,
      password: form.password.value,
    };

    authenticate(loginCredentials);
  };

  return (
    <form className={classes.loginForm} onSubmit={handleSubmit}>
      <Typography variant="h4" sx={{ mt: 2, mb: 4 }}>
        Login
      </Typography>

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

      <LoadingButton type="submit" pending={isLoading} variant="contained">
        Submit
      </LoadingButton>
    </form>
  );
};

export default LoginForm;
