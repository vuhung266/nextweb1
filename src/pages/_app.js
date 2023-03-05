//import '@/styles/globals.css';
import './../styles/globals.css'
import Navbar from 'components/Hero/Navbar'
export default function App({ Component, pageProps }) {
  return (
  <>
  <Navbar />
  <Component {...pageProps} />
  </>
  );
}
