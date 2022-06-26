import "../styles/globals.css";
import type { AppProps } from "next/app";
import { Layout } from "@/components/modules";
import "@/styles/globals.css";
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
