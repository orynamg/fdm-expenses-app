import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { UserContext } from '../lib/context';

function MyApp({ Component, pageProps }: AppProps) {

  return (
    <UserContext.Provider value={{ user: null, username: null }} >
      <Component {...pageProps} />
    </UserContext.Provider>
  );


}

export default MyApp
