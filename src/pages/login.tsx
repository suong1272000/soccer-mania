import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { GetServerSideProps } from "next";
import { useRouter } from "next/router";

export const getServerSideProps: GetServerSideProps = async (
	context
): Promise<{ props: any }> => {
	return {
		props: {},
	};
};

type LoginProps = {
	props: any;
};

// TODO remove, this demo shouldn't need to reset the theme.
const defaultTheme = createTheme();

const Login: React.FC<LoginProps> = ({ props }) => {
	const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		const data = new FormData(event.currentTarget);
		console.log({
			email: data.get("email"),
			password: data.get("password"),
		});
	};

	const [username, setUsername] = React.useState("");
	const [password, setPassword] = React.useState("");
	const router = useRouter();
	const UnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setUsername(e.target.value);
	};
	const PwChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setPassword(e.target.value);
	};

	const check = () => {
		if (username === "mega" && password === "123") {
			document.cookie = "success=true;";
			router.push("/main");
		} else {
			alert("이메일과 비밀번호를 확인해주세요.");
		}
	};

	return (
		<ThemeProvider theme={defaultTheme}>
			<Container component="main" maxWidth="xs">
				<CssBaseline />
				<Box
					sx={{
						marginTop: 8,
						display: "flex",
						flexDirection: "column",
						alignItems: "center",
					}}
				>
					<Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
						<LockOutlinedIcon />
					</Avatar>
					<Typography component="h1" variant="h5">
						로그인
					</Typography>
					<Box
						component="form"
						onSubmit={handleSubmit}
						noValidate
						sx={{ mt: 1 }}
					>
						<TextField
							margin="normal"
							required
							fullWidth
							id="email"
							label="이메일"
							name="email"
							autoComplete="email"
							autoFocus
							value={username}
							onChange={UnChange}
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
							value={password}
							onChange={PwChange}
						/>
						<FormControlLabel
							control={
								<Checkbox value="remember" color="primary" />
							}
							label="아이디 저장하기"
						/>
						<Button
							type="submit"
							fullWidth
							variant="contained"
							sx={{ mt: 3, mb: 2 }}
							onClick={check}
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
