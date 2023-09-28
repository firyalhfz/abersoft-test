import Layout from "@/components/Layout";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import "aos/dist/aos.css";

import AOSWrapper from "@/components/AOSWrapper";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <AOSWrapper>
        <Component {...pageProps} />
      </AOSWrapper>
    </Layout>
  );
}
