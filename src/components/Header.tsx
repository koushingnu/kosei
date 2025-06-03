import React from "react";

const Header = () => {
  return (
    <header className="w-full bg-white/80 backdrop-blur sticky top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        {/* サイトタイトル：グラデーション文字 */}
        <div className="text-xl md:text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent drop-shadow-lg">
          My Portfolio
        </div>

        {/* ナビゲーション：全リンクにグラデーション文字 */}
        <nav className="hidden md:flex space-x-6 text-sm">
          {[
            { href: "#home", label: "ホーム" },
            { href: "#services", label: "サービス" },
            { href: "#about", label: "自己紹介" },
            { href: "#contact", label: "お問い合わせ" },
          ].map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent drop-shadow-lg font-medium hover:opacity-80 transition"
            >
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Header;
