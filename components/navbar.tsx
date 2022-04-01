import Link from 'next/link'
import { faFileShield } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useContext } from 'react'
import { UserContext } from '../lib/context'
import { auth, provider } from '../lib/firebase';
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";

const Navbar = () => {
    const { user, username } = useContext(UserContext)
    console.log(username)

    return (
        <>
            <div className="navbar fixed z-10 bg-base-100 h-24 px-8 opacity-90">
                <div className="flex-1">
                    <a href="/#showcase" className="btn btn-ghost normal-case text-xl">FDM Expenses</a>

                </div>
                <div className="flex-none">

                    {/* User not logged in */}
                    {
                        !username && (
                            <ul className="menu menu-horizontal p-0">
                                <li><Link href="/login">Login</Link></li>
                            </ul>
                        )
                    }
                    {/* User logged in */}
                    {
                        username && (
                            <ul className="menu menu-horizontal p-0">
                                <li><Link href="/">Home</Link></li>
                                <li><a href="/#addX">Add Expense</a></li>
                                <li><Link href="/track">Track Expenses</Link></li>
                                <li><Link href="/history">View History</Link></li>

                                <div className="dropdown dropdown-end ml-3">
                                    <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                                        <div className="w-10 rounded-full">
                                            <img src="https://api.lorem.space/image/face?hash=33791" />
                                        </div>
                                    </label>

                                    <ul tabIndex={0} className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52">
                                        <li>
                                            <Link href={`/${username}`}><a className="justify-between">
                                                Profile
                                                {/* <span className="badge">New</span> */}
                                            </a></Link>
                                        </li>
                                        <li><a>Settings</a></li>
                                        <li><SignOutButton></SignOutButton></li>
                                    </ul>
                                </div>

                            </ul>
                        )}
                </div>
            </div>
        </>
    );
}

function SignOutButton() {
    return (<button onClick={() => auth.signOut()}>Sign Out</button>);
}

export default Navbar;