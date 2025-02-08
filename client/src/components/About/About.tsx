import { Link } from "react-router-dom";
import aboutMe from "../../assets/images/about-me.jpeg";
import twitterIcon from "../../assets/images/twitter-png.png";
import instagramIcon from "../../assets/images/instagrm-png.png";
import linkedinIcon from "../../assets/images/linkedin-png.png";
const About = () => {
  return (
    <>
      <h2 className="text-headerTwo text-primary mt-8 text-center uppercase tracking-wider">
        About
      </h2>
      <section
        id="about"
        className="about mt-4 border border-dark/25 rounded-3xl p-4"
      >
        <div className="flex md:flex-row flex-col gap-6">
          <div className="md:w-1/2 w-full">
            <img
              src={aboutMe}
              alt="Rohan in a lawyer's gown"
              className="h-[30rem] md:w-4/5 w-full rounded-lg"
            />
          </div>
          <div className="flex flex-col gap-8 md:w-1/2 w-full md:items-start items-center">
            <h2 className="text-headerTwo text-dark">Order! Order!</h2>
            <h3 className="text-headerThree text-dark">Hello, I'm Rohan Raj</h3>
            <p className="text-postText">
              I started this blog to decipher the complexities of Law and
              Administration. Additionally, I am very interested in cricket so
              expect insights that swing between the courtrooms and the cricket
              grounds.
            </p>
            <h2 className="text-2xl font-bold mb-2">My Socials</h2>
            <ul className="flex gap-5">
              <Link to="https://x.com/abdsa017" target="_blank">
                <li>
                  <img
                    src={twitterIcon}
                    alt=""
                    className="w-12 h-12 rounded-full"
                  />
                </li>
              </Link>
              <Link
                to="https://www.linkedin.com/in/rohan-raj-604342213/"
                target="_blank"
              >
                <li>
                  <img src={linkedinIcon} alt="" />
                </li>
              </Link>
              <Link to="https://www.instagram.com/abd_sa_017/" target="_blank">
                <li>
                  <img src={instagramIcon} alt="" />
                </li>
              </Link>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
