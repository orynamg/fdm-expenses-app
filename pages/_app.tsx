import '../styles/globals.css'
import type { AppProps } from 'next/app'
//FOR GOOGLE FIREBASE!!!
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";

function MyApp({ Component, pageProps }: AppProps) {

  const firebaseConfig = {
    apiKey: "secret",
    authDomain: "secret",
    projectId: "secret",
    storageBucket: "secret",
    messagingSenderId: "secret",
    appId: "secret",
    measurementId: "secret"
  };

  // Initialize Firebase
  // const app = initializeApp(firebaseConfig);
  // const analytics = getAnalytics(app);


  return <Component {...pageProps} />
}

export default MyApp
