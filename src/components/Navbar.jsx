import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";
import { AiOutlineLogin } from "react-icons/ai";

const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);

    const links = (
        <>
            <NavLink
                to="/"
                className={({ isActive }) =>
                    `tab ${isActive ? "text-brightPink" : ""}`
                }
            >
                Home
            </NavLink>
            <NavLink
                to="/all-campaigns"
                className={({ isActive }) =>
                    `tab ${isActive ? "text-brightPink" : ""}`
                }
            >
                All Campaigns
            </NavLink>
            <NavLink
                to="/about"
                className={({ isActive }) =>
                    `tab ${isActive ? "text-brightPink" : ""}`
                }
            >
                About Us
            </NavLink>
            <NavLink
                to="/contact"
                className={({ isActive }) =>
                    `tab ${isActive ? "text-brightPink" : ""}`
                }
            >
                Contact
            </NavLink>

            {user && user?.email ? (
                <NavLink
                    to="/add-campaign"
                    className={({ isActive }) =>
                        `tab ${isActive ? "text-brightPink" : ""}`
                    }
                >
                    Add New Campaign
                </NavLink>
            ) : null}
            {user && user?.email ? (
                <NavLink
                    to="/my-campaigns"
                    className={({ isActive }) =>
                        `tab ${isActive ? "text-brightPink" : ""}`
                    }
                >
                    My Campaigns
                </NavLink>
            ) : null}
            {user && user?.email ? (
                <NavLink
                    to="/my-donations"
                    className={({ isActive }) =>
                        `tab ${isActive ? "text-brightPink" : ""}`
                    }
                >
                    My Donations
                </NavLink>
            ) : null}
        </>
    );

    return (
        <div className="bg-softOrange/35 backdrop-blur-md bg-opacity-60 sticky top-0 z-50 py-2">
            <div className="navbar max-w-screen-xl mx-auto">
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
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow font-medium"
                        >
                            {links}
                        </ul>
                    </div>
                    <NavLink
                        to="/"
                        className="text-2xl text-brightPink font-bold"
                    >
                        InnoFund
                    </NavLink>
                </div>

                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 font-medium">
                        {links}
                    </ul>
                </div>

                <div className="navbar-end">
                    {user && user?.email ? (
                        <div className="flex items-center gap-4">
                            <div className="relative flex flex-col items-center group">
                                <img
                                    src={
                                        user?.photoURL ||
                                        "https://i.ibb.co.com/P1n2z8D/profile-icon-design-free-vector.jpg"
                                    }
                                    alt="user"
                                    className="w-10 h-10 rounded-full"
                                />
                                <div className="absolute -bottom-12 bg-softOrange/35 text-black text-sm rounded px-2 py-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    {user?.displayName || user?.email}
                                </div>
                            </div>

                            <div>
                                <Link
                                    onClick={logOut}
                                    className="btn bg-neonGreen"
                                >
                                    Log out
                                    <AiOutlineLogin />
                                </Link>
                            </div>
                        </div>
                    ) : (
                        <div className="space-x-4">
                            <Link
                                to="/auth/signin"
                                className="btn bg-neonGreen"
                            >
                                Sign in
                                <AiOutlineLogin />
                            </Link>
                            <Link
                                to="/auth/signup"
                                className="btn bg-neonGreen"
                            >
                                Sign up
                                <AiOutlineLogin />
                            </Link>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Navbar;
