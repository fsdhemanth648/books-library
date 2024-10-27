import { Outlet } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import "@mantine/core/styles.css";

import { MantineProvider } from "@mantine/core";
import Footer from "./components/Footer";
import Alert from "./components/Alert";

function App() {
  return (
    <MantineProvider>
      <Navbar />
      <main className="min-h-screen max-w-screen-2xl mx-auto px-4 py-6 font-primary">
        <Outlet />
      </main>
      <Footer />
      <Alert />
    </MantineProvider>
  );
}

export default App;
