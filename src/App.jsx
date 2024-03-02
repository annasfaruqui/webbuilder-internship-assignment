import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import WebsiteCards from "./components/WebsiteCards/WebsiteCards";

function App() {
  return (
    <>
      <Navbar />
      <main style={{ margin: "5rem 0" }}>
        <WebsiteCards />
      </main>
      <Footer />
    </>
  );
}

export default App;
