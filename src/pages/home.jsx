import { FiMoreVertical } from "react-icons/fi";
import { useState } from "react";
import { motion } from "framer-motion";
import logo from "../assets/NTFPerxs.png";
import wallpaperPattern from "../assets/WallpaperBlur.svg";
 import online from "../assets/Online.svg";
 import { ReactSVG } from "react-svg";

function Home() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div
      className="w-screen h-screen absolute inset-0 bg-[#0e0915] z-[-1]"
      style={{
        backgroundImage: `url(${wallpaperPattern})`,
        backgroundRepeat: "repeat",
        backgroundSize: "cover",
      }}
    >
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 20 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.2 }}
          className="absolute top-0 right-0 mt-12 mr-4 bg-[#171020] p-7 rounded shadow"
        >
          <ul className="flex flex-col space-y-2 text-gray-200 text-xl font-semibold">
            <li>Home</li>
            <li className="mb-2">About</li>
            <li className="mb-2">Why</li>
            <li className="mb-2">Us</li>
          </ul>
        </motion.div>
      )}
      <img className="w-44 p-3 md:w-48 lg:w-52" src={logo} alt="logo" />
      <div className="absolute top-0 right-0 mt-2">
        <button className="text-white" onClick={toggleMenu}>
          <FiMoreVertical size={28} className="m-5" />
        </button>
      </div>
      <form className="mx-10 my-5 bg-[#2b2f49] rounded-xl bg-clip-padding backdrop-filter backdrop-blur-md border-gray-600 text-gray-50 opacity-50 flex items-center">
        <motion.svg
          initial={{ scale: 0 }}
          animate={{ rotate: 45, scale: 1 }}
          transition={{
            type: "spring",
            stiffness: 150,
            damping: 20,
          }}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-28 h-28 rotate-45 p-2"
        >
          <path
            fillRule="evenodd"
            d="M1.5 6.375c0-1.036.84-1.875 1.875-1.875h17.25c1.035 0 1.875.84 1.875 1.875v3.026a.75.75 0 01-.375.65 2.249 2.249 0 000 3.898.75.75 0 01.375.65v3.026c0 1.035-.84 1.875-1.875 1.875H3.375A1.875 1.875 0 011.5 17.625v-3.026a.75.75 0 01.374-.65 2.249 2.249 0 000-3.898.75.75 0 01-.374-.65V6.375zm15-1.125a.75.75 0 01.75.75v.75a.75.75 0 01-1.5 0V6a.75.75 0 01.75-.75zm.75 4.5a.75.75 0 00-1.5 0v.75a.75.75 0 001.5 0v-.75zm-.75 3a.75.75 0 01.75.75v.75a.75.75 0 01-1.5 0v-.75a.75.75 0 01.75-.75zm.75 4.5a.75.75 0 00-1.5 0V18a.75.75 0 001.5 0v-.75zM6 12a.75.75 0 01.75-.75H12a.75.75 0 010 1.5H6.75A.75.75 0 016 12zm.75 2.25a.75.75 0 000 1.5h3a.75.75 0 000-1.5h-3z"
            clipRule="evenodd"
          />
        </motion.svg>
        <p className="ml-4 text-left font-semibold text-xl mr-2">
          Collect Coupons
          <br />
          Embrace Blockchain
        </p>
      </form>
      <button className="bg-[#3b3355] hover:bg-[#352e4a] text-white font-semibold py-2 px-4 rounded-xl">
        Get Started
      </button>

      <h1 className="text-gray-300 font-semibold text-2xl mt-5">About</h1>
      <form className="mx-10 my-5 bg-[#2b2f49] rounded-xl bg-clip-padding backdrop-filter backdrop-blur-md border-gray-600 text-gray-50 opacity-60 flex items-center">
        <motion.p
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="ml-4 text-center font-semibold text-base mr-2 py-5 pr-1"
        >
          Discover a revolutionary way to save with our blockchain-powered NFT
          coupon platform. Explore a curated selection of exclusive discounts
          and offers, all securely stored on the blockchain. Start maximizing
          your savings today!
        </motion.p>
      </form>
      <h1 className="text-gray-300 font-semibold text-2xl mt-5">Why</h1>
      <form className="mx-10 my-5 bg-[#2b2f49] rounded-xl bg-clip-padding backdrop-filter backdrop-blur-md border-gray-600 text-gray-50 opacity-60 flex items-center">
        <motion.p
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="ml-4 text-center font-semibold text-base mr-2 py-5 pr-1"
        >
          Discover the power of blockchain technology and revolutionize your
          savings experience with our exclusive coupon platform
        </motion.p>
      </form>
    </div>
  );
}

export default Home;
