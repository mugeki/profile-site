import { Icon } from "@iconify/react";
import { Tooltip } from "@mantine/core";
import { motion } from "framer-motion";

export default function Aside() {
  const isResume = window.location.pathname === "/resume";
  return (
    <motion.aside
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 100 }}
      transition={{ type: "linear", duration: 0.3 }}
      className={
        "hidden md:flex flex-col items-center fixed bottom-0 z-0 " +
        (isResume ? "right-5" : "left-5")
      }
    >
      {/* {isResume ? (
        <Tooltip
          position="left"
          placement="end"
          withArrow
          transition="fade"
          transitionDuration={200}
          label="Download as PDF"
          className="cursor-pointer"
        >
          <Icon icon="bx:download" width={20} />
        </Tooltip>
      ) : ( */}
      <>
        <Tooltip
          position="right"
          placement="end"
          withArrow
          transition="fade"
          transitionDuration={200}
          label="Open LinkedIn"
        >
          <a
            href="https://www.linkedin.com/in/muhamad-elang-ramadhan-7093721ab/"
            target="_blank"
            aria-label="LinkedIn"
          >
            <Icon
              icon="akar-icons:linkedin-fill"
              className="mt-6 text-zinc-500 dark:text-zinc-400"
              width={15}
            />
          </a>
        </Tooltip>

        <Tooltip
          position="right"
          placement="end"
          withArrow
          transition="fade"
          transitionDuration={200}
          label="Open GitHub"
        >
          <a
            href="https://www.github.com/mugeki"
            target="_blank"
            aria-label="GitHub"
          >
            <Icon
              icon="akar-icons:github-fill"
              className="mt-6 text-zinc-500 dark:text-zinc-400"
              width={15}
            />
          </a>
        </Tooltip>
      </>
      {/* )} */}
      <div
        className="bg-zinc-400 rounded-full mt-3"
        style={{ height: "100px", width: "2px" }}
      ></div>
    </motion.aside>
  );
}
