import { NavLink } from "react-router-dom";

const Navbar = ({ user, onLogout }) => {
    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <div
                        tabIndex={0}
                        role="button"
                        className="btn btn-ghost lg:hidden"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16"
                            />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
                    >
                        <li>
                            <NavLink to="/home">Home</NavLink>
                        </li>
                        <li>
                            <NavLink to="/all-campaigns">All Campaigns</NavLink>
                        </li>
                        <li>
                            <NavLink to="/add-new-campaign">
                                Add New Campaign
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/my-campaigns">My Campaigns</NavLink>
                        </li>
                        <li>
                            <NavLink to="/my-donations">My Donations</NavLink>
                        </li>
                    </ul>
                </div>
                <NavLink to="/" className="text-xl">
                    InnoFund
                </NavLink>
            </div>

            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    <li>
                        <NavLink to="/home">Home</NavLink>
                    </li>
                    <li>
                        <NavLink to="/all-campaigns">All Campaigns</NavLink>
                    </li>
                    <li>
                        <NavLink to="/add-new-campaign">
                            Add New Campaign
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/my-campaigns">My Campaigns</NavLink>
                    </li>
                    <li>
                        <NavLink to="/my-donations">My Donations</NavLink>
                    </li>
                </ul>
            </div>

            <div className="navbar-end">
                {user ? (
                    <div className="dropdown dropdown-end">
                        <label
                            tabIndex={0}
                            className="btn btn-ghost btn-circle avatar"
                        >
                            <div className="w-10 rounded-full">
                                <img src={user.photoURL} alt="User Avatar" />
                            </div>
                        </label>
                        <ul
                            tabIndex={0}
                            className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52"
                        >
                            <li>
                                <NavLink className="justify-between">
                                    {user.displayName}
                                </NavLink>
                            </li>
                            <li>
                                <NavLink onClick={onLogout}>Log out</NavLink>
                            </li>
                        </ul>
                    </div>
                ) : (
                    <div className="space-x-4">
                        <NavLink to="/auth/signin" className="btn">
                            Sign in
                        </NavLink>
                        <NavLink to="/auth/signup" className="btn">
                            Sign up
                        </NavLink>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Navbar;