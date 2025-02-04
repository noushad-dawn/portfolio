import React from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";

const Laptop = () => {
  const { scene } = useGLTF("./laptop-model.glb"); // Replace with your GLTF/GLB model path
  return <primitive object={scene} />;
};

const Home = () => {
  return (
    <div className="flex flex-col md:flex-row items-start justify-between min-h-screen px-24 bg-white text-black pt-16">
      <section
        id="home"
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center w-full"
      >
        {/* Left Side: Text */}
        <div className="space-y-6 md:w-1/2">
          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            <span className="block">Hi,</span>
            <span className="block">
              My name is{" "}
              <span className="text-black border-b-4 border-gray-500">
                Mohammad Noushad
              </span>
            </span>
          </h1>
          <p className="text-lg md:text-xl text-gray-700">
            I am a web developer passionate about creating scalable, responsive,
            and visually appealing web applications. Let's build something
            amazing together!
          </p>
        </div>

       {/* Right Side: Image with Hover Effect */}
<div className="mt-8 md:mt-0 md:w-1/2 flex justify-center items-center">
  <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-black transform transition duration-300 hover:scale-105 hover:shadow-lg">
    <img
      src="./assets/myimage.jpg"
      alt="Mohammad Noushad"
      className="w-full h-full object-cover grayscale hover:grayscale-0 transition duration-300"
    />
  </div>
</div>

      </section>
    </div>
  );
};

export default Home;
