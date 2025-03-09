"use client";

// libs
import { useSearchParams } from "next/navigation";
import { useState, useEffect } from "react";
import Head from "next/head";
// types
import { Blog, Product } from "@/app/types";
// components
import BlogItem from "@/components/BlogItem";
import PageTitle from "@/components/PageTitle";
import ProductItem from "@/components/ProductItem";

export default function SearchResults() {
  const searchParams = useSearchParams();
  const query = searchParams.get("query") || "";

  const [blogs, setBlogs] = useState<Blog[] | null>(null);
  const [products, setProducts] = useState<Product[] | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!query) return;

    const fetchData = async () => {
      try {
        setLoading(true);
        setError(null);

        const [blogsResponse, productsResponse] = await Promise.all([
          fetch(`/api/search/blogs?query=${query}`),
          fetch(`/api/search/products?query=${query}`),
        ]);

        if (!blogsResponse.ok || !productsResponse.ok) {
          throw new Error("Failed to fetch data");
        }

        const blogsData: Blog[] = await blogsResponse.json();
        const productsData: Product[] = await productsResponse.json();

        setBlogs(blogsData);
        setProducts(productsData);
      } catch (err) {
        setError(
          err instanceof Error ? err.message : "An unknown error occurred"
        );
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [query]);

  return (
    <>
      <Head>
        <title>Store - Search</title>
        <meta
          name="description"
          content="Search results for blogs and products"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <PageTitle title="Store - Search Results" />

      <div className="bg0 m-t-23 p-b-140 mt-5">
        <div className="container">
          {loading ? (
            <div>Loading...</div>
          ) : error ? (
            <div>Error: {error}</div>
          ) : (
            <>
              <h2>Blogs</h2>
              {blogs && blogs.length > 0 ? (
                <div className="row isotope-grid">
                  {blogs.map((blog) => (
                    <BlogItem key={blog.id} blog={blog} />
                  ))}
                </div>
              ) : (
                <p>No blog results found.</p>
              )}

              <h2>Products</h2>
              {products && products.length > 0 ? (
                <div className="row isotope-grid">
                  {products.map((product) => (
                    <ProductItem key={product.id} product={product} />
                  ))}
                </div>
              ) : (
                <p>No product results found.</p>
              )}
            </>
          )}
        </div>
      </div>
    </>
  );
}
