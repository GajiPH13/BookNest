"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const testimonials = [
  {
    id: 1,
    name: "Sarah Ahmed",
    image: "https://i.pravatar.cc/150?img=1",
    message:
      "This book shop completely changed my reading habits. I love the clean UI and smooth experience!",
  },
  {
    id: 2,
    name: "John Miller",
    image: "https://i.pravatar.cc/150?img=2",
    message:
      "Amazing collection of books and super easy to navigate. Highly recommended for book lovers!",
  },
  {
    id: 3,
    name: "Emily Chen",
    image: "https://i.pravatar.cc/150?img=3",
    message:
      "I enjoy the reading groups feature a lot. It makes reading more interactive and fun!",
  },
  {
    id: 4,
    name: "David Khan",
    image: "https://i.pravatar.cc/150?img=4",
    message:
      "Beautiful design and very responsive. Works perfectly on my phone and laptop.",
  },
];

export default function Testimonials() {
  return (
    <div className="w-full max-w-7xl mx-auto p-3 bg-[#F8F8F8] rounded-xl mt-20 py-10">
      <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">
        What Our Readers Say
      </h2>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {testimonials.map((user, index) => (
          <motion.div
            key={user.id}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2 }}
            viewport={{ once: true }}
            className="rounded-2xl p-5 shadow-lg flex flex-col items-center text-center"
            style={{ backgroundColor: "#EAF0FD" }}
          >
            {/* Avatar */}
            <Image
              src={user.image}
              alt={user.name}
              width={64}
              height={64}
              className="h-16 w-16 rounded-full object-cover mb-3 border-2"
              style={{ borderColor: "#87ABFD" }}
            />

            {/* Name */}
            <h3
              className="font-semibold text-lg"
              style={{ color: "#87ABFD" }}
            >
              {user.name}
            </h3>

            {/* Message */}
            <p className="text-sm text-gray-700 mt-2">
              {user.message}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}