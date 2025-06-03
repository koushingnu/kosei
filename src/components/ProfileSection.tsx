import React from "react";
import Image from "next/image";
import { FaXTwitter, FaInstagram, FaGithub } from "react-icons/fa6";

const members = [
  {
    name: "こーしんぬ",
    role: "データサイエンティスト／技術担当",
    image: "/profile1.jpg",
    description:
      "サイト作成から口コミデータの管理・分析まで幅広く対応。成果にこだわった提案をします。",
    twitter: "https://twitter.com/username1",
    instagram: "https://instagram.com/username1",
    github: "https://github.com/username1",
  },
  {
    name: "デスティー",
    role: "営業・SNS運用担当",
    image: "/profile2.jpg",
    description:
      "ヒアリングを通して、お客様の“本当に伝えたいこと”を形にします。SNSや動画も対応可能！",
    twitter: "https://twitter.com/username2",
    instagram: "https://instagram.com/username2",
    github: "https://github.com/username2",
  },
  {
    name: "こうせい",
    role: "情熱担当",
    image: "/profile3.jpg",
    description:
      "まだまだ勉強中ですが「いいものをつくりたい」気持ちは誰にも負けません！全力でサポートします！",
    twitter: "https://twitter.com/username3",
    instagram: "https://instagram.com/username3",
    github: "https://github.com/username3",
  },
  {
    name: "としき",
    role: "デザイナー／マルチクリエイター",
    image: "/profile4.jpg",
    description:
      "シンプルで伝わるデザインが得意です。紙・動画・SNSデザインも一通り対応します！",
    twitter: "https://twitter.com/username4",
    instagram: "https://instagram.com/username4",
    github: "https://github.com/username4",
  },
];

const ProfileSection = () => {
  return (
    <section className="min-h-screen bg-gradient-to-br from-purple-300 to-green-300 flex items-center justify-center px-4 py-10"
    id="about">
      <div className="max-w-7xl w-full text-center">
        <h2 className="text-4xl font-bold text-white mb-12">メンバー紹介</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8">
          {members.map((member, index) => (
            <div
              key={index}
              className="bg-white/80 backdrop-blur p-8 rounded-2xl shadow-md text-center"
            >
              <Image
                src={member.image}
                alt={`${member.name}の写真`}
                width={128}
                height={128}
                className="mx-auto w-32 h-32 rounded-full object-cover mb-4 shadow"
              />
              <h3 className="text-2xl font-semibold text-gray-800 mb-1">
                {member.name}
              </h3>
              <p className="text-sm text-gray-600 mb-4">{member.role}</p>
              <p className="text-gray-700 text-sm mb-4 leading-relaxed">
                {member.description}
              </p>
              <div className="flex justify-center gap-4 text-2xl">
                <a href={member.twitter} target="_blank" rel="noreferrer" className="text-gray-600 hover:text-blue-500">
                  <FaXTwitter />
                </a>
                <a href={member.instagram} target="_blank" rel="noreferrer" className="text-gray-600 hover:text-pink-500">
                  <FaInstagram />
                </a>
                <a href={member.github} target="_blank" rel="noreferrer" className="text-gray-600 hover:text-gray-800">
                  <FaGithub />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProfileSection;
