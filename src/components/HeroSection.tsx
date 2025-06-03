import React from "react";

const HeroSection = () => {
  return (
    <section className="min-h-screen bg-gradient-to-br from-purple-300 to-green-300 flex items-center justify-center px-4 bg-white/40 backdrop-blur-sm relative / absolute / z-10"
    id="home">
      <div className="max-w-3xl text-center">
        <h1 className="text-4xl md:text-5xl font-semibold text-white mb-6 leading-tight text-shadow">
          自然体で、<br className="md:hidden" />
          伝わるポートフォリオ
        </h1>
        <p className="text-lg text-white/90 mb-8">
          あなたの魅力を、やさしく丁寧に届けます。
        </p>
        <a
          href="#contact"
          className="inline-block bg-white text-green-700 font-medium py-3 px-6 rounded-full shadow hover:bg-green-100 transition"
        >
          お問い合わせはこちら
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
