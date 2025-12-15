import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import HomePage from "./pages/HomePage";
import ServicesPage from "./pages/ServicesPage";
import AboutPage from "./pages/AboutPage";
import WhyChooseUsPage from "./pages/WhyChooseUsPage";
import GalleryPage from "./pages/GalleryPage";
import ContactPage from "./pages/ContactPage";

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="why-choose-us" element={<WhyChooseUsPage />} />
        <Route path="services" element={<ServicesPage />} />
        <Route path="gallery" element={<GalleryPage />} />
        <Route path="contact" element={<ContactPage />} />
      </Route>
    </Routes>
  </BrowserRouter>
);

export default App;

