"use client";
import { motion } from "framer-motion";
import { Mail, Phone, Linkedin } from "lucide-react";
import { JSX } from "react";

type Contact = {
  icon: JSX.Element;
  label: string;
  value: string;
  href: string;
};

const contacts: Contact[] = [
  {
    icon: <Mail className="w-5 h-5 m-1" />,
    label: "Email",
    value: "jesper.dyrholm@gmail.com",
    href: "mailto:jesper.dyrholm@gmail.com",
  },
  {
    icon: <Phone className="w-5 h-5 m-1" />,
    label: "Phone",
    value: "+45 29 90 98 51",
    href: "tel:+4529909851",
  },
  {
    icon: <Linkedin className="w-5 h-5 m-1" />,
    label: "LinkedIn",
    value: "linkedin.com/in/jesper-dyrholm-thomsen/",
    href: "https://www.linkedin.com/in/jesper-dyrholm-thomsen/",
  },
];
export default function ContactMe() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="max-w-md mx-auto p-6 rounded-2xl bg-background text-foreground shadow-lg border border-foreground/10"
    >
      <h2 className="text-2xl font-bold mb-4 text-center">Contact Me</h2>{" "}
      <ul className="space-y-3">
        {contacts.map((contact, index) => (
          <motion.li
            key={index}
            whileHover={{ scale: 1.03, x: 4 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <a
              href={contact.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 p-3 rounded-xl bg-background hover:bg-foreground hover:text-background transition-colors border border-foreground/10"
            >
              {contact.icon}{" "}
              <div>
                <p className="font-semibold">{contact.label}</p>{" "}
                <p className="text-sm opacity-80">{contact.value}</p>{" "}
              </div>
            </a>
          </motion.li>
        ))}
      </ul>
    </motion.div>
  );
}
