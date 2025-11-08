import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { FiArrowUpRight } from "react-icons/fi";
import featureImage from '../../assets/featureImage.jpg'
import manager4 from '../../assets/manager4.jpg'
import jack from '../../assets/jack2.jpg'

export const TextParallaxContentExample = () => {
  return (
    <div className="bg-white pt-10 sm:max-w-[80%] mx-auto">
      <div className="flex items-center justify-center gap-2 py-4">
        <div className="h-1 w-10 bg-black"></div>
        <h1 className="text-4xl xl:text-5xl text-center font-bold">About Us</h1>
        <div className="h-1 w-10 bg-black"></div>
      </div>
      <p className="text-center mx-auto text-gray-700 pb-5 leading-5 max-w-md"> As a leading borehole drilling company, we specialize in delivering sustainable water solutions that empower communities, support agriculture, and drive development across The Gambia and beyond</p>
      <TextParallaxContent
        imgUrl={featureImage}
        subheading="Best of best"
        heading="Community Drinage System"
      >
        <ExampleContent title={'Drilling for Life: Water, Hope, and Future.'} summary={'Specializing in community-focused borehole drilling, we provide reliable and lasting water solutions. Our expert team is committed to empowering communities by delivering the essential resource needed for health, agriculture, and prosperity'} description={'We do more than just drill boreholes; we unearth potential. Every project is a partnership with the community, bringing sustainable access to clean water that transforms lives, nourishes crops, and builds a brighter tomorrow'} />
      </TextParallaxContent>
      <TextParallaxContent
        imgUrl={manager4}
        subheading="Expert"
        heading="Borhole Drilling"
      >
        <ExampleContent summary={'As a leading borehole drilling company, we guarantee professional service from initial survey to final installation. We pride ourselves on efficiency, safety, and delivering high-quality water wells that stand the test of time'} description={'When it comes to water, you can\'t afford to guess. Our team uses state-of-the-art technology and geological expertise to ensure a successful and sustainable water source. We handle the toughest challenges so you can have peace of mind.'} title={'Your Trusted Drilling Partner'}/>
      </TextParallaxContent>
      <TextParallaxContent
        imgUrl={jack}
        subheading="Seedia Nyassi"
        heading="Software Engineer"
      >
        <ExampleContent summary={'Crafting a digital experience for a company that drills for life'}  description={'In my work for this borehole drilling company, my goal was to build more than just a website; it was to tell a story of hope and transformation. By creating a clean, engaging, and informative platform, I helped amplify their mission, demonstrating how thoughtful web development can support essential services that make a tangible difference in the world'} title={'Full-Stack Developer @Jackspear'}/>
      </TextParallaxContent>
    </div>
  );
};

const IMG_PADDING = 12;

const TextParallaxContent = ({ imgUrl, subheading, heading, children }) => {
  return (
    <div
      style={{
        paddingLeft: IMG_PADDING,
        paddingRight: IMG_PADDING,
      }}
    >
      <div className="relative h-[150vh]">
        <StickyImage imgUrl={imgUrl} />
        <OverlayCopy heading={heading} subheading={subheading} />
      </div>
      {children}
    </div>
  );
};

const StickyImage = ({ imgUrl }) => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["end end", "end start"],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.85]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  return (
    <motion.div
      style={{
        backgroundImage: `url(${imgUrl})`,
        backgroundSize: "cover",
        backgroundPosition: "top",
        height: `calc(100vh - ${IMG_PADDING * 2}px)`,
        top: IMG_PADDING,
        scale,
      }}
      ref={targetRef}
      className="sticky z-0 overflow-hidden rounded-3xl"
    >
      <motion.div
        className="absolute inset-0 bg-neutral-950/70"
        style={{
          opacity,
        }}
      />
    </motion.div>
  );
};

const OverlayCopy = ({ subheading, heading }) => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [250, -250]);
  const opacity = useTransform(scrollYProgress, [0.25, 0.5, 0.75], [0, 1, 0]);

  return (
    <motion.div
      style={{
        y,
        opacity,
      }}
      ref={targetRef}
      className="absolute left-0 top-0 flex h-screen w-full flex-col items-center justify-center text-white"
    >
      <p className="mb-2 text-center text-xl md:mb-4 md:text-3xl">
        {subheading}
      </p>
      <p className="text-center text-4xl font-bold md:text-7xl">{heading}</p>
    </motion.div>
  );
};

const ExampleContent = ({title, description, summary}) => (
  <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 px-4 pb-24 pt-12 md:grid-cols-12">
    <h2 className="col-span-1 text-3xl font-bold md:col-span-4">
      {title}
    </h2>
    <div className="col-span-1 md:col-span-8">
      <p className="mb-4 text-xl text-neutral-600 md:text-2xl">
        {description}
      </p>
      <p className="mb-8 text-xl text-neutral-600 md:text-2xl">
        {summary}
      </p>
      <button className="w-full rounded bg-neutral-900 px-9 py-4 text-xl text-white transition-colors hover:bg-neutral-700 md:w-fit">
        Learn more <FiArrowUpRight className="inline" />
      </button>
    </div>
  </div>
);