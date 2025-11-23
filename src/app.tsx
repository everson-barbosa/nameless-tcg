import { ThemeProvider } from "./contexts/theme/theme.context";
import { CardViewerPage } from "./pages/card-viewer/card-viewer.page";

export function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <CardViewerPage />
    </ThemeProvider>
  );
}
