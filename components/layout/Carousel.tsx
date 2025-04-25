"use client";
import { useState } from "react";
import { motion } from "motion/react";

// Data contoh
const books = [
  { id: 1, title: "Buku A", page: 120, location: "Shelf 1" },
  { id: 2, title: "Buku B", page: 200, location: "Shelf 2" },
  { id: 3, title: "Buku C", page: 150, location: "Shelf 3" },
];

// Data tambahan
const movies = [
  { id: 1, title: "Film A", duration: 120, genre: "Action" },
  { id: 2, title: "Film B", duration: 150, genre: "Drama" },
  { id: 3, title: "Film C", duration: 90, genre: "Comedy" },
];

export default function SimpleCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Geser ke buku berikutnya
  const next = () => {
    setCurrentIndex((prev) => (prev === books.length - 1 ? 0 : prev + 1));
  };

  // Geser ke buku sebelumnya
  const prev = () => {
    setCurrentIndex((prev) => (prev === 0 ? books.length - 1 : prev - 1));
  };

  return (
    <motion.div
      className="text-center p-4 "
      key={currentIndex}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {/* Judul Buku yang Aktif */}
      <h2 className="text-2xl my-4">{books[currentIndex].title}</h2>
      <p>{books[currentIndex].page}</p>
      <h2>{movies[currentIndex].title}</h2>

      {/* Tombol Navigasi */}
      <div className="flex justify-center gap-4">
        <button onClick={prev} className="bg-gray-200 px-4 py-2 rounded">
          Prev
        </button>
        <button onClick={next} className="bg-gray-200 px-4 py-2 rounded">
          Next
        </button>
      </div>

      {/* Indikator (titik-titik) */}
      <div className="flex justify-center mt-4 gap-2">
        {books.map((_, index) => (
          <div
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full cursor-pointer ${
              currentIndex === index ? "bg-blue-500" : "bg-gray-300"
            }`}
          />
        ))}
      </div>
    </motion.div>
  );
}
