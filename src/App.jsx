import { Routes, Route, Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { AnimatePresence } from "framer-motion";

function Home() {
  return (
    <motion.div
      className="flex flex-col items-center justify-center h-screen bg-blue-100"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <h1 className="text-4xl font-bold mb-4">Home Page</h1>
      <Link to="/about" className="text-blue-600 underline hover:text-blue-800">
        Go to About
      </Link>
    </motion.div>
  );
}

function About() {
  return (
    <motion.div
      className="flex flex-col items-center justify-center h-screen bg-green-100"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -50 }}
      transition={{ duration: 0.6 }}
    >
      <h1 className="text-4xl font-bold mb-4">About Page</h1>
      <Link to="/" className="text-green-600 underline hover:text-green-800">
        Back to Home
      </Link>
    </motion.div>
  );
}

export default function App() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </AnimatePresence>
  );
}
