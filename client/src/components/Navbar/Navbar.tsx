/* eslint-disable @typescript-eslint/no-explicit-any */
import { NavLink } from "react-router-dom";
import logo from "../../assets/images/legal-blogs-logo.svg";
import searchIcon from "../../assets/images/search.svg";
import { useSelector, useDispatch } from "react-redux";
import { clearUser } from "../../store/userSlice";
import axios from "axios";
import { useState } from "react";

const Navbar = () => {
  const [navVisible, setNavVisible] = useState(false);
  const dispatch = useDispatch();
  const user = useSelector((store: any) => store.user.user);
  const handleLogout = async () => {
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_API_URL}/users/logout`,
        {},
        { withCredentials: true }
      );
      console.log(response);
      dispatch(clearUser());
    } catch (error) {
      console.log(error);
    }
  };

  const handleNavOpen = () => {
    setNavVisible(true);
  };
  const handleNavClose = () => {
    setNavVisible(false);
  };
  return (
    <>
      <header className="pt-4 font-roboto">
        <nav className="flex md:flex-row flex-col justify-between items-center text-dark text-buttonText uppercase border border-dark/25 px-6 py-4 rounded-full gap-6">
          <div>
            <NavLink to="/">
              <img src={logo} alt="Legal blogs by rohan logo" />
            </NavLink>
          </div>
          <ul
            className={`flex items-center gap-6 md:flex-row flex-col md:relative absolute md:top-0 top-[108px] md:text-dark text-light p-4 rounded-lg h-1/2 md:bg-light bg-dark md:w-auto w-[90%] transition-all duration-500 md:pt-4 pt-16 ${
              navVisible ? "opacity-100" : "md:opacity-100 opacity-0"
            }`}
          >
            <NavLink to="/">
              <li className="md:pb-0 pb-2 md:border-none border-b-2">Home</li>
            </NavLink>
            <a href="#posts">
              <li className="md:pb-0 pb-2 md:border-none border-b-2">Posts</li>
            </a>
            <a href="#about">
              <li className="md:pb-0 pb-2 md:border-none border-b-2">About</li>
            </a>
            <a href="#contact">
              <li className="md:pb-0 pb-2 md:border-none border-b-2">
                Contact
              </li>
            </a>
          </ul>
          <ul
            className={`flex md:flex-row flex-col items-center gap-4 md:relative absolute md:top-0 top-80 transition-all duration-500 ${
              navVisible ? "opacity-100" : "md:opacity-100 opacity-0"
            }`}
          >
            <img
              src={searchIcon}
              alt="A clickable search icon for searching blog posts"
              className="md:bg-dark/10 bg-light rounded-full p-2 md:mt-0 mt-16"
            />
            <div className="flex gap-2">
              {user === null ? (
                <NavLink to="/login">
                  <li className="py-3 px-6 md:bg-dark bg-light md:text-light text-dark rounded-[24px]">
                    Login
                  </li>
                </NavLink>
              ) : (
                <NavLink to="" onClick={handleLogout}>
                  <li className="py-3 px-6 md:bg-dark bg-light md:text-light text-dark rounded-[24px]">
                    Logout
                  </li>
                </NavLink>
              )}

              <NavLink to="/write">
                <li className="py-3 px-6 md:bg-dark bg-light md:text-light text-dark rounded-[24px]">
                  Write
                </li>
              </NavLink>
            </div>
          </ul>
          <div className={`md:hidden flex absolute right-10 top-10`}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="40px"
              viewBox="0 -960 960 960"
              width="40px"
              fill="#111111"
              className={`cursor-pointer ${navVisible ? "hidden" : "block"}`}
              onClick={handleNavOpen}
            >
              <path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z" />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="40px"
              viewBox="0 -960 960 960"
              width="40px"
              fill="#665566"
              className={`cursor-pointer ${navVisible ? "block" : "hidden"}`}
              onClick={handleNavClose}
            >
              <path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z" />
            </svg>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Navbar;
