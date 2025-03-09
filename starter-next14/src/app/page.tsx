// components
import Banner from "@/components/Banner";
import CategoryPicker from "@/components/CategoryPicker";
import FeaturedBlogs from "@/components/FeaturedBlogs";
import FeaturedProducts from "@/components/FeaturedProducts";
// types
import { BannerContent, Product, Blog } from "./types";

async function getBannerData() {
  const res = await fetch("http://localhost:5001/banner_content");
  const data: BannerContent = await res.json();
  return data;
}

async function getProductsData() {
  const res = await fetch("http://localhost:5001/products?_limit=4");
  const data: Product[] = await res.json();
  return data;
}

async function getBlogsData() {
  const res = await fetch("http://localhost:5001/blogs?_limit=3");
  const data: Blog[] = await res.json();
  return data;
}

export default async function Home() {
  const bannerData = await getBannerData();
  const productsData = await getProductsData();
  const blogsData = await getBlogsData();

  return (
    <div>
      <Banner bannerData={bannerData} />
      <CategoryPicker />
      <FeaturedProducts products={productsData} />
      <FeaturedBlogs blogs={blogsData} />
    </div>
  );
}
