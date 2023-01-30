import "../styles/globals.css";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title> List Movie </title>
        <meta name="description" content="Movie Search App" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
