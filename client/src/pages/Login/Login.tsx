import { Link } from "react-router-dom";
import { ChangeEvent, SyntheticEvent, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setUser } from "../../store/userSlice";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleUsernameChange = (e: ChangeEvent<HTMLInputElement>) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleLogin = async (e: SyntheticEvent) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_API_URL}/users/login`,
        { email: username, username, password },
        { withCredentials: true }
      );
      const loggedInUser = response?.data?.data?.user;
      dispatch(setUser(loggedInUser));
      console.log(loggedInUser);
      setUsername("");
      setPassword("");
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <section className="flex flex-col items-center pt-10 h-screen">
        <form
          action=""
          onSubmit={handleLogin}
          className="sm:w-[27rem] w-full px-4"
        >
          <h1 className="text-headerTwo">Log in</h1>
          <p className="mt-6">
            If you don't have an account, you can{" "}
            <Link
              to="/register"
              className="text-primary text-linkText font-semibold"
            >
              register here
            </Link>
          </p>
          <div className="mt-12">
            <label htmlFor="">Username or Email</label>
            <input
              type="text"
              placeholder={"Enter username or email"}
              value={username}
              onChange={handleUsernameChange}
            />
          </div>
          <div className="mt-8">
            <label htmlFor="">Password</label>
            <input
              type="password"
              placeholder={"Enter password"}
              value={password}
              onChange={handlePasswordChange}
            />
          </div>
          <button
            type="submit"
            className="w-full mt-8 bg-secondary rounded-full py-3 px-2 text-buttonText font-bold"
          >
            Login
          </button>
        </form>
        <Link to="/" className="flex mt-8 justify-center gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="24px"
            viewBox="0 -960 960 960"
            width="24px"
            fill="#4b4949"
          >
            <path d="m313-440 224 224-57 56-320-320 320-320 57 56-224 224h487v80H313Z" />
          </svg>
          <span>Back to home</span>
        </Link>
      </section>
    </>
  );
};

export default Login;
