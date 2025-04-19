import "@/styles/globals.css";
import toast, { Toaster } from 'react-hot-toast';
import Header from "@/components/common/Header";

export default function App({ Component, pageProps }) {
  return <>
  <Toaster/>
  <Header/>
  <Component {...pageProps} />
  </>;
}
