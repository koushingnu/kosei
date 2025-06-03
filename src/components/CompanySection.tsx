"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaCode, FaInstagram, FaChartBar, FaLightbulb,
  FaCamera, FaPaintBrush, FaMobileAlt, FaGlobe,
  FaLock, FaRocket, FaPenFancy, FaCog
} from "react-icons/fa";

const services = [
  {
    icon: <FaCode className="text-5xl text-purple-400" />,
    title: "Webサイト制作",
    description: "スマホ対応、予約フォーム付きの構築を実現。",
    detail: "Next.jsやWordPressを使い、集客・管理しやすいサイトを設計します。",
  },
  {
    icon: <FaInstagram className="text-5xl text-pink-400" />,
    title: "SNS運用代行",
    description: "Instagram/Xの投稿や返信も丸ごとお任せ。",
    detail: "投稿スケジュール、反応分析、戦略立案まで一括して対応します。",
  },
  {
    icon: <FaChartBar className="text-5xl text-green-400" />,
    title: "口コミ分析",
    description: "レビューや感想を分析し改善に活かします。",
    detail: "Googleレビューや食べログなどからユーザーの声を抽出・視覚化します。",
  },
  {
    icon: <FaLightbulb className="text-5xl text-yellow-400" />,
    title: "改善提案",
    description: "ヒアリングを元に現状改善プランをご提案。",
    detail: "UI改善、導線整理、SEO強化など課題に応じたアクションを設計します。",
  },
  {
    icon: <FaCamera className="text-5xl text-blue-400" />,
    title: "撮影サービス",
    description: "SNS・Web用の写真や動画を撮影＆編集。",
    detail: "プロ用機材での撮影から編集納品までワンストップ対応します。",
  },
  {
    icon: <FaPaintBrush className="text-5xl text-indigo-400" />,
    title: "バナー・印刷物制作",
    description: "小さなデザインも高品質で仕上げます。",
    detail: "広告バナー、フライヤー、メニュー表などを短納期で制作します。",
  },
  {
    icon: <FaMobileAlt className="text-5xl text-rose-400" />,
    title: "モバイル最適化",
    description: "スマホ・タブレット表示にも完全対応。",
    detail: "レスポンシブ設計でどのデバイスでも快適な表示を実現します。",
  },
  {
    icon: <FaGlobe className="text-5xl text-cyan-400" />,
    title: "多言語対応",
    description: "海外ユーザー向けに多言語サイト構築。",
    detail: "日本語・英語・中国語など複数言語への翻訳・切り替えを実装します。",
  },
  {
    icon: <FaLock className="text-5xl text-red-400" />,
    title: "セキュリティ強化",
    description: "情報漏洩や改ざん対策もお任せください。",
    detail: "SSL対応、セキュリティ診断、CMS保守まで対応します。",
  },
  {
    icon: <FaRocket className="text-5xl text-fuchsia-400" />,
    title: "高速化対応",
    description: "表示スピード向上で離脱率を削減。",
    detail: "画像最適化・キャッシュ戦略などでPageSpeedを改善します。",
  },
  {
    icon: <FaPenFancy className="text-5xl text-amber-400" />,
    title: "ライティング",
    description: "検索に強い文章を作成します。",
    detail: "SEOを意識した記事・ページ文章の作成を代行します。",
  },
  {
    icon: <FaCog className="text-5xl text-slate-400" />,
    title: "運用・保守",
    description: "公開後も安心の継続サポート。",
    detail: "サイト更新、エラー対応、分析レポート提出など保守運用も可能です。",
  },
];

const CARD_COUNT = services.length;
const CARD_WIDTH = 200;
const CARD_HEIGHT = 300;
const RADIUS = 430;

const CompanySection = () => {
  // 中央に来るカードのインデックスのみ持つ
  const [centerIdx, setCenterIdx] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  const intervalRef = useRef<NodeJS.Timeout>();

  // 自動回転：indexを進めるだけ（1.2秒ごとに1枚進む）
  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setCenterIdx(idx => (idx + 1) % CARD_COUNT);
    }, 1200);
    return () => clearInterval(intervalRef.current);
  }, []);

  // 左右手動回転
  const rotateLeft = () =>
    setCenterIdx(idx => (idx - 1 + CARD_COUNT) % CARD_COUNT);
  const rotateRight = () =>
    setCenterIdx(idx => (idx + 1) % CARD_COUNT);

  return (
    <section className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-green-100 via-white to-purple-100 py-20 overflow-hidden">
      <h2 className="text-4xl md:text-5xl font-extrabold text-gray-800 mb-14 text-center">私たちのサービス</h2>
      <div className="relative flex items-center justify-center w-full" style={{ minHeight: 480 }}>
        {/* 左右ボタン */}
        <button
          onClick={rotateLeft}
          className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white/90 border border-purple-200 shadow px-4 py-4 rounded-full hover:bg-purple-100 hover:scale-110 transition"
          aria-label="左に回す"
        >
          <span className="text-2xl font-bold text-purple-500">‹</span>
        </button>
        <button
          onClick={rotateRight}
          className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white/90 border border-purple-200 shadow px-4 py-4 rounded-full hover:bg-purple-100 hover:scale-110 transition"
          aria-label="右に回す"
        >
          <span className="text-2xl font-bold text-purple-500">›</span>
        </button>
        {/* 3Dホイール本体 */}
        <div
          className="relative mx-auto"
          style={{
            width: 2 * RADIUS,
            height: 480,
            perspective: "1800px",
            perspectiveOrigin: "50% 50%",
          }}
        >
          <div
            className="absolute left-1/2 top-1/2"
            style={{
              width: 0,
              height: 0,
              // 1枚ごとにピタッと回転
              transform: `translate(-50%, -50%) rotateY(${-(
                (360 / CARD_COUNT) *
                centerIdx
              )}deg)`,
              transformStyle: "preserve-3d",
              transition: "transform 0.22s cubic-bezier(.83,1.7,.75,1.01)", // カクッと
            }}
          >
            {services.map((service, i) => {
              const cardAngle = (360 / CARD_COUNT) * i;
              const isCenter = i === centerIdx;
              return (
                <div
                  key={i}
                  style={{
                    position: "absolute",
                    left: "50%",
                    top: "50%",
                    width: CARD_WIDTH,
                    height: CARD_HEIGHT,
                    transform: `
                      rotateY(${cardAngle}deg)
                      translateZ(${RADIUS}px)
                      translateX(-50%) translateY(-50%)
                    `,
                    zIndex: isCenter ? 10 : 1,
                    filter: isCenter
                      ? "brightness(1.08) drop-shadow(0 8px 36px rgba(80,0,160,0.13))"
                      : "brightness(0.82) blur(0.5px)",
                    opacity: isCenter ? 1 : 0.75,
                    transition: "all 0.17s cubic-bezier(.7,1.4,.7,1)",
                    cursor: isCenter ? "pointer" : "default",
                    pointerEvents: isCenter ? "auto" : "none", // 中央のみクリック可
                  }}
                  onClick={() => isCenter && setSelected(i)}
                >
                  <div
                    className={`bg-white/90 shadow-xl rounded-2xl p-7 flex flex-col items-center text-center border border-white/70 transition-all duration-200 ${
                      isCenter
                        ? "scale-110 ring-4 ring-purple-200"
                        : "scale-95"
                    }`}
                    style={{
                      width: CARD_WIDTH,
                      height: CARD_HEIGHT,
                    }}
                  >
                    {service.icon}
                    <h3 className="text-xl font-bold text-gray-900 mt-5 mb-2">
                      {service.title}
                    </h3>
                    <p className="text-gray-700 text-sm">
                      {service.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      {/* モーダル */}
      <AnimatePresence>
        {selected !== null && (
          <motion.div
            key="modal"
            initial={{ opacity: 0, scale: 0.7 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ type: "spring", stiffness: 300, damping: 24 }}
            className="fixed inset-0 z-50 bg-black/50 backdrop-blur flex items-center justify-center"
            onClick={() => setSelected(null)}
            style={{ perspective: "1000px" }}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ type: "spring", stiffness: 200, damping: 22 }}
              onClick={e => e.stopPropagation()}
              className="bg-white rounded-xl p-10 max-w-md w-full shadow-xl"
            >
              <div className="text-center">
                {services[selected].icon}
                <h3 className="text-2xl font-bold text-gray-800 mt-4 mb-2">
                  {services[selected].title}
                </h3>
                <p className="text-gray-700 text-base">
                  {services[selected].detail}
                </p>
                <button
                  onClick={() => setSelected(null)}
                  className="mt-6 px-6 py-2 bg-purple-500 text-white rounded-full hover:bg-purple-600 transition"
                >
                  閉じる
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default CompanySection;
