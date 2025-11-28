import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";

export default function ContactPage() {
  return (
    <>
      <Header />
      <main
        className="container"
        style={{ padding: "64px 16px", minHeight: "50vh" }}
      >
        <h1>Contact Us</h1>
        <p>This is the Contact page.</p>
      </main>
      <Footer />
    </>
  );
}
