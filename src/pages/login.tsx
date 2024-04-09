import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { GetServerSideProps } from 'next';
import { useRouter } from 'next/navigation';
import { parse } from 'cookie';

export const getServerSideProps: GetServerSideProps = async (
  context
): Promise<any> => {
  const { req } = context;
  const cookies = req.headers.cookie ? parse(req.headers.cookie) : {};
  const userAuth = cookies.success == 'true';
  if (userAuth) {
    return {
      redirect: {
        destination: `/main`,
      },
    };
  }
  return {
    props: {},
  };
};

type LoginProps = {
  props: any;
};

const defaultTheme = createTheme();

const Login: React.FC<LoginProps> = ({ props }) => {
  const router = useRouter();
  const [ID, setID] = React.useState<string>();
  const [PW, setPW] = React.useState<number | string>();
  const changeID = (e: React.ChangeEvent<HTMLInputElement>) => {
    setID(e.target.value);
  };
  const changePW = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPW(e.target.value);
  };

  const loginBtnAction = () => {
    if (ID === 'mega' && PW === '123') {
      document.cookie = 'success=true;';
      localStorage.setItem('id', ID), router.push('/main');
    } else {
      alert('이메일과 비밀번호를 확인해주세요.');
    }
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            로그인
          </Typography>
          <Box component="form" noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="이메일"
              name="email"
              autoComplete="email"
              autoFocus
              value={ID}
              onChange={changeID}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="비밀번호"
              type="password"
              id="password"
              autoComplete="current-password"
              value={PW}
              onChange={changePW}
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="아이디 저장하기"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              onClick={loginBtnAction}
            >
              로그인
            </Button>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
};
export default Login;
