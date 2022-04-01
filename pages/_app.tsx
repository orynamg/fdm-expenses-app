import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { UserContext } from '../lib/context';
import { useEffect, useState } from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'
import { auth, firestore } from '../lib/firebase';
import { doc, onSnapshot } from "firebase/firestore";


function MyApp({ Component, pageProps }: AppProps) {
  const [user] = useAuthState(auth);
  const displayName = user?.email;
  console.log(displayName);
  const [username, setUsername] = useState(displayName || "bleh");
  console.log(username);


  useEffect(() => {
    let unsubscribe;

    //Listen to real-time updates on the username
    if (user) {
      console.log(JSON.stringify(user));
      unsubscribe = onSnapshot(doc(firestore, "users", user.uid), (doc) => {
        console.log("onSnapshot: " + JSON.stringify(doc.data()))
        if (doc.data()) {
          setUsername(doc.data()?.username);
        }
      });
    }
    return unsubscribe;
  }, [user]);

  return (
    <UserContext.Provider value={{ user, displayName }} >
      <Component {...pageProps} />
    </UserContext.Provider>
  );


}

export default MyApp
