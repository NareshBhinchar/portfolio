"use client";
import { useEffect, useRef } from "react";
import Typed from "typed.js";
import Image from "next/image";
import { FaReact, FaNodeJs, FaJs, FaCss3Alt, FaHtml5, FaGithub } from "react-icons/fa";
import { SiNextdotjs } from "react-icons/si";
import { SiTailwindcss } from "react-icons/si";
import { BsBootstrap } from "react-icons/bs";
import Link from "next/link";

const projects = [
  {
    title: "figma clone",
    description:
      "I recently developed a Figma clone with a fully responsive and clean UI.",
    image: "/images/project-1.png",
    link: "https://figma-smoky-eight.vercel.app",
  },
  {
    title: "Movie App",
    description: "  I have recently built a Movie App in React.js that fetches data from an API.",
    image: "/images/project-2.png",
    link: "https://movie-app-seven-tau-54.vercel.app",
  },
  {
    title: "Weather App",
    description: "Built a responsive Weather App with React.js, integrating the OpenWeather API to display live temperature, humidity, and weather conditions for any city..",
    image: "/images/project-3.png",
    link: "https://weather-app-three-chi-19.vercel.app",
  },
  {
    title: "Mini E-Commerce",
    description: "Developed a mini e-commerce website with modern UI/UX using React.js and Tailwind CSS. This project includes product listings, search and filter options, and cart management.",
    image: "/images/project-4.png",
    link: "https://mini-ecomes.vercel.app",
  },

  {
    title: "Portfolio Website",
    description: "Personal portfolio built using Next.js and Tailwind CSS.",
    image: "/images/portfolio.png",
    link: "https://portfolio-lovat-omega-crtqkjv8wm.vercel.app/",
  },
];

export default function Home() {
  const el = useRef(null);
  const typed = useRef(null);

  useEffect(() => {
    typed.current = new Typed(el.current, {
      strings: ["Full Stack Developer,", "MERN Stack Developer"],
      typeSpeed: 50,
      backSpeed: 30,
      backDelay: 1000,
      loop: true,
    });

    return () => {
      // Destroy instance on unmount
      typed.current.destroy();
    };
  }, []);

  return (
    <>
      <div>

        <section className="">
          <div className="flex flex-col lg:flex lg:flex-row max-w-[1320px] mx-auto lg:mt-15">
            <div className=" lg:w-full relative h-auto flex items-center justify-center">

              <div className="">
                <div className="">
                  <h1 className="text-4xl text-center text-[green] mt-10 font-[600]">Welcome to My Portfolio</h1>
                  <h2 className="text-center text-3xl lg:px-40 font-bold px-[30px] mt-5">
                    Hi My name is <span className="text-[#00bcff]"> Naresh </span> and I am a Passionate
                  </h2>
                  <div className="w-full text-center ">
                    <span
                      ref={el}
                      className="text-4xl font-semibold text-[hsl(269,47%,33%)] mx-auto  mt-4"
                    ></span>
                  </div>



                  <div className="flex justify-center mt-10">
                    <button className="bg-[#6bc06b] text-white px-5 py-2 rounded cursor-pointer">
                      <a href="/resuma/naresh.pdf" download="Naresh_Resume.pdf">
                        Resume Download
                      </a>
                    </button>
                    <button className="bg-[#6bc06b] text-white px-5 py-2 rounded ms-3 cursor-pointer">
                      <a href="https://github.com/NareshBhinchar" target="_blank" rel="noopener noreferrer">
                        Github
                      </a>
                    </button>
                  </div>
                </div>
                {/* Hi My name is Naresh and I am a Passionate  */}
              </div>
            </div>
            <div className="  w-full  hidden lg:block ">
              <img
                src="/images/img-1.png"
                alt="Full Stack Developer"
                className="w-[70%] mx-auto"
              />
            </div>
          </div>
        </section>

        <section className=" mt-15 lg:mt-13 bg-[#b8c7ec] pt-3 pb-20 ">
          <div className="max-w-[1320px] mx-auto px-5">
            <div className="">
              <h2 className="text-3xl font-bold text-center ">Technologies</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-10  text-5xl text-blue-500 justify-items-center  box-shadow mt-10">
                <div className=" w-full shadow  p-5 rounded bg-[#acbce2]">
                  <div className="flex">
                    <FaHtml5
                      title="HTML5"
                      className="text-orange-500 text-7xl mb-2 "
                    />
                    <p className="text-center ms-5 text-orange-500">HTML5</p>
                  </div>

                  <div className="h-0.5  relative mt-5">
                    <div className="absolute top-[-15] left-0 w-[100%] h-2 rounded-2xl bg-orange-500 animate-pulse"></div>
                  </div>
                </div>

                <div className=" w-full shadow  p-5 rounded bg-[#acbce2]">
                  <div className="flex">
                    <FaCss3Alt
                      title="CSS3"
                      className="text-blue-600 text-7xl"
                    />
                    <p className="text-center ms-5">css</p>
                  </div>

                  <div className="h-0.5  relative mt-5">
                    <div className="absolute top-[-8] left-0 w-[100%] h-2 rounded-2xl bg-[blue] animate-pulse"></div>
                  </div>
                </div>

                <div className=" w-full shadow  p-5 rounded bg-[#acbce2]">
                  <div className="flex">
                    <FaJs
                      title="JavaScript"
                      className="text-yellow-500 text-7xl"
                    />
                    <p className="text-center ms-5 text-yellow-500">
                      JavaScript
                    </p>
                  </div>

                  <div className="h-0.5  relative mt-5">
                    <div className="absolute top-[-8] left-0 w-[70%] h-2 rounded-2xl bg-yellow-500 animate-pulse"></div>
                  </div>
                </div>

                <div className=" w-full lg:mt-10 shadow  p-5 rounded bg-[#acbce2]">
                  <div className="flex">
                    <FaNodeJs title="Node.js" className="text-7xl" />
                    <p className="text-center ms-5 text-[#2b7fff]">Node.js</p>
                  </div>

                  <div className="h-0.5  relative mt-5">
                    <div className="absolute top-[-8] left-0 w-[70%] h-2 rounded-2xl bg-[#2b7fff] animate-pulse"></div>
                  </div>
                </div>

                <div className=" w-full lg:mt-10 shadow  p-5 rounded bg-[#acbce2]">
                  <div className="flex">
                    <FaReact title="React.js" className="text-7xl" />
                    <p className="text-center ms-5 text-[#2b7fff]">React.js</p>
                  </div>

                  <div className="h-0.5  relative mt-5">
                    <div className="absolute top-[-8] left-0 w-[70%] h-2 rounded-2xl bg-[#2b7fff] animate-pulse"></div>
                  </div>
                </div>

                <div className=" w-full lg:mt-10 shadow  p-5 rounded bg-[#acbce2]">
                  <div className="flex">
                    <SiNextdotjs
                      className="text-black text-7xl"
                      title="Next.js"
                    />
                    <p className="text-center ms-5 text-[black]">Next.js</p>
                  </div>

                  <div className="h-0.5  relative mt-5">
                    <div className="absolute top-[-8] left-0 w-[80%] h-2 rounded-2xl bg-[black] animate-pulse"></div>
                  </div>
                </div>

                <div className=" w-full lg:mt-10 shadow  p-5 rounded bg-[#acbce2]">
                  <div className="flex items-center">
                    <SiTailwindcss
                      className="text-sky-400 text-7xl"
                      title="Tailwind CSS"
                    />
                    <p className="text-center ms-3 text-sky-400">
                      Tailwind CSS
                    </p>
                  </div>

                  <div className="h-0.5  relative mt-5">
                    <div className="absolute top-[-8] left-0 w-[90%] h-2 rounded-2xl bg-sky-400 animate-pulse"></div>
                  </div>
                </div>

                <div className=" w-full lg:mt-10 shadow  p-5 rounded bg-[#acbce2]">
                  <div className="flex items-center">
                    <BsBootstrap
                      className="text-purple-600  text-7xl"
                      title="Bootstrap"
                    />
                    <p className="text-center ms-3 text-purple-600 ">
                      Bootstrap
                    </p>
                  </div>
                  <div className="h-0.5  relative mt-5">
                    <div className="absolute top-[-8] left-0 w-[50%] h-2 rounded-2xl bg-purple-600  animate-pulse"></div>
                  </div>
                </div>

                <div className=" w-full lg:mt-10 shadow  p-5 rounded bg-[#acbce2]">
                  <div className="flex items-center">
                    <FaGithub
                      className="text-black  text-7xl"
                      title="GitHub"
                    />
                    <p className="text-center ms-3 text-black ">
                      GitHub
                    </p>
                  </div>

                  <div className="h-0.5  relative mt-5">
                    <div className="absolute top-[-8] left-0 w-[40%] h-2 rounded-2xl bg-black  animate-pulse"></div>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </section>

        <section className="bg-[#a6b7e2] py-5">
          <div className="max-w-[1320px] mx-auto text-center">
            <h1 className="text-4xl font-bold">Projects</h1>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-10 p-5 lg:p-0">
              {projects.map((project, index) => (
                <div
                  key={index}
                  className="bg-white  shadow-md rounded-xl overflow-hidden hover:shadow-xl transition duration-300"
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-5">
                    <h3 className="text-xl font-semibold mb-2">
                      {project.title}
                    </h3>
                    <p className="text-gray-600 text-sm mb-4">
                      {project.description}
                    </p>
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block px-4 py-2 bg-blue-600 text-white text-sm rounded-lg hover:bg-blue-700 transition"
                    >
                      View Project →
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
