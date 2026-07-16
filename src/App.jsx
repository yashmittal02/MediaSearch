import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import CollectionPages from "./pages/CollectionPages";
import Navbar from "./components/Navbar";
import { ToastContainer, toast } from "react-toastify";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className="min-h-screen pb-24 bg-gray-950 text-white">
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/collection" element={<CollectionPages />} />
      </Routes>
      <ToastContainer></ToastContainer>
      <footer className="fixed bottom-0 left-0 w-full z-50">
        <Footer />
      </footer>
    </div>
  );
};

export default App;
