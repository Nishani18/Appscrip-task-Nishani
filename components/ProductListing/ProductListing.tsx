"use client";

import { useState } from "react";
import FilterBar from "../FilterBar/FilterBar";
import FilterSidebar from "../FilterSidebar/FilterSidebar";
import ProductCard from "../ProductCard/ProductCard";
import styles from "./ProductListing.module.css";

export default function ProductListing({ products }: { products: any[] }) {
  const [isFilterVisible, setIsFilterVisible] = useState(false);

  const toggleFilter = () => {
    setIsFilterVisible(!isFilterVisible);
  };

  return (
    <>
      <FilterBar
        isFilterVisible={isFilterVisible}
        onToggleFilter={toggleFilter}
        itemCount={products.length}
      />

      <div className={styles.contentWrapper}>
        {isFilterVisible && (
          <div className={styles.sidebarWrapper}>
            <FilterSidebar />
          </div>
        )}

        <div
          className={`${styles.gridWrapper} ${
            isFilterVisible ? styles.withSidebar : ""
          }`}
        >
          <div className={styles.productGrid}>
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
