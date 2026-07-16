import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import CollectionPages from "./pages/CollectionPages";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { ToastContainer } from "react-toastify";

const App = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-950 text-white">
      <Navbar />

      <main className="flex-1">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/collection" element={<CollectionPages />} />
        </Routes>
      </main>

      <ToastContainer />

      <Footer />
    </div>
  );
};

export default App;
