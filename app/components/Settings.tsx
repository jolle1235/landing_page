"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { useTheme } from "next-themes";
import { Settings, Moon, Sun } from "lucide-react";

export default function SettingsMenu() {
  const { theme, setTheme } = useTheme();
  const [open, setOpen] = useState(false);

  return (
    <div className="relative">
      <button
        onClick={() => setOpen(!open)}
        className="p-2 rounded-full bg-secondaryBackground text-foreground border border-foreground/20 hover:bg-foreground hover:text-background transition"
      >
        <Settings className="w-5 h-5" />
      </button>

      {open && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          className="absolute right-0 mt-2 w-48 rounded-lg shadow-lg bg-background border border-foreground/10 p-4 z-50"
        >
          <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="flex items-center gap-2 w-full px-3 py-2 rounded-md hover:bg-foreground hover:text-background transition"
          >
            {theme === "dark" ? (
              <>
                <Sun className="w-4 h-4" /> Light Mode
              </>
            ) : (
              <>
                <Moon className="w-4 h-4" /> Dark Mode
              </>
            )}
          </button>
        </motion.div>
      )}
    </div>
  );
}
