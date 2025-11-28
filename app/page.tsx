import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import ProductListing from "@/components/ProductListing/ProductListing";
import styles from "./page.module.css";

async function getProducts() {
  const res = await fetch("https://fakestoreapi.com/products");
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
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
