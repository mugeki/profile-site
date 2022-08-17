import { motion } from "framer-motion";
import { ReactNode } from "react";
import Aside from "./Aside";
import Navbar from "./Navbar";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="bg-zinc-50 dark:bg-zinc-900 text-zinc-900 dark:text-zinc-200 transition-all duration-300">
      <Navbar />
      <Aside />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ type: "linear", duration: 0.3 }}
      >
        {children}
      </motion.div>
    </div>
  );
}
