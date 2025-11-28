import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";

export default function StoriesPage() {
  return (
    <>
      <Header />
      <main
        className="container"
        style={{ padding: "64px 16px", minHeight: "50vh" }}
      >
        <h1>Stories</h1>
        <p>This is the Stories page.</p>
      </main>
      <Footer />
    </>
  );
}
