"use client";

import React, { useEffect, useState } from "react";
// types
import { Blog } from "@/app/types";

interface RelatedBlogsProps {
  blogId: string;
}

const RelatedBlogs: React.FC<RelatedBlogsProps> = ({ blogId }) => {
  const [relatedBlogs, setRelatedBlogs] = useState<Blog[] | null>(null);

  useEffect(() => {
    const fetchRelatedBlogs = async () => {
      try {
        const randomStart = Math.floor(Math.random() * 9);
        const res = await fetch(
          `http://localhost:5001/blogs?_start=${randomStart}&_limit=3`
        );
        const data: Blog[] = await res.json();
        setRelatedBlogs(data);
      } catch (error) {
        console.error("Error fetching related blogs:", error);
      }
    };

    fetchRelatedBlogs();
  }, [blogId]);

  if (!relatedBlogs) {
    return <div>Loading related blogs...</div>;
  }

  return (
    <div>
      <h4 className="mtext-112 cl2 mb-3">Related Blogs</h4>

      <ul>
        {relatedBlogs.map((blog) => (
          <li key={blog.id} className="mb-4">
            <a href={`/blog/${blog.id}`} className="wrao-pic-w">
              <img src={blog.img} alt={blog.title} className="img-fluid" />
              <div className="p-t-8 mt-1">
                <div className="stext-116 cl8 hov-cl1 trans-04 mb-3">
                  {blog.title}
                </div>
              </div>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RelatedBlogs;
