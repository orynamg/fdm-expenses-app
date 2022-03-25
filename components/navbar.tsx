import Link from 'next/link'
import { faFileShield} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Navbar = () => {
    return (
        <>
            <div className="navbar fixed z-10 bg-base-100 h-24 px-8 opacity-90">
                <div className="flex-1">
                    <a href="/#showcase" className="btn btn-ghost normal-case text-xl">FDM Expenses</a>
                    
                </div>
                <div className="flex-none">
                    <ul className="menu menu-horizontal p-0">
                        <li><Link href="/">Home</Link></li>
                        <li><a href="/#addX">Add Expense</a></li>
                        <li><Link href="/track">Track Expenses</Link></li>
                        <li><Link href="/history">View History</Link></li>
                        <li><Link href="/login">Login</Link></li>
                        <div className="dropdown dropdown-end ml-3">
                        <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                            <div className="w-10 rounded-full">
                                <img src="https://api.lorem.space/image/face?hash=33791" />
                            </div>
                        </label>
                        <ul tabIndex={0} className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52">
                            <li>
                                <a className="justify-between">
                                    Profile
                                    {/* <span className="badge">New</span> */}
                                </a>
                            </li>
                            <li><a>Settings</a></li>
                            <li><a>Logout</a></li>
                        </ul>
                    </div>
                    </ul>
                </div>
            </div>
        </>
    );
}

export default Navbar;