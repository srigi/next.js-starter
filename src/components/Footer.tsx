import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import { FunctionComponent } from 'react';

const Footer: FunctionComponent = () => {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: (theme) => theme.palette.secondary.main,
        py: (theme) => theme.spacing(3),
      }}
    >
      <Container>
        <Typography color="textSecondary" align="center">
          Copyright &copy; {new Date().getFullYear()}
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer;
