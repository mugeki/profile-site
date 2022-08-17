import { Icon } from "@iconify/react";
import { ActionIcon } from "@mantine/core";
import { Dispatch, SetStateAction } from "react";

type Props = {
  theme: string;
  setTheme: Dispatch<SetStateAction<string>>;
  className?: string;
};

export default function ThemeToggle({ theme, setTheme, className }: Props) {
  return (
    <div className={className}>
      <ActionIcon
        aria-label="button"
        variant="light"
        size="lg"
        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      >
        {theme === "light" ? (
          <Icon icon="akar-icons:sun-fill" />
        ) : (
          <Icon icon="bi:moon-fill" color="#FFCE31" />
        )}
      </ActionIcon>
    </div>
  );
}
