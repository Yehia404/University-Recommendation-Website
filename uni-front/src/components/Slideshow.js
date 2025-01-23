import { useState, useEffect } from "react";
import Ainshams from "../assets/Ainshams.png";
import Cairo from "../assets/Cairo.jpg";
import BUE from "../assets/BUE.jpeg";
import GUC from "../assets/GUC.jpg";

function Slideshow() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [Ainshams, Cairo, BUE, GUC];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 3000);
    return () => clearInterval(timer);
  }, [slides.length]);

  return (
    <div className="relative w-full h-[400px] overflow-hidden rounded-lg">
      {slides.map((slide, index) => (
        <img
          key={index}
          src={slide}
          alt={`Slide ${index + 1}`}
          className={`absolute w-full h-full object-cover transition-opacity duration-500 ${
            index === currentSlide ? "opacity-100" : "opacity-0"
          }`}
        />
      ))}
    </div>
  );
}

export default Slideshow;
