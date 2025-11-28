import styles from "./TopStrip.module.css";
import Image from "next/image";
import TopStripImage from "../../public/top-strip-icon.png";

export default function TopStrip() {
  return (
    <div className={styles.strip}>
      <div className={styles.content}>
        <div className={styles.item}>
          <Image
            src={TopStripImage}
            alt="Highlight Icon"
            className={styles.icon}
          />
          <span>Lorem ipsum dolor</span>
        </div>
        <div className={`${styles.item} ${styles.desktopOnly}`}>
          <Image
            src={TopStripImage}
            alt="Highlight Icon"
            className={styles.icon}
          />
          <span>Lorem ipsum dolor</span>
        </div>
        <div className={`${styles.item} ${styles.desktopOnly}`}>
          <Image
            src={TopStripImage}
            alt="Highlight Icon"
            className={styles.icon}
          />
          <span>Lorem ipsum dolor</span>
        </div>
      </div>
    </div>
  );
}
