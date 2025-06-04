import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Home } from "./pages/home"
import { NotFound } from "./pages/NotFound"
import { Toaster } from "@/components/ui/toaster";
import { useEffect, useState } from "react";
import { motion } from 'framer-motion';


function App() {
  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0
  });
  const [cursorVariant, setCursorVariant] = useState("default");

    useEffect(() => {
    const mouseMove = e => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY
      })
    }

    window.addEventListener("mousemove", mouseMove);

    return () => {
      window.removeEventListener("mousemove", mouseMove);
    }
  }, []);

  const variants = {
    default: {
      x: mousePosition.x,
      y: mousePosition.y,
    },
    // text: {
    //   height: 150,
    //   width: 150,
    //   x: mousePosition.x - 75,
    //   y: mousePosition.y - 75,
    //   backgroundColor: "yellow",
    //   mixBlendMode: "difference"
    // }
  }
  // const textEnter = () => setCursorVariant("text");
  // const textLeave = () => setCursorVariant("default");

  return (
    <>
      <motion.div
        className='cursor'
        variants={variants}
        animate={cursorVariant}
      />
      <BrowserRouter>
        <Routes>
          {/* <Route index /> */}
          <Route index element={<Home />} />
          <Route path="/*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
