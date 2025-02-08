import About from "../../components/About/About";
import Footer from "../../components/Footer/Footer";
import Hero from "../../components/Hero/Hero";
import Navbar from "../../components/Navbar/Navbar";
import Posts from "../../components/Posts/Posts";

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Posts />
      <About />
      <Footer />
    </>
  );
};

export default Home;
