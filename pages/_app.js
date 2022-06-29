import Layout from "../components/Layout";
import "../styles/globals.css";
import store from "../redux/store";
import { Provider } from "react-redux";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Layout>
        <Head>
          <meta
            name="viewport"
            content="width=device-width , initial-scale=1"
          />
        </Head>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  );
}

export default MyApp;
