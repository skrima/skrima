import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Nav from "./components/Nav";
import Home from "./pages/home";
import Company from "./pages/company";
import Products from "./pages/products";
import Services from "./pages/services";
import Events from "./pages/events";
import Gallery from "./pages/gallery";
import Community from "./pages/community";
import Support from "./pages/support";
import Exam from "./pages/exam";
import Contact from "./pages/contact";
import Error from "./pages/error";
import Blog from "./pages/blog";
import Terms from "./pages/legal/terms";
import Privacy from "./pages/legal/privacy";
import Credits from "./pages/legal/credits";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Nav />}>
          <Route index element={<Home />} />
          <Route path="company" element={<Company />} />
          <Route path="products" element={<Products />} />
          <Route path="services" element={<Services />} />
          <Route path="events" element={<Events />} />
          <Route path="gallery" element={<Gallery />} />
          <Route path="community" element={<Community />} />
          <Route path="support" element={<Support />} />
          <Route path="exam" element={<Exam />} />
          <Route path="blog" element={<Blog />} />
          <Route path="contact" element={<Contact />} />
        </Route>
        <Route path="terms" element={<Terms />} />
        <Route path="privacy-policy" element={<Privacy />} />
        <Route path="credits" element={<Credits />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </Router>
  );
}

export default App;
