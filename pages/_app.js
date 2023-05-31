import "../styles/globals.css";

import Layout from "../src/modules/theme/layout";
export default function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}