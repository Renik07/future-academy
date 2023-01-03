import { AppProps } from 'next/dist/shared/lib/router/router';
import Head from 'next/head';
import '../styles/globals.css';

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return (
		<>
			<Head>
				<title>Future academy</title>
				<link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
				<meta property="og:locale" content="ru_RU" />
			</Head>
			<Component {...pageProps} />
		</>
	);
}

export default MyApp;
