import { AnimatePresence } from "framer-motion";
import { Route, Routes, useLocation } from "react-router-dom";
import Error404 from "./components/Error404";
import Home from "./pages/Home";
import Resume from "./pages/Resume";

export default function AppRoutes() {
  const location = useLocation();
  return (
    <AnimatePresence
      exitBeforeEnter
      onExitComplete={() => window.scrollTo(0, 0)}
    >
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="*" element={<Error404 />} />
      </Routes>
    </AnimatePresence>
  );
}
