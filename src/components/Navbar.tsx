import { Icon } from "@iconify/react";
import { ActionIcon } from "@mantine/core";
import { AnimatePresence, motion } from "framer-motion";
import { useContext, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { ThemeContext } from "../contexts/ThemeContext";
import { useOnOutsideClick } from "../hooks/useOnOutsideClick";
import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
  const isHome = window.location.pathname === "/";
  const isResume = window.location.pathname === "/resume";
  const { theme, setTheme } = useContext(ThemeContext);
  const [open, setOpen] = useState<boolean>(false);
  const sidebar = useRef<HTMLElement>(null);

  useOnOutsideClick(sidebar, () => setOpen(false));

  return (
    <header className="flex z-10 sticky top-0 backdrop-blur-sm p-5 md:px-16 justify-between items-center w-full">
      {/* Sidebar for < MD breakpoint */}
      <div className="md:hidden">
        <ActionIcon
          aria-label="button"
          variant="light"
          size="lg"
          onClick={() => setOpen(true)}
        >
          <Icon
            icon="charm:menu-hamburger"
            className="text-zinc-500 dark:text-zinc-50"
            width={30}
          />
        </ActionIcon>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="bg-black bg-opacity-70 fixed top-0 left-0 min-h-screen w-full"
          >
            <motion.nav
              initial={{ x: -200 }}
              animate={{ x: 0 }}
              exit={{ x: -200 }}
              transition={{ duration: 0.2 }}
              className="md:hidden p-10 flex flex-col justify-between bg-zinc-50 dark:bg-zinc-900 min-h-screen w-fit"
              ref={sidebar}
            >
              <div className="flex flex-col gap-12">
                <Link to="/" onClick={() => setOpen(false)}>
                  <span className="text-2xl hover:text-violet-500 dark:hover:text-violet-400">
                    Home
                  </span>
                  {isHome && (
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: "70%" }}
                      exit={{ width: 0 }}
                      transition={{ duration: 0.3 }}
                      className="bg-violet-500 rounded-full"
                      style={{ height: "2px" }}
                    ></motion.div>
                  )}
                </Link>
                <Link to="/resume" onClick={() => setOpen(false)}>
                  <span className="text-2xl hover:text-violet-500">Resume</span>
                  {isResume && (
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: "70%" }}
                      exit={{ width: 0 }}
                      transition={{ duration: 0.3 }}
                      className="bg-violet-500 rounded-full"
                      style={{ height: "2px" }}
                    ></motion.div>
                  )}
                </Link>
              </div>
              <div className="flex flex-col self-center gap-10 mb-20">
                <a
                  href="https://www.linkedin.com/in/muhamad-elang-ramadhan-7093721ab/"
                  target="_blank"
                  aria-label="LinkedIn"
                >
                  <Icon
                    className="mt-6"
                    icon="akar-icons:linkedin-fill"
                    color="#94a3b8"
                    width={25}
                  />
                </a>
                <a
                  href="https://www.github.com/mugeki"
                  target="_blank"
                  aria-label="GitHub"
                >
                  <Icon
                    className="mt-6"
                    icon="akar-icons:github-fill"
                    color="#94a3b8"
                    width={25}
                  />
                </a>
              </div>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Logo */}
      <Link to="/">
        <Icon
          icon="simple-icons:eagle"
          className="text-violet-500  cursor-pointer"
          width="28px"
        />
      </Link>

      <ThemeToggle theme={theme} setTheme={setTheme} className="md:hidden" />

      {/* Navbar for > MD breakpoint */}
      <nav className="hidden md:flex ml-auto mr-5 gap-8 justify-between">
        <Link to="/" onClick={() => setOpen(false)}>
          <span className="hover:text-violet-500 dark:hover:text-violet-400">
            Home
          </span>
          {isHome && (
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              exit={{ width: 0 }}
              transition={{ duration: 0.3 }}
              className="bg-violet-500 rounded-full"
              style={{ height: "2px" }}
            ></motion.div>
          )}
        </Link>
        <Link to="/resume" onClick={() => setOpen(false)}>
          <span className="hover:text-violet-500 dark:hover:text-violet-400">
            Resume
          </span>
          {isResume && (
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              exit={{ width: 0 }}
              transition={{ duration: 0.3 }}
              className="bg-violet-500 rounded-full"
              style={{ height: "2px" }}
            ></motion.div>
          )}
        </Link>
      </nav>

      <ThemeToggle
        theme={theme}
        setTheme={setTheme}
        className="hidden md:block"
      />
    </header>
  );
}
