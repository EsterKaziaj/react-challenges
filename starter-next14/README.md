# Store - Next.js Project

This is a Next.js project that serves as an e-commerce store with a blog section. The project uses `json-server` to mock a backend API and fetch data for various components and pages. The goal is to implement the functionality for the components and pages as described in the requirements.

## Table of Contents

- [Installation](#installation)
- [Running the Project](#running-the-project)
- [Project Structure](#project-structure)
- [API Endpoints](#api-endpoints)
- [Components](#components)
- [Pages](#pages)
- [Functionality](#functionality)

## Installation

To install the required dependencies, run the following command:

```bash
npm install
```

This will install all the necessary dependencies, including `json-server`.

## Running the Project

To start the development server and the mock API server, run the following commands:

```bash
npm run server
npm run dev
```

- `npm run server`: Starts the `json-server` on `http://localhost:5001`.
- `npm run dev`: Starts the Next.js development server on `http://localhost:3000`.

## Project Structure

The project structure is organized as follows:

```
src/
├── app/
│   ├── about/
│   │   └── page.tsx
│   ├── blog/
│   │   ├── [id]/
│   │   │   └── page.tsx
│   │   └── page.tsx
│   ├── search/
│   │   └── page.tsx
│   ├── shop/
│   │   ├── [id]/
│   │   │   └── page.tsx
│   │   └── page.tsx
│   ├── layout.tsx
│   ├── page.module.tsx
│   └── types.ts
│   └── globals.css
│   └── page.tsx
├── components/
│   ├── Banner.tsx
│   ├── BlogItem.tsx
│   ├── CategoryPicker.tsx
│   ├── FeaturedBlogs.tsx
│   ├── FeaturedProducts.tsx
│   ├── Footer.tsx
│   ├── Header.tsx
│   ├── PageTitle.tsx
│   ├── ProductItem.tsx
│   ├── RelatedBlogs.tsx
│   └── RelatedProducts.tsx
├── styles/
│   ├── bootstrap.min.css
│   ├── main.css
│   └── util.css
└── db.json
└── ...
```

## API Endpoints

The following API endpoints are available:

- **Banner Content**: `http://localhost:5001/banner_content`
- **About Page**: `http://localhost:5001/about_page`
- **Products**: `http://localhost:5001/products`
- **Blogs**: `http://localhost:5001/blogs`

## Components

### Global Components

- **Header**: The project’s navbar. It is displayed on each route. It includes:
  - Active class logic to highlight the current page.
  - Search functionality that redirects to the search page with the search query.
- **Footer**: Displayed on each route.

### Homepage Components

- **Banner**: Fetches data from `http://localhost:5001/banner_content` to display the preTitle and title.
- **CategoryPicker**: Filters products by category and redirects to the shop overview page.
- **FeaturedProducts**: Fetches data from `http://localhost:5001/products/?_limit=4` and uses the `ProductItem` component.
- **FeaturedBlogs**: Fetches data from `http://localhost:5001/blogs/?_limit=3` and uses the `BlogItem` component.

### About Page Components

- **PageTitle**: Reusable component that displays the page title.
- **AboutContent**: Fetches data from `http://localhost:5001/about_page` to display the about page content.

### Shop Overview Page Components

- **Filters**: Filters products by gender and search query. Uses the following endpoints:
  - `http://localhost:5001/products?q=belt`
  - `http://localhost:5001/products?gender_like=man`
  - `http://localhost:5001/products?gender_like=man&q=belt`
- **Products List**: Initially fetches data from `http://localhost:5001/products` and filters based on the selected filters.

### Shop Detail Page Components

- **PageTitle**: Reusable component that displays the page title.
- **Product Detail Data**: Fetches data from `http://localhost:5001/products/*id-of-product*`.
- **Related Products**: Fetches random four products using `http://localhost:5001/products?_start=${randomNo}&_limit=4`.

### Blog Overview Page Components

- **Filters**: Filters blogs by category and search query. Uses the following endpoints:
  - `http://localhost:5001/blogs?q=belt`
  - `http://localhost:5001/blogs?category_like=streetstyle`
  - `http://localhost:5001/blogs?category_like=streetstyle&q=belt`
- **Blogs List**: Initially fetches data from `http://localhost:5001/blogs` and filters based on the selected filters.

### Blog Detail Page Components

- **PageTitle**: Reusable component that displays the page title.
- **Blog Detail Data**: Fetches data from `http://localhost:5001/blogs/*id-of-blog*`.
- **Related Blogs**: Fetches random three blogs using `http://localhost:5001/blogs?_start=${randomNo}&_limit=3`.

### Search Page Components

- **PageTitle**: Reusable component that displays the page title.
- **Results**: Uses the search query from the header form to search through products and blogs using the following endpoints:
  - `http://localhost:5001/blogs?q=belt`
  - `http://localhost:5001/products?q=belt`

## Functionality

- **Pre-rendering**: Use `getStaticProps` or `getServerSideProps` to pre-render pages and fetch data.
- **Search**: Implement search functionality in the header and on the search page.
- **Filters**: Implement filters for products and blogs on their respective overview pages.
- **Dynamic Routing**: Use dynamic routing for product and blog detail pages.
