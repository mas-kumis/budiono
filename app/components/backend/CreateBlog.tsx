"use client";
import React, { useState } from "react";

const CreateBlog = () => {
  const [title, setTitle] = useState("");
  const [blog, setBlog] = useState("");
  return (
    <div className="py-[80px]">
      <h6 className="text-3xl font-bold">Create Dashboard</h6>
      <div>
        <form className="flex flex-col my-4 gap-y-4">
          <div className="flex flex-col">
            <label htmlFor="title">Title</label>
            <input
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              type="text"
              name="title"
              id="title"
              className="border-2 border-neutral-200 p-2"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="content">Content</label>
            <textarea
              value={blog}
              onChange={(e) => setBlog(e.target.value)}
              name="content"
              id="content"
              className="border-2 border-neutral-200 p-2"
            ></textarea>
          </div>
          <div className="flex flex-col">
            <label htmlFor="image">Image</label>
            <input
              type="file"
              name="image"
              id="image"
              className="border-2 border-neutral-200 p-2"
            />
          </div>
          <button className="bg-neutral-800 hover:bg-neutral-700 font-bold my-4 text-white p-2 rounded-md">
            Create
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreateBlog;
