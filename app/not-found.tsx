import Link from 'next/link';
import styles from './not-found.module.css';
import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';
import TopStrip from '@/components/TopStrip/TopStrip';

export default function NotFound() {
    return (
        <>
            <TopStrip />
            <Header />
            <main className={styles.container}>
                <h1 className={styles.errorCode}>404</h1>
                <h2 className={styles.title}>Page Not Found</h2>
                <p className={styles.description}>
                    The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
                </p>
                <Link href="/" className={styles.homeLink}>
                    Back to Home
                </Link>
            </main>
            <Footer />
        </>
    );
}
