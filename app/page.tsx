import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import ProductListing from "@/components/ProductListing/ProductListing";
import styles from "./page.module.css";
import Product1 from "../public/Products/Product1.jpg";
import Product2 from "../public/Products/Product2.jpg";
import Product3 from "../public/Products/Product3.jpg";
import Product4 from "../public/Products/Product4.jpg";
import Product5 from "../public/Products/Product5.jpg";
import Product6 from "../public/Products/Product6.jpg";
import Product7 from "../public/Products/Product7.jpg";
import Product8 from "../public/Products/Product8.jpg";
import Product9 from "../public/Products/Product9.jpg";
import Product10 from "../public/Products/Product10.jpg";
import Product11 from "../public/Products/Product11.jpg";
import Product12 from "../public/Products/Product12.jpg";

async function getProducts() {
  try {
    const res = await fetch("https://fakestoreapi.com/products", {
      next: { revalidate: 3600 },
    });
    if (!res.ok) {
      console.error(
        `Failed to fetch products: ${res.status} ${res.statusText}`
      );
      throw new Error("Failed to fetch data");
    }
    return res.json();
  } catch (error) {
    console.error("Error fetching products, using fallback data:", error);
    // Return fallback
    return [
      {
        id: 1,
        title: "PPXOC Milkyway dress in pressed flowers",
        image: Product1,
      },
      {
        id: 2,
        title: "PPXOC Milkyway dress in pressed flowers",
        image: Product2,
      },
      {
        id: 3,
        title: "Product Name",
        image: Product3,
      },
      {
        id: 4,
        title: "Product Name",
        image: Product4,
      },
      {
        id: 5,
        title: "Product Name",
        image: Product5,
      },
      {
        id: 6,
        title: "Product Name",
        image: Product6,
      },
      {
        id: 7,
        title: "Product Name",
        image: Product7,
      },
      {
        id: 8,
        title: "Product Name",
        image: Product8,
      },
      {
        id: 9,
        title: "Product Name",
        image: Product9,
      },
      {
        id: 10,
        title: "Product Name",
        image: Product10,
      },
      {
        id: 11,
        title: "Product Name",
        image: Product11,
      },
      {
        id: 12,
        title: "Product Name",
        image: Product12,
      },
    ];
  }
}

import TopStrip from "@/components/TopStrip/TopStrip";

export default async function Home() {
  const rawProducts = await getProducts();

  const products = rawProducts.map((item: any) => ({
    id: item.id,
    title: item.title,
    image: item.image,
    description: "Sign in or Create an account to see pricing",
    price: item.price,
  }));

  return (
    <div className={styles.pageWrapper}>
      <TopStrip />
      <Header />

      <main className="container">
        <section className={styles.hero}>
          <h1 className={styles.heroTitle}>DISCOVER OUR PRODUCTS</h1>
          <p className={styles.heroText}>
            Lorem ipsum dolor sit amet consectetur. Amet est posuere rhoncus
            scelerisque. Dolor integer scelerisque nibh amet mi ut elementum
            dolor.
          </p>
        </section>

        <ProductListing products={products} />
      </main>

      <Footer />
    </div>
  );
}
