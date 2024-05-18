import '../styles/global.css';
import type { AppProps } from 'next/app';
import "typeface-open-sans";
import "typeface-merriweather";



function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;


}

export default MyApp;
