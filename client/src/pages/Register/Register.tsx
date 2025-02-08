import { Link } from "react-router-dom";
const Register = () => {
  return (
    <>
      <section className="flex flex-col items-center pt-10 h-screen">
        <form action="" className="sm:w-[27rem] w-full px-4">
          <h1 className="text-headerTwo">Sign Up</h1>
          <p className="mt-6">
            If you already have an account, you can{" "}
            <Link
              to="/login"
              className="text-primary text-linkText font-semibold"
            >
              login here
            </Link>
          </p>
          <div className="mt-12">
            <label htmlFor="">Email</label>
            <input type="email" placeholder={"Enter your email address"} />
          </div>
          <div className="mt-8">
            <label htmlFor="">Username</label>
            <input type="text" placeholder={"Enter your user name"} />
          </div>
          <div className="mt-8">
            <label htmlFor="">Full Name</label>
            <input type="text" placeholder={"Enter your Full Name"} />
          </div>
          <div className="mt-8">
            <label htmlFor="">Password</label>
            <input type="password" placeholder={"Enter your password"} />
          </div>
          <div className="mt-8">
            <label htmlFor="">Confirm Password</label>
            <input type="password" placeholder={"Enter your password again"} />
          </div>
          <button className="w-full mt-8 bg-secondary rounded-full py-3 px-2 text-buttonText font-bold">
            Sign Up
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

export default Register;
