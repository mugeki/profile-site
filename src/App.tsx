import { MantineProvider } from "@mantine/core";
import { useContext } from "react";
import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./AppRoutes";
import { ThemeContext } from "./contexts/ThemeContext";

export default function App() {
  const { theme } = useContext(ThemeContext);

  return (
    <MantineProvider
      theme={{
        colorScheme: theme as any,
        colors: {
          dark: [
            "#fafafa",
            "#f4f4f5",
            "#e4e4e7",
            "#d4d4d8",
            "#a1a1aa",
            "#71717a",
            "#52525b",
            "#3f3f46",
            "#27272a",
            "#18181b",
          ],
        },
        primaryColor: "violet",
      }}
      emotionOptions={{ key: "mantine", prepend: false }}
      withGlobalStyles
      withNormalizeCSS
    >
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </MantineProvider>
  );
}
