import React from 'react'

import { FaReact, FaNodeJs, FaJs, FaCss3Alt, FaHtml5, FaGithub } from "react-icons/fa";
import { SiNextdotjs } from "react-icons/si";
import { SiTailwindcss } from "react-icons/si";
import { BsBootstrap } from "react-icons/bs";

export default function Skills() {
  return (
    <div>      <section className="  lg:mt-13 bg-[#b8c7ec] pt-3 pb-20 ">
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
    </div>
  )
}
