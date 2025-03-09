export interface BannerContent {
  preTitle: string;
  title: string;
}

export interface AboutPage {
  title: string;
  first_content: string;
  second_content: string;
  third_content: string;
  first_image: string;
  second_image: string;
  second_title: string;
  fourth_content: string;
  fifth_content: string;
  author: string;
}

export interface Product {
  id: string;
  price: string;
  title: string;
  gender: string;
  img: string;
  description: string;
}

export interface Blog {
  id: string;
  author: string;
  date: string;
  category: string;
  excerpt: string;
  img: string;
  title: string;
  first_content: string;
  second_content: string;
}

export interface HomeProps {
  banner: BannerContent | null;
  products: Product[] | null;
  blogs: Blog[] | null;
  error: string | null;
}

export interface PageTitleProps {
  title: string;
}
