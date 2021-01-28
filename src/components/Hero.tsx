import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import { FunctionComponent } from 'react';

interface Props {
  title: string;
  subtitle?: string;
  picture: string;
}

const { NEXT_PUBLIC_COMMIT_SHA } = process.env;

const Hero: FunctionComponent<Props> = ({ title, subtitle, picture }) => {
  return (
    <Box
      component="section"
      sx={{
        background: `url("${picture}") 50% 50% no-repeat, linear-gradient(74deg, #031d3c, #0d0e13 80%)`,
        backgroundSize: 'cover',
        padding: '184px 0 112px',
        position: 'relative',
      }}
    >
      <Container maxWidth="md">
        <Box sx={{ color: '#f9f9f9', textAlign: 'right' }}>
          <Typography
            variant="h1"
            sx={{
              fontSize: '3.5rem',
              fontWeight: 700,
              textShadow: '0 4px 1px rgba(0, 0, 0, 0.5)',
            }}
          >
            {title}
          </Typography>
          {subtitle != null && (
            <Typography
              variant="h6"
              sx={{
                fontSize: '1.5rem',
                textShadow: '0 4px 1px rgba(0, 0, 0, 0.5)',
              }}
            >
              {subtitle}
            </Typography>
          )}
        </Box>
      </Container>
      <Typography
        sx={{
          color: '#f1f1f1',
          bottom: '0.5rem',
          left: '0.5rem',
          position: 'absolute',
          margin: 0,
          maxWidth: { xs: '75%', md: 'none' },
          opacity: '0.5',
          overflow: 'hidden',
          textOverflow: 'ellipsis',
          textShadow: '0 1px 1px rgba(0, 0, 0, 0.5)',
          transition: 'opacity 0.2s',
          whiteSpace: 'nowrap',
          ':hover': {
            opacity: 1,
          },
          '& code': {
            color: '#c7cc20',
            fontSize: '1.1rem',
            fontWeight: 700,
          },
        }}
      >
        GIT_REV: <code>{NEXT_PUBLIC_COMMIT_SHA}</code>
      </Typography>
    </Box>
  );
};

export default Hero;
