import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import HomePage from "./pages/HomePage";
import CollectionPages from "./pages/CollectionPages";

const App = () => {
  return (
    <div className="min-h-screen bg-gray-950 text-white flex flex-col">
      <Navbar />

      <main className="flex-1">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/collection" element={<CollectionPages />} />
        </Routes>
      </main>

      <ToastContainer
        position="top-center"
        autoClose={1000}
        theme="dark"
        newestOnTop
        pauseOnHover={false}
      />

      <Footer />
    </div>
  );
};

export default App;
