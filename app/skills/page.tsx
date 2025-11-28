import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";

export default function SkillsPage() {
  return (
    <>
      <Header />
      <main
        className="container"
        style={{ padding: "64px 16px", minHeight: "50vh" }}
      >
        <h1>Skills</h1>
        <p>This is the Skills page.</p>
      </main>
      <Footer />
    </>
  );
}
