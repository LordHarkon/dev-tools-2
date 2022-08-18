// Libraries
import { AppProps } from "next/app";

// Components
import Layout from "#components/Layout";

// Styles
import "primereact/resources/themes/md-dark-deeppurple/theme.css";
import "primereact/resources/primereact.min.css";
import "#styles/globals.css";

function AllTheToolsApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default AllTheToolsApp;
