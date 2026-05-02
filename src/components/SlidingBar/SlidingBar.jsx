"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const slides = [
  {
    id: 1,
    title: "Join Reading Groups",
    description:
      "Connect with passionate readers, share ideas, and grow together.",
    image:
      "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f",
  },
  {
    id: 2,
    title: "Read Anywhere",
    description:
      "Enjoy your favorite books under a tree or anywhere you like.",
    image:
      "https://images.unsplash.com/photo-1507842217343-583bb7270b66",
  },
  {
    id: 3,
    title: "Benefits of Reading",
    description:
      "Boost knowledge, reduce stress, and expand imagination.",
    image:
      "https://images.unsplash.com/photo-1512820790803-83ca734da794",
  },
];

export default function BookSlider() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);

  // ✅ DEFINE FIRST
  const nextSlide = () => {
    setDirection(1);
    setCurrent((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setDirection(-1);
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
  };

  // ✅ THEN USE
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 4000);

    return () => clearInterval(interval);
  }, [current]);

  const variants = {
    enter: (direction) => ({
      x: direction > 0 ? 300 : -300,
      opacity: 0,
    }),
    center: { x: 0, opacity: 1 },
    exit: (direction) => ({
      x: direction > 0 ? -300 : 300,
      opacity: 0,
    }),
  };

  return (
    <div className="w-full bg-[#EAF0FD] max-w-7xl mx-auto mt-10 p-4 rounded-lg">
      <div
        className="relative overflow-hidden rounded-2xl shadow-xl"
        style={{ backgroundColor: "#EAF0FD" }}
      >
        <AnimatePresence mode="wait" custom={direction}>
          <motion.div
            key={current}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            custom={direction}
            transition={{ duration: 0.6 }}
            className="flex flex-col md:flex-row items-center p-6 gap-6"
            style={{ backgroundColor: "#dbe5fd" }}
          >
            <Image
              src={slides[current].image}
              alt="image"
              width={500}
              height={500}
              className="w-full md:w-1/2 h-56 object-cover rounded-xl"
            />

            <div className="md:w-1/2">
              <h2
                className="text-xl md:text-2xl font-bold"
                style={{ color: "#87ABFD" }}
              >
                {slides[current].title}
              </h2>
              <p>{slides[current].description}</p>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Buttons */}
        <button
          onClick={prevSlide}
          className="absolute top-1/2 left-2 -translate-y-1/2 bg-white/70 px-3 py-1 rounded-full"
        >
          ◀
        </button>

        <button
          onClick={nextSlide}
          className="absolute top-1/2 right-2 -translate-y-1/2 bg-white/70 px-3 py-1 rounded-full"
        >
          ▶
        </button>
      </div>
    </div>
  );
}