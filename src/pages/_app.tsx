import { AppProps } from "next/app";
import DefaultLayout from "./defaultLayout";

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<>
			<DefaultLayout>
				<Component {...pageProps} />
			</DefaultLayout>
		</>
	);
}
export default MyApp;
