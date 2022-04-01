import { auth, provider } from '../lib/firebase';
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { useContext } from 'react'
import { UserContext } from '../lib/context'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGoogle } from '@fortawesome/free-brands-svg-icons'



const LoginContent = () => {
    const { user, username } = useContext(UserContext);
    console.log(username);

    return (
        <div className="h-screen flex">
            <div className="flex w-1/2 bg-gradient-to-tr from-purple-900 to-primary i justify-around items-center z-20">
                <div>
                    <h1 className="text-white font-bold text-4xl font-sans">FDM Expenses</h1>
                    <p className="text-white mt-1">The most popular corporate expense software</p>
                    <button type="submit" className="block w-32 bg-white text-indigo-800 mt-4 py-2 rounded-2xl font-bold mb-2 border-transparent border-2 outline-none hover:opacity-80 hover:bg-white hover:border-secondary btn">Read More</button>
                </div>
            </div>
            <div className="flex w-1/2 justify-center items-center bg-base flex-col">
                <form className="bg-base">
                    <h1 className="text-[#d4d4d4] font-bold text-3xl mb-1">Hello {username}</h1>
                    <p className="text-lg font-normal text-blue-500 mb-7">Welcome Back</p>
                    <div className="flex items-center border-2 py-2 px-3 rounded-2xl mb-4">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
                        </svg>
                        <input className="pl-2 outline-none bg-base-100 border-none" type="text" name="" id="" placeholder="Email Address" />
                    </div>
                    <div className="flex items-center  border-2 py-2 px-3 rounded-2xl">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                        </svg>
                        <input className="pl-2 outline-none bg-base-100 border-none" type="text" name="" id="" placeholder="Password" />
                    </div>
                    <button type="submit" onClick={userLogIn} className=" btn block w-full bg-indigo-600 mt-4 py-2 rounded-2xl text-white font-semibold mb-2 border-transparent border-2 hover:opacity-80 hover:bg-indigo-600">Login</button>
                    <span className="text-sm ml-2 hover:text-blue-500 cursor-pointer">Forgot Password ?</span>
                </form>
                <SignInGoogleButton></SignInGoogleButton>
            </div>
        </div>
    );
}

function SignInGoogleButton() {
    const signInWithGoogle = () => {
        console.log("hi")
        // await signInWithPopup(auth, provider);
        signInWithPopup(auth, provider)
            .then((result) => {
                // This gives you a Google Access Token. You can use it to access the Google API.
                const credential = GoogleAuthProvider.credentialFromResult(result);
                const token = credential?.accessToken;
                // The signed-in user info.
                const user = result.user;
                // ...
            }).catch((error) => {
                // Handle Errors here.
                const errorCode = error.code;
                const errorMessage = error.message;
                // The email of the user's account used.
                const email = error.email;
                // The AuthCredential type that was used.
                const credential = GoogleAuthProvider.credentialFromError(error);
                // ...
            });
    };

    return (
        <button onClick={signInWithGoogle} className="btn w-60 my-4 border-1 border-transparent hover:border-slate-600 "><FontAwesomeIcon icon={faGoogle} className="pr-2 text-[0.85rem] text-[#3B81F6]" />log in with google </button>

    );
}

function userLogIn(event: any) {
    event.preventDefault();
}


export default LoginContent;