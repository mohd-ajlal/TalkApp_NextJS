import { StateProvider } from "@/context/StateContext";
import reducer, { initialState } from "@/context/StateReducers";
import "@/styles/globals.css";
import Head from "next/head";

export default function App({ Component, pageProps }) {
  return(
    <StateProvider initialState={initialState} reducer={reducer}>
      <Head>
        <title>TalkApp</title>
        <link rel="shortcut icon" href="/Designer.jpeg"/>
      </Head>
  <Component {...pageProps} />;

    </StateProvider>
  )
}
