"use client";
import { useEffect, useState } from "react";
import { artistData } from "../../public/data/artist.js";
import { motion, AnimatePresence } from "framer-motion";
import { Twitter, Facebook, Youtube, Instagram, Mail } from "lucide-react";
const MotionImage = motion.img;

export default function ExclusiveTalents() {
  const [selectedArtist, setSelectedArtist] = useState(null);

  useEffect(() => {
    // Freeze scrolling when overlay is active
    if (selectedArtist) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }

    // Cleanup on component unmount
    return () => {
      document.body.classList.remove("no-scroll");
    };
  }, [selectedArtist]);

  return (
    <div className="min-h-screen text-gray-100 py-12 bg-opacity-95 bg-transparent">
      <h1 className="text-4xl font-bold text-center mb-16 text-gray-100">
        Exclusive Talents
      </h1>
      {/* Artist Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        {artistData.map((artist, index) => (
          <motion.div
            key={index}
            className="cursor-pointer group"
            onClick={() => setSelectedArtist(artist)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <div className="relative overflow-hidden rounded-lg shadow-lg ">
              <h2 className="text-2xl font-bold text-white text-center mb-2">
                {artist.name}
              </h2>
              <MotionImage
                src={artist.image}
                alt={artist.name}
                className="w-full h-80 object-cover rounded-[50%]"
                transition={{ duration: 0.3 }}
              />
              <motion.div
                className="absolute inset-0 bg-gradient-to-t via-transparent to-transparent flex items-end justify-center p-4"
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
              ></motion.div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Artist Details Overlay */}
      <AnimatePresence>
        {selectedArtist && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-90 flex justify-center items-center z-50 p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="relative bg-gray-900 rounded-lg p-8 max-w-4xl w-full max-h-[90vh] overflow-y-auto"
              initial={{ scale: 0.9, y: 50, opacity: 0 }}
              animate={{
                scale: 1,
                y: 0,
                opacity: 1,
                transition: {
                  type: "spring",
                  stiffness: 300,
                  damping: 30,
                },
              }}
              exit={{
                scale: 0.9,
                y: 50,
                opacity: 0,
                transition: {
                  type: "spring",
                  stiffness: 300,
                  damping: 30,
                },
              }}
            >
              <motion.button
                className="absolute top-4 right-4 text-3xl hover:text-pink-400 transition"
                onClick={() => setSelectedArtist(null)}
                whileHover={{ scale: 1.1, rotate: 90 }}
                whileTap={{ scale: 0.9 }}
              >
                &times;
              </motion.button>
              <motion.h2
                className="text-4xl font-bold mb-6 text-gray-100 text-center"
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                {selectedArtist.name}
              </motion.h2>
              <MotionImage
                src={selectedArtist.image}
                alt={selectedArtist.name}
                className="w-60 h-60 object-cover rounded-[50%] mx-auto mb-5"
                transition={{ duration: 0.3 }}
              />
              <motion.p
                className="mb-8 text-lg leading-relaxed text-gray-300"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.4 }}
              >
                {selectedArtist.description}
              </motion.p>

              {/* Spotify Box */}
              <motion.div
                className="aspect-w-16 h-[400px] mb-7"
                initial={{ scale: 0.95, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.3 }}
              >
                <iframe
                  src={selectedArtist.spotifyLink}
                  className="w-full h-[400px] rounded-md"
                  frameBorder="0"
                  allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                ></iframe>
              </motion.div>
              <h3 className="mb-3">Connect online</h3>
              <motion.div
                className="flex space-x-6 mb-6"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.5 }}
              >
                {Object.entries(selectedArtist.socialLinks).map(
                  ([key, link], index) => (
                    <motion.a
                      key={key}
                      href={link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-2xl text-gray-400 hover:text-pink-400 transition"
                      whileHover={{ scale: 1.2, rotate: 5 }}
                      whileTap={{ scale: 0.9 }}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.6 + index * 0.1 }}
                    >
                      {key === "twitter" && <Twitter />}
                      {key === "facebook" && <Facebook />}
                      {key === "youtube" && <Youtube />}
                      {key === "instagram" && <Instagram />}
                      {key === "email" && <Mail />}
                    </motion.a>
                  )
                )}
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
