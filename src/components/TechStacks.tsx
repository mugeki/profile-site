import { Icon } from "@iconify/react";
import { Tooltip } from "@mantine/core";
import { motion } from "framer-motion";

const icons = [
  { icon: "akar-icons:html-fill", label: "HTML" },
  { icon: "akar-icons:css-fill", label: "CSS" },
  { icon: "simple-icons:javascript", label: "JavaScript" },
  { icon: "simple-icons:typescript", label: "TypeScript" },
  { icon: "akar-icons:react-fill", label: "React" },
  { icon: "nonicons:next-16", label: "Next.js" },
  { icon: "akar-icons:redux-fill", label: "Redux" },
  { icon: "fa6-brands:node", label: "Node.js" },
  { icon: "file-icons:nestjs", label: "Nest.js" },
  { icon: "bxl:go-lang", label: "Go" },
  { icon: "cib:mysql", label: "MySQL" },
  { icon: "simple-icons:mongodb", label: "MongoDB" },
  { icon: "bxl:docker", label: "Docker" },
  { icon: "bi:git", label: "Git" },
  { icon: "devicon-plain:redis", label: "Redis" },
  { icon: "simple-icons:jenkins", label: "Jenkins" },
  { icon: "devicon-plain:argocd-wordmark", label: "ArgoCD" },
  { icon: "simple-icons:rabbitmq", label: "RabbitMQ" },
  { icon: "simple-icons:strapi", label: "Strapi" },
  
  
];

export default function TechStacks() {
  return (
    <ul className="flex flex-wrap gap-3">
      {icons.map((icon, i) => (
      <Tooltip label={icon.label} withArrow>

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
            icon={icon.icon}
            className="text-violet-500 "
            width="48px"
            inline={true}
          />
        </motion.li>
      </Tooltip>
      ))}
    </ul>
  );
}
