import { Icon } from "@iconify/react";
import { motion } from "framer-motion";

const icons = [
  "akar-icons:html-fill",
  "akar-icons:css-fill",
  "simple-icons:javascript",
  "simple-icons:typescript",
  "akar-icons:react-fill",
  "akar-icons:redux-fill",
  "bxl:go-lang",
  "cib:mysql",
  "simple-icons:mongodb",
  "bxl:docker",
  "bi:git",
];

export default function TechStacks() {
  return (
    <ul className="flex flex-wrap gap-3">
      {icons.map((icon, i) => (
        <motion.li
          key={i}
          initial={{ opacity: 0, y: 100 }}
          animate={{
            opacity: 1,
            y: 0,
            transition: { delay: (i + 1) * 0.1 },
          }}
          whileHover={{
            scale: 1.15,
          }}
        >
          <Icon
            icon={icon}
            className="text-violet-500 "
            width="48px"
            inline={true}
          />
        </motion.li>
      ))}
    </ul>
  );
}
