import { Icon } from "@iconify/react";
import { Tooltip } from "@mantine/core";
import { motion } from "framer-motion";

export default function ProjectCard({ entry }: { entry: any }) {
  const pic =
    "https://images.unsplash.com/photo-1530435460869-d13625c69bbf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80";
  return (
    <motion.div
      initial={{ opacity: 0, x: -100 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.3 }}
      className="flex flex-col justify-between gap-6 md:flex-row w-full"
    >
      <div className="flex flex-col justify-center">
        <p className="text-base text-violet-500 ">Featured</p>
        <div className="flex">
          <p className="text-2xl mb-0 font-bold">{entry.name}</p>
          <div className="flex gap-3 items-center ml-6">
            <Tooltip
              withArrow
              transition="fade"
              transitionDuration={200}
              label="Open demo"
            >
              <a
                href={entry.url_deploy}
                target="_blank"
                aria-label={"demo/" + entry.name}
              >
                <Icon
                  icon="akar-icons:link-out"
                  className="text-violet-500 "
                  width={20}
                />
              </a>
            </Tooltip>
            <Tooltip
              withArrow
              transition="fade"
              transitionDuration={200}
              label="Open source code"
            >
              <a
                href={entry.url_github}
                target="_blank"
                aria-label={"source/" + entry.name}
              >
                <Icon
                  icon="akar-icons:github-fill"
                  className="text-violet-500 "
                  width={20}
                />
              </a>
            </Tooltip>
          </div>
        </div>
        <p className="text-base my-6 text-zinc-600 dark:text-zinc-300 max-w-[400px]">
          {entry.description}
        </p>
        <div className="flex justify-between mb-3">
          <div className="flex flex-wrap gap-3 text-sm text-white cursor-default">
            {entry.tech_stack.map((item: string, i: number) => (
              <p
                key={i}
                className="bg-zinc-500 px-2 py-1 shadow-md rounded-full text-xs text-center w-fit h-fit"
              >
                {item}
              </p>
            ))}
          </div>
        </div>
      </div>
      <img
        src={entry.image ? entry.image : pic}
        alt={`project-${entry.name.toLowerCase()}`}
        width="370px"
        className="shadow-xl h-60 rounded object-cover"
      />
    </motion.div>
  );
}
