import "./App.css";
import "@/global.css";
import { GluestackUIProvider } from "@/components/ui/gluestack-ui-provider";
import Avatar from "./components/Avatar";

function App() {
  return (
    <GluestackUIProvider mode="light"><div className="flex items-center justify-center h-screen">
        <Avatar />
      </div></GluestackUIProvider>
  );
}

export default App;
