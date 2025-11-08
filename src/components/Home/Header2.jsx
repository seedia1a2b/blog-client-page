import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import mommy from '../../assets/mommy.jpg'
import lenk from '../../assets/lenk.jpg'
import birostar from '../../assets/best.jpg'
import borehole12 from '../../assets/borehole12.jpg'
import borehole10 from '../../assets/borehole10.jpg'
import borehole9 from '../../assets/borehole9.jpg'
import borehole8 from '../../assets/borehole8.jpg'
import borehole2 from '../../assets/borehole2.jpg'
import borehole3 from '../../assets/borehole3.jpg'
import borehole7 from '../../assets/borehole7.jpg'
import featureImage from '../../assets/featureImage.jpg'
import shawer from '../../assets/shawer.jpg'


const ShuffleHero = () => {
  return (
    <section className="w-full px-8 py-12 bg-[url('https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/hero/bg-with-grid.png')] bg-cover bg-center bg-no-repeat grid grid-cols-1 md:grid-cols-2 items-center gap-8">
      <div>
        <span className="block mb-4 text-xs md:text-sm text-indigo-500 font-medium">
          Sidebeh's Drilling Solutions
        </span>
        <h3 className="text-4xl md:text-6xl font-semibold">
          Let's Secure Your <span className="bg-gradient-to-r from-blue-600 via-pink-300 to-indigo-700 bg-clip-text text-transparent">Water</span> Source
        </h3>
        <p className="text-base md:text-lg text-slate-700 my-4 md:my-6">
          We provide professional, reliable borehole drilling for farms, communities, and businesses. Your sustainable water supply is our mission
        </p>
        <button className="bg-indigo-500 text-white font-medium py-2 px-4 rounded transition-all hover:bg-indigo-600 active:scale-95">
          checkout our work
        </button>
      </div>

      <ShuffleGrid />
    </section>
  );
};

const shuffle = (array) => {
  let currentIndex = array.length,
    randomIndex;

  while (currentIndex != 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }

  return array;
};

const squareData = [
  {
    id: 1,
    src: mommy,
  },
  {
    id: 2,
    src: lenk,
  },
  {
    id: 3,
    src: birostar ,
  },
  {
    id: 4,
    src: borehole12,
  },
  {
    id: 5,
    src: featureImage,
  },
  {
    id: 6,
    src: shawer,
  },
  {
    id: 7,
    src: borehole10,
  },
  {
    id: 8,
    src: borehole8,
  },
  {
    id: 9,
    src: borehole9,
  },
  {
    id: 10,
    src: borehole2,
  },
  {
    id: 11,
    src: borehole3,
  },
  {
    id: 12,
    src: borehole7,
  }
];

const generateSquares = () => {
  return shuffle(squareData).map((sq, index) => (
    <motion.div
      key={sq.id}
      layout
      transition={{ duration: 1.5, type: "spring" }}
      className={`w-full h-full ${index === 1 || index === 5 || index === 8 || index === 12 ? 'col-span-2 row-span-2' : ''}`}
      style={{
        backgroundImage: `url(${sq.src})`,
        backgroundSize: "cover",
      }}
    ></motion.div>
  ));
};

const ShuffleGrid = () => {
  const timeoutRef = useRef(null);
  const [squares, setSquares] = useState(generateSquares());

  useEffect(() => {
    shuffleSquares();

    return () => clearTimeout(timeoutRef.current);
  }, []);

  const shuffleSquares = () => {
    setSquares(generateSquares());

    timeoutRef.current = setTimeout(shuffleSquares, 3000);
  };

  return (
    <div className="grid grid-cols-4 grid-rows-4 h-[450px] gap-1 grow rounded-2xl overflow-hidden">
      {squares.map((sq) => sq)}
    </div>
  );
};

export default ShuffleHero;