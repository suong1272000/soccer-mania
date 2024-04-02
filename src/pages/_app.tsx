import { AppProps } from "next/app";
import DefaultLayout from "./defaultLayout";
import '../styles/global.css';
import {createTheme, ThemeProvider} from "@mui/material/styles";

const theme = createTheme();
function MyApp({ Component, pageProps }: AppProps) {
	return (
		<>
			<DefaultLayout>
				<ThemeProvider theme={theme}>
					<Component {...pageProps} />
				</ThemeProvider>
			</DefaultLayout>
		</>
	);
}
export default MyApp;
