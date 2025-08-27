import "./css/main.css";
import "animate.css";

import Herosection from "./components/Herosection.tsx";
import Projects from "./components/Projects.tsx";

export default function App() {
  return (
    <>
      <Herosection />
      <Projects />
    </>
  );
}
