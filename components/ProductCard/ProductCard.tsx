"use client";

import styles from "./ProductCard.module.css";
import { Heart } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

interface Product {
  image: string;
  title: string;
}

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const [isLiked, setIsLiked] = useState(false);

  return (
    <div className={styles.card}>
      <div className={styles.imageContainer}>
        <Image
          src={product.image}
          alt={product.title}
          fill
          sizes="(max-width: 768px) 50vw, 25vw"
          className={styles.image}
        />
      </div>

      <div className={styles.details}>
        <div className={styles.info}>
          <h2 className={styles.title}>{product.title}</h2>
          <p className={styles.description}>
            <span className={styles.link}>Sign in</span> or Create an account to
            see pricing
          </p>
        </div>
        <button
          className={styles.heartBtn}
          aria-label="Like"
          onClick={() => setIsLiked(!isLiked)}
        >
          <Heart
            size={20}
            fill={isLiked ? "red" : "none"}
            color={isLiked ? "red" : "currentColor"}
            strokeWidth={1.5}
          />
        </button>
      </div>
    </div>
  );
}
