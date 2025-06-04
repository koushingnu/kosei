"use client";

import React, { useState, useEffect, useRef } from "react";
import {
  FaCode,
  FaInstagram,
  FaChartBar,
  FaLightbulb,
  FaCamera,
  FaPaintBrush,
  FaMobileAlt,
  FaGlobe,
  FaLock,
  FaRocket,
  FaPenFancy,
  FaCog,
} from "react-icons/fa";

// 12枚分のテストデータ
const services = [
  {
    icon: <FaCode className="text-5xl text-purple-400" />,
    title: "Webサイト制作",
    description: "スマホ対応、予約フォーム付きの構築を実現。",
    detail: "Next.jsやWordPressで管理しやすいサイトを設計。",
  },
  {
    icon: <FaInstagram className="text-5xl text-pink-400" />,
    title: "SNS運用代行",
    description: "Instagram/Xの投稿や返信も丸ごとお任せ。",
    detail: "投稿スケジュールや反応分析まで一括して対応。",
  },
  {
    icon: <FaChartBar className="text-5xl text-green-400" />,
    title: "口コミ分析",
    description: "レビューや感想を分析し改善に活かします。",
    detail: "Googleレビュー等からユーザーの声を抽出・可視化。",
  },
  {
    icon: <FaLightbulb className="text-5xl text-yellow-400" />,
    title: "改善提案",
    description: "ヒアリングを元に現状改善プランをご提案。",
    detail: "UI改善、導線整理、SEO強化などアクションを設計。",
  },
  {
    icon: <FaCamera className="text-5xl text-blue-400" />,
    title: "撮影サービス",
    description: "SNS・Web用の写真や動画を撮影＆編集。",
    detail: "プロ用機材で撮影から編集納品までワンストップ。",
  },
  {
    icon: <FaPaintBrush className="text-5xl text-indigo-400" />,
    title: "バナー・印刷物制作",
    description: "小さなデザインも高品質で仕上げます。",
    detail: "バナー、フライヤー、メニュー表等を短納期制作。",
  },
  {
    icon: <FaMobileAlt className="text-5xl text-rose-400" />,
    title: "モバイル最適化",
    description: "スマホ・タブレット表示にも完全対応。",
    detail: "どのデバイスでも快適なレスポンシブ設計。",
  },
  {
    icon: <FaGlobe className="text-5xl text-cyan-400" />,
    title: "多言語対応",
    description: "海外ユーザー向けに多言語サイト構築。",
    detail: "日本語・英語・中国語など複数言語切替対応。",
  },
  {
    icon: <FaLock className="text-5xl text-red-400" />,
    title: "セキュリティ強化",
    description: "情報漏洩や改ざん対策もお任せください。",
    detail: "SSL対応、セキュリティ診断、CMS保守まで。",
  },
  {
    icon: <FaRocket className="text-5xl text-fuchsia-400" />,
    title: "高速化対応",
    description: "表示スピード向上で離脱率を削減。",
    detail: "画像最適化・キャッシュ戦略でPageSpeed改善。",
  },
  {
    icon: <FaPenFancy className="text-5xl text-amber-400" />,
    title: "ライティング",
    description: "検索に強い文章を作成します。",
    detail: "SEO意識した記事・ページ文章作成を代行。",
  },
  {
    icon: <FaCog className="text-5xl text-slate-400" />,
    title: "運用・保守",
    description: "公開後も安心の継続サポート。",
    detail: "サイト更新、エラー対応、分析レポート提出など。",
  },
];

const RADIUS = 400;
const CARD_WIDTH = 180;
const CARD_HEIGHT = 320;
const ROTATION_SPEED = 10.0; // もう少しゆっくりに

const CompanySection = () => {
  const [rotation, setRotation] = useState(0);
  const rotationRef = useRef(0);

  // スムーズな自動回転の制御
  useEffect(() => {
    let animationFrameId: number;
    let lastTime = 0;

    const animate = (currentTime: number) => {
      if (lastTime === 0) {
        lastTime = currentTime;
      }

      const deltaTime = currentTime - lastTime;
      lastTime = currentTime;

      rotationRef.current += (ROTATION_SPEED * deltaTime) / 1000;
      setRotation(rotationRef.current);

      animationFrameId = window.requestAnimationFrame(animate);
    };

    animationFrameId = window.requestAnimationFrame(animate);

    return () => {
      if (animationFrameId) {
        window.cancelAnimationFrame(animationFrameId);
      }
    };
  }, []);

  const getCardPosition = (index: number, totalCards: number) => {
    const angle = (index * (360 / totalCards) + rotation) * (Math.PI / 180);
    const x = Math.sin(angle) * RADIUS;
    const z = Math.cos(angle) * RADIUS;
    const scale = (z + RADIUS) / (2 * RADIUS);

    const rotationY = angle * (180 / Math.PI);

    return {
      transform: `
        translate3d(${x}px, 0, ${z}px)
        scale(${scale})
        rotateY(${rotationY}deg)
      `,
      zIndex: Math.floor(scale * 1000),
      opacity: scale * 0.5 + 0.5,
    };
  };

  return (
    <section className="min-h-screen bg-gradient-to-br from-green-100 via-white to-purple-100 py-20 overflow-hidden">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-extrabold text-gray-800 mb-14 text-center">
          私たちのサービス
        </h2>

        <div className="relative h-[700px] perspective-[1200px] flex items-center justify-center">
          <div
            className="relative w-full h-full"
            style={{
              transformStyle: "preserve-3d",
            }}
          >
            {services.map((service, i) => {
              const style = getCardPosition(i, services.length);

              return (
                <div
                  key={i}
                  className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
                  style={{
                    width: CARD_WIDTH,
                    height: CARD_HEIGHT,
                    transformStyle: "preserve-3d",
                    ...style,
                  }}
                >
                  <div
                    className={`
                      w-full h-full
                      bg-white/95
                      backdrop-blur-sm rounded-3xl border border-white/50
                      shadow-[0_8px_32px_rgba(0,0,0,0.1)]
                      flex flex-col items-center p-6
                      hover:shadow-2xl hover:border-white/80
                      relative
                      overflow-hidden
                      [transition:transform_0s,background_0.3s,border_0.3s,shadow_0.3s]
                      hover:bg-gradient-to-br hover:from-purple-400/5 hover:to-green-400/5
                    `}
                    style={{
                      transform: `rotateY(180deg)`,
                      transformStyle: "preserve-3d",
                    }}
                  >
                    {/* 背景の装飾 */}
                    <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-purple-200/20 to-green-200/20 rounded-full blur-2xl transform translate-x-16 -translate-y-16" />
                    <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr from-green-200/20 to-purple-200/20 rounded-full blur-2xl transform -translate-x-16 translate-y-16" />

                    {/* カードコンテンツ */}
                    <div
                      className="relative w-full flex flex-col items-center"
                      style={{
                        transform: `rotateY(180deg)`,
                      }}
                    >
                      {/* アイコン */}
                      <div className="text-5xl text-purple-600 mb-6 transition-colors duration-300">
                        {service.icon}
                      </div>

                      {/* テキストコンテンツ */}
                      <div className="text-center space-y-3">
                        <h3 className="text-xl font-bold text-gray-800">
                          {service.title}
                        </h3>
                        <p className="text-sm text-gray-600 leading-relaxed">
                          {service.description}
                        </p>
                      </div>

                      {/* 詳細を見るボタン */}
                      <div className="mt-auto pt-4">
                        <button className="text-sm text-purple-600 hover:text-purple-700 font-medium transition-colors duration-300">
                          詳しく見る →
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CompanySection;
