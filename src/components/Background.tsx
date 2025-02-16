import React from "react";
import {
  motion,
  AnimatePresence,
  useAnimationControls,
  AnimationDefinition,
} from "framer-motion";

const NoiseSVG = () => (
  <svg
    className="absolute inset-0 w-full h-full opacity-50"
    xmlns="http://www.w3.org/2000/svg"
  >
    <filter id="noise">
      <feTurbulence
        type="fractalNoise"
        baseFrequency="19.5"
        numOctaves="10"
        result="turbulence"
      />
      <feComposite
        operator="in"
        in="turbulence"
        in2="SourceAlpha"
        result="composite"
      />
      <feColorMatrix in="composite" type="luminanceToAlpha" />
      <feBlend in="SourceGraphic" in2="composite" mode="color-burn" />
    </filter>
    <rect width="100%" height="100%" fill="gray" filter="url(#noise)" />
  </svg>
);

interface BlobProps {
  color: string;
  width: string;
  height: string;
  position: object;
  customTransition: object;
  customAnimate: AnimationDefinition;
}

const Blob: React.FC<BlobProps> = ({
  color,
  width,
  height,
  position,
  customTransition,
  customAnimate,
}) => {
  const controls = useAnimationControls();

  React.useEffect(() => {
    controls.start(customAnimate);
  }, [controls, customAnimate]);

  return (
    <motion.div
      className="absolute rounded-[40%_60%_70%_50%] mix-blend-difference blur-[50px]"
      style={{
        backgroundColor: color,
        width,
        height,
        ...position,
        willChange: "transform", // Optimize for animations
      }}
      initial={{ opacity: 0 }}
      animate={controls}
      transition={{
        ...customTransition,
        ease: [0.4, 0.0, 0.2, 1], // Smooth easing
        opacity: { duration: 1 },
      }}
    />
  );
};

interface AnimatedBackgroundProps {
  className?: string;
  children?: React.ReactNode;
}

const AnimatedBackground: React.FC<AnimatedBackgroundProps> = ({
  className = "",
  children,
}) => {
  const blobs = [
    {
      color: "#0C8CE9",
      width: "850px",
      height: "550px",
      position: { bottom: "50%", left: "-5%" },
      customTransition: {
        duration: 15,
        repeat: Number.POSITIVE_INFINITY,
        repeatType: "reverse",
        times: [0, 0.5, 1],
      },
      customAnimate: {
        opacity: 1,
        scale: [1, 0.9, 1],
        x: [0, 140, 100],
        y: [0, 50, 0],
        width: ["850px", "70%", "40%"],
        height: ["550px", "90%", "80%"],
      },
    },
    {
      color: "#0A3EBC",
      width: "300px",
      height: "400px",
      position: { top: "40%", left: "50%" },
      customTransition: {
        duration: 15,
        repeat: Number.POSITIVE_INFINITY,
        repeatType: "reverse",
        times: [0, 0.5, 1],
      },
      customAnimate: {
        opacity: 1,
        scale: [1, 1.2, 1],
        x: [0, -100, -800],
        y: [0, 150, 250],
        width: ["300px", "50%", "90%"],
        height: ["400px", "100%", "100%"],
      },
    },
    {
      color: "#78D6D5",
      width: "450px",
      height: "300px",
      position: { top: "50%", right: "70%" },
      customTransition: {
        duration: 20,
        repeat: Number.POSITIVE_INFINITY,
        repeatType: "reverse",
        times: [0, 0.5, 1],
      },
      customAnimate: {
        opacity: 1,
        scale: [1, 0.9, 1],
        x: [0, 20, 100],
        y: [0, -150, 50],
        width: ["450px", "90%", "80%"],
        height: ["300px", "60%", "100%"],
        backgroundColor: ["#78D6D5", "#10378D", "#0C8CE9"],
      },
    },
    {
      color: "#1871A2",
      width: "500px",
      height: "650px",
      position: { bottom: "30%", right: "-10%" },
      customTransition: {
        duration: 25,
        repeat: Number.POSITIVE_INFINITY,
        repeatType: "reverse",
        times: [0, 0.5, 1],
      },
      customAnimate: {
        opacity: 1,
        scale: [1, 0.9, 1],
        x: [0, -100, 100],
        y: [0, 0, 50],
        width: ["500px", "100%", "80%"],
        height: ["650px", "60%", "100%"],
        backgroundColor: ["#1871A2", "#1871A2", "#10378D"],
      },
    },
    {
      color: "#10378D",
      width: "900px",
      height: "450px",
      position: { bottom: "10%", right: "-10%" },
      customTransition: {
        duration: 25,
        repeat: Number.POSITIVE_INFINITY,
        repeatType: "reverse",
        times: [0, 0.25, 0.5, 0.75, 1],
      },
      customAnimate: {
        opacity: 1,
        scale: [1, 1.1, 0.9, 1.2, 1],
        x: [0, 50, -100, 100, -50],
        y: [0, -50, 100, -150, 150],
        width: ["900px", "90%", "50%", "75%", "100%"],
        height: ["450px", "450px", "450px", "450px", "90%"],
      },
    },
  ];

  return (
    <div
      className={`fixed inset-0 flex justify-center items-center bg-[#0C1015] overflow-hidden ${className}`}
      style={{ perspective: "1000px" }} // Add perspective for better performance
    >
      <AnimatePresence>
        {blobs.map((blob, index) => (
          <Blob key={index} {...blob} />
        ))}
      </AnimatePresence>
      <div className="fixed inset-0 z-10 mix-blend-overlay pointer-events-none">
        <NoiseSVG />
      </div>
      {children && <div className="relative z-20">{children}</div>}
    </div>
  );
};

export default AnimatedBackground;
