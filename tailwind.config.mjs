import typography from "@tailwindcss/typography";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: "#2563EB",
          dark: "#1D4ED8",
          soft: "#DBEAFE"
        },
        ink: "#1F2937",
        surface: "#F9FAFB"
      },
      boxShadow: {
        soft: "0 10px 30px rgba(37, 99, 235, 0.08)",
        card: "0 12px 24px rgba(15, 23, 42, 0.06)"
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"]
      },
      backgroundImage: {
        "hero-grid":
          "radial-gradient(circle at top left, rgba(37, 99, 235, 0.14), transparent 36%), linear-gradient(180deg, rgba(249, 250, 251, 0.9), rgba(255, 255, 255, 1))"
      }
    }
  },
  plugins: [typography]
};
