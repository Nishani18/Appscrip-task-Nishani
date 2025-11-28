"use client";

import styles from "./Footer.module.css";
import Link from "next/link";
import Image from "next/image";
import { Instagram, Linkedin, ChevronDown, ChevronUp } from "lucide-react";
import { useState, useEffect } from "react";
import Gpay from "../../public/Gpay.png";
import Amex from "../../public/Amex.png";
import Applepay from "../../public/Applypay.png";
import Mastercard from "../../public/MasterCard.png";
import Paypal from "../../public/Paypal.png";
import Shoppay from "../../public/Shoppay.png";
import USA from "../../public/USA.png";

function FooterSection({
  title,
  children,
  extraContent,
}: {
  title: string;
  children: React.ReactNode;
  extraContent?: React.ReactNode;
}) {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const toggleOpen = () => {
    if (!isMobile) return;
    setIsOpen((prev) => !prev);
  };

  return (
    <div className={styles.column}>
      <div className={styles.headingRow} onClick={toggleOpen}>
        <h3 className={styles.heading}>{title}</h3>
        {isMobile && (
          <span className={styles.chevron}>
            {isOpen ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
          </span>
        )}
      </div>
      <div
        className={`${styles.content} ${
          isMobile && !isOpen ? styles.hidden : ""
        }`}
      >
        {children}
      </div>
      {extraContent}
    </div>
  );
}

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.topSection}>
          <div className={styles.column}>
            <h3 className={styles.heading}>Be the first to know</h3>
            <p className={styles.text}>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. this is simply dummy text.
            </p>
            <div className={styles.subscribeForm}>
              <input
                type="email"
                placeholder="Enter your e-mail..."
                className={styles.input}
              />
              <button className={styles.button}>SUBSCRIBE</button>
            </div>
          </div>
          <div className={styles.column}>
            <h3 className={styles.heading}>CALL US</h3>
            <div className={styles.contactInfo}>
              <span>+44 221 133 5360</span>
              <span className={styles.contactSeparator}>♦</span>
              <span>customercare@mettamuse.com</span>
            </div>
          </div>
          <div className={styles.column}>
            <h3 className={styles.heading}>CURRENCY</h3>
            <div className={styles.currency}>
              <div className={styles.currencyIcon}>
                <Image
                  src={USA}
                  alt="USD"
                  width={24}
                  height={24}
                  style={{ objectFit: "cover" }}
                />
              </div>
              <span className={styles.currencyCode}>♦ USD</span>
            </div>
            <p
              className={styles.text}
              style={{ fontSize: "10px", marginTop: "8px" }}
            >
              Transactions will be completed in Euros and a currency reference
              is available on hover.
            </p>
          </div>
        </div>

        <div className={styles.linksSection}>
          <FooterSection title="mettā muse">
            <div className={styles.linkList}>
              <Link href="/about" className={styles.link}>
                About Us
              </Link>
              <Link href="/stories" className={styles.link}>
                Stories
              </Link>
              <Link href="/artisans" className={styles.link}>
                Artisans
              </Link>
              <Link href="/boutiques" className={styles.link}>
                Boutiques
              </Link>
              <Link href="/contact" className={styles.link}>
                Contact Us
              </Link>
              <Link href="/compliance" className={styles.link}>
                EU Compliances Docs
              </Link>
            </div>
          </FooterSection>

          <FooterSection title="QUICK LINKS">
            <div className={styles.linkList}>
              <Link href="/orders" className={styles.link}>
                Orders & Shipping
              </Link>
              <Link href="/join" className={styles.link}>
                Join/Login as a Seller
              </Link>
              <Link href="/payment" className={styles.link}>
                Payment & Pricing
              </Link>
              <Link href="/returns" className={styles.link}>
                Return & Refunds
              </Link>
              <Link href="/faqs" className={styles.link}>
                FAQs
              </Link>
              <Link href="/privacy" className={styles.link}>
                Privacy Policy
              </Link>
              <Link href="/terms" className={styles.link}>
                Terms & Conditions
              </Link>
            </div>
          </FooterSection>

          <FooterSection
            title="FOLLOW US"
            extraContent={
              <div className={styles.paymentMethods}>
                <h3 className={styles.heading2}>mettā muse ACCEPTS</h3>
                <div className={styles.paymentIcons}>
                  <Image
                    src={Gpay}
                    alt="GPay"
                    height={24}
                    style={{
                      width: "auto",
                    }}
                  />
                  <Image
                    src={Mastercard}
                    alt="Mastercard"
                    height={24}
                    style={{
                      width: "auto",
                    }}
                  />
                  <Image
                    src={Paypal}
                    alt="Paypal"
                    height={24}
                    style={{
                      width: "auto",
                    }}
                  />
                  <Image
                    src={Amex}
                    alt="Amex"
                    height={24}
                    style={{
                      width: "auto",
                    }}
                  />
                  <Image
                    src={Applepay}
                    alt="Apple Pay"
                    height={24}
                    style={{
                      width: "auto",
                    }}
                  />
                  <Image
                    src={Shoppay}
                    alt="Shop Pay"
                    height={24}
                    style={{
                      width: "auto",
                    }}
                  />
                </div>
              </div>
            }
          >
            <div className={styles.socialIcons}>
              <div className={styles.socialIcon}>
                <Instagram size={18} />
              </div>
              <div className={styles.socialIcon}>
                <Linkedin size={18} />
              </div>
            </div>
          </FooterSection>
        </div>

        <div className={styles.copyright}>
          Copyright © 2023 mettamuse. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
