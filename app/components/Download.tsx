"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Download, Check } from "lucide-react";

export default function DownloadCV() {
  const [downloaded, setDownloaded] = useState(false);

  const handleDownload = () => {
    // Trigger the "downloaded" state when clicked
    setDownloaded(true);

    // Reset back after a while (optional)
    setTimeout(() => setDownloaded(false), 10000);
  };

  return (
    <motion.a
      href="/CV/jesper_CV.pdf"
      download
      onClick={handleDownload}
      whileHover={{ scale: 1.05, y: -2 }}
      whileTap={{ scale: 0.95 }}
      className="flex items-center gap-3 px-6 py-3 rounded-xl bg-background text-foreground shadow-lg border border-foreground/10 transition-colors hover:bg-foreground hover:text-background"
    >
      <AnimatePresence mode="wait" initial={false}>
        {!downloaded ? (
          <motion.div
            key="download"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="flex items-center gap-3"
          >
            <Download className="w-5 h-5" />
            <span className="font-semibold">Download CV</span>
          </motion.div>
        ) : (
          <motion.div
            key="check"
            initial={{ opacity: 0, scale: 0.5, rotate: -45 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            exit={{ opacity: 0 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            className="flex items-center gap-3 text-green-500"
          >
            <Check className="w-5 h-5" />
            <span className="font-semibold">Downloaded!</span>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.a>
  );
}
