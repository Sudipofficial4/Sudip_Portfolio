import { Sora } from "next/font/google";
import Head from "next/head";

import Header from "../components/Header";
import Nav from "../components/Nav";
import TopLeftImg from "../components/TopLeftImg";

// setup font
const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sora",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
});

const Layout = ({ children }) => {
  return (
    <main
      className={`page bg-site text-white bg-cover bg-no-repeat ${sora.variable} font-sora relative`}
    >
      {/* metadata */}
      <Head>
        <title>Sudip Koirala | Portfolio</title>
        <meta
          name="description"
          content="Sudip Koirala is a Mobile Application Developer & Web Developer specializing in Flutter, PHP, and Cloud Computing."
        />
        <meta
          name="keywords"
          content="react, next, nextjs, html, css, javascript, js, modern-ui, modern-ux, portfolio, framer-motion, 3d-website, particle-effect"
        />
        <meta name="author" content="Sudip Koirala" />
        <meta name="theme-color" content="#f13024" />
      </Head>

      <TopLeftImg />
      <Nav />
      <Header />

      {/* main content */}
      {children}

      {/* footer */}
      <footer className="fixed bottom-0 left-0 right-0 z-50 bg-black/20 backdrop-blur-sm border-t border-white/10">
        <div className="container mx-auto py-2 px-4">
          <p className="text-center text-xs text-white/70">
            Powered By{" "}
            <span className="text-accent font-semibold">Sudip Koirala</span>
            {" "} | All Rights Reserved To{" "}
            <span className="text-accent font-semibold">Sudip Koirala</span>
          </p>
        </div>
      </footer>
    </main>
  );
};

export default Layout;
