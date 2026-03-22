import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

const socials = [
  { href: "https://github.com/anil29717", icon: <FaGithub />, label: "GitHub" },
  { href: "https://www.linkedin.com/in/anil-kumar85/", icon: <FaLinkedin />, label: "LinkedIn" },
  { href: "mailto:anilkumar.gugm@gmail.com", icon: <FaEnvelope />, label: "Email" },
  { href: "https://leetcode.com/anilkumar_365", icon: <SiLeetcode />, label: "LeetCode" },
];

const Footer = () => (
  <motion.footer
    id="contact"
    className="relative py-8 px-6 overflow-hidden"
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5 }}
  >
    {/* Neon top divider */}
    <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#00f0ff]/20 to-transparent" />

    <div className="relative max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
      <p className="font-['JetBrains_Mono'] text-xs text-[#8888aa]/50 tracking-wider">
        /* built by <span className="text-[#00f0ff]/60">Anil Kumar</span> &copy; {new Date().getFullYear()} */
      </p>

      <div className="flex items-center gap-2">
        <span className="font-['JetBrains_Mono'] text-[10px] text-[#8888aa]/30 tracking-wider uppercase mr-2">connect:</span>
        <div className="flex gap-2 text-base">
          {socials.map(({ href, icon, label }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith("mailto") ? undefined : "_blank"}
              rel="noopener noreferrer"
              className="w-8 h-8 border border-[#00f0ff]/15 bg-[#00f0ff]/3 flex items-center justify-center text-[#00f0ff]/40 hover:text-[#00f0ff] hover:bg-[#00f0ff]/10 hover:border-[#00f0ff]/40 hover:shadow-[0_0_10px_rgba(0,240,255,0.15)] transition-all duration-300"
              aria-label={label}
            >
              {icon}
            </a>
          ))}
        </div>
      </div>
    </div>
  </motion.footer>
);

export default Footer;
