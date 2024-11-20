import Home from "./components/pages/Home.jsx";
import Header from "./components/layout/Header.jsx";
import { Outlet } from "react-router-dom";
import Footer from "./components/layout/Footer.jsx";

function App() {
  return (
    <main>
      <Header />
      <Outlet />
      <Footer />
    </main>
  );
}

export default App;
