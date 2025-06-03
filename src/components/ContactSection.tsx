import React from "react";

const ContactSection = () => {
  return (
    <section
      id="contact"
      className="min-h-screen bg-gradient-to-bl from-green-300 to-purple-300 flex items-center justify-center px-4 py-10"
    >
      <div className="w-full max-w-xl bg-white/80 backdrop-blur p-8 rounded-2xl shadow-md">
        <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">
          お問い合わせ
        </h2>

        <form className="space-y-4">
          <div>
            <label className="block text-gray-700 text-sm font-medium mb-1">
              お名前
            </label>
            <input
              type="text"
              name="name"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-400"
              placeholder="山田 太郎"
            />
          </div>

          <div>
            <label className="block text-gray-700 text-sm font-medium mb-1">
              メールアドレス
            </label>
            <input
              type="email"
              name="email"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-400"
              placeholder="example@example.com"
            />
          </div>

          <div>
            <label className="block text-gray-700 text-sm font-medium mb-1">
              お問い合わせ内容
            </label>
            <textarea
              name="message"
              rows={5}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-400"
              placeholder="ご質問・ご相談などお気軽にどうぞ"
            ></textarea>
          </div>

          <div className="text-center pt-4">
            <button
              type="submit"
              className="bg-purple-500 hover:bg-purple-600 text-white font-medium py-2 px-6 rounded-full transition"
            >
              送信する
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default ContactSection;
