import React from "react";
import { FaXTwitter, FaInstagram, FaGithub } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-white/80 backdrop-blur text-gray-700 text-sm py-6">
      <div className="max-w-7xl mx-auto px-4 flex flex-col items-center space-y-3">
        {/* SNSリンク（任意） */}
        <div className="flex space-x-4 text-xl">
          <a
            href="https://twitter.com/yourname"
            target="_blank"
            rel="noreferrer"
            className="hover:text-purple-500 transition"
          >
            <FaXTwitter />
          </a>
          <a
            href="https://instagram.com/yourname"
            target="_blank"
            rel="noreferrer"
            className="hover:text-pink-500 transition"
          >
            <FaInstagram />
          </a>
          <a
            href="https://github.com/yourname"
            target="_blank"
            rel="noreferrer"
            className="hover:text-gray-800 transition"
          >
            <FaGithub />
          </a>
        </div>

        {/* コピーライト */}
        <p className="text-xs text-gray-500">&copy; {new Date().getFullYear()} My Portfolio. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
