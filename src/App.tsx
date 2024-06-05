import { Route, Routes } from "react-router";
import { Navbar } from "./components/Navbar";
import { Home } from "./pages/Home";
import { About } from "./pages/About";

type Props = {};

export function App({}: Props) {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="Home" element={<Home />} />
        <Route path="About" element={<About />} />
      </Routes>
    </>
  );
}
