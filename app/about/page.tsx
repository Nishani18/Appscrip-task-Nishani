import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";

export default function AboutPage() {
  return (
    <>
      <Header />
      <main
        className="container"
        style={{ padding: "64px 16px", minHeight: "50vh" }}
      >
        <h1>About Us</h1>
        <p>This is the About page.</p>
      </main>
      <Footer />
    </>
  );
}
