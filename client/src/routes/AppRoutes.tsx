import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useSelector } from "react-redux";
import Home from "../pages/Home/Home";
import SingleBlog from "../pages/SingleBlog/SingleBlog";
import Register from "../pages/Register/Register";
import Login from "../pages/Login/Login";
import Write from "../pages/Write/Write";
import UpdateBlog from "../pages/UpdateBlog/UpdateBlog";

const AppRoutes = () => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const user = useSelector((store: any) => store.user.user);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/posts/post/:id" element={<SingleBlog />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/write" element={user === null ? <Login /> : <Write />} />
        <Route
          path="/posts/update/:id"
          element={user === null ? <Login /> : <UpdateBlog />}
        />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
