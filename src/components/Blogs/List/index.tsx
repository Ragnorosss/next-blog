"use client";
import { IPost } from "@/types/post";
import { useEffect, useState } from "react";
import BlogItem from "..";

export default function BlogList() {
  const [blogs, setBlogs] = useState<IPost[]>([]);
  useEffect(() => {
    const respones = fetch("http://localhost:3000/api/blogs", {
      method: "GET",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);

        setBlogs(data);
      });
  }, []);
  return (
    <main>
      <div className="flex justify-center gap-5">
        {blogs.map((blog: IPost) => (
          <BlogItem key={blog.id} {...blog} />
        ))}
      </div>
    </main>
  );
}
