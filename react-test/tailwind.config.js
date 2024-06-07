const config = {
  content: [
    // 모든 html 파일 경로 등록
    "./**/*.html",
    "./src/**/*.{html,js}",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        jalnan: ["Jalnan", "san-serif"],
        jalnangothic: ["JalnanGothic"],
      },
    },
  },
  plugins: [],
};
export default config;
