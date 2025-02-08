import React, { useState, ChangeEvent, FormEvent, useEffect } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { useSelector } from "react-redux";
// import { RootState } from "@reduxjs/toolkit/query";
import { RootState } from "../../store/store";
import axios from "axios";
import { useNavigate } from "react-router-dom";

interface WriteProps {}

const Write: React.FC<WriteProps> = () => {
  const navigate = useNavigate();
  const [title, setTitle] = useState<string>("");
  const [desc, setDesc] = useState<string>("");
  const [coverImage, setCoverImage] = useState<File | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [categories, setCategories] = useState<string[]>([]);
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const user = useSelector((store: RootState) => store.user.user);

  useEffect(() => {
    // Fetch categories from the backend when component mounts
    const fetchCategories = async () => {
      try {
        const res = await axios.get(
          `${import.meta.env.VITE_API_URL}/categories/all-categories`
        );
        setCategories(
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          res.data.data.map((category: any) => category.category[0])
        );
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };
    fetchCategories();
  }, []);

  const handleTitleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };

  const handleDescChange = (value: string) => {
    setDesc(value);
  };

  const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setCoverImage(e.target.files[0]);
    }
  };

  const handleCategoryToggle = (category: string) => {
    setSelectedCategories((prevCategories) => {
      if (prevCategories.includes(category)) {
        // If category already selected, remove it
        return prevCategories.filter((c) => c !== category);
      } else {
        // Otherwise, add it
        return [...prevCategories, category];
      }
    });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData();
    if (coverImage) {
      formData.append("coverImage", coverImage);
    }
    formData.append("title", title);
    formData.append("desc", desc);
    if (user) {
      formData.append("username", user.username);
    }
    // Modify data for categories
    // const categoryStrings = selectedCategories.map((category) => category);
    // console.log(categoryStrings);
    // formData.append("categories", JSON.stringify(categoryStrings));
    for (const category of selectedCategories) {
      formData.append("categories[]", category); // Add each category with a key ending in "[]"
    }

    try {
      const res = await axios.post(
        `${import.meta.env.VITE_API_URL}/posts/create`,
        formData,
        {
          withCredentials: true,
        }
      );

      console.log(res);
      navigate(`/posts/post/${res?.data?.data?._id}`);
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <section className="w-[90%] mx-auto">
        <form action="" onSubmit={handleSubmit} className="h-[70vh]">
          <div>
            <input
              type="text"
              placeholder="Title"
              className="writeInput"
              autoFocus={true}
              value={title}
              onChange={handleTitleChange}
            />
          </div>
          <input
            type="file"
            accept="image/*"
            className="mt-8"
            onChange={handleImageChange}
          />
          <div className="mt-8 mb-8">
            {categories.map((category) => (
              <span
                key={category}
                className={`category p-2 mr-2 mb-2 rounded-full cursor-pointer ${
                  selectedCategories.includes(category)
                    ? "bg-primary text-light"
                    : "bg-grey/20 text-dark hover:bg-gray-300"
                }`}
                onClick={() => handleCategoryToggle(category)}
              >
                {category}
              </span>
            ))}
          </div>
          <ReactQuill
            theme="snow"
            value={desc}
            onChange={handleDescChange}
            className="h-3/5"
          />
          <button
            className="writeSubmit bg-secondary px-6 py-3 text-buttonText font-bold rounded-sm mt-16"
            type="submit"
            disabled={loading}
          >
            {loading ? "Publishing..." : "Publish"}
          </button>
        </form>
      </section>
    </>
  );
};

export default Write;
